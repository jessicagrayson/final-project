import 'dotenv/config';
import express from 'express';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import pg from 'pg';
import {
  ClientError,
  errorMiddleware,
  authMiddleware,
  uploadsMiddleware,
} from './lib/index.js';

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

// Account registration function
app.post('/api/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // Validates registration data - throws error if invalid
    if (!username || !password) {
      throw new ClientError(400, 'username and password required');
    }
    // Hashes user's password using argon
    const hashedPassword = await argon2.hash(password);
    // Creates sql for new user and inserts into database
    const insertUserSql = `INSERT INTO "users"("username", "hashedPassword")
    VALUES($1, $2)
    RETURNING "userId", "username"
    `;
    const response = await db.query(insertUserSql, [username, hashedPassword]);
    // Responds w/ new user data
    res.status(201).json(response.rows[0]);
    // Handles error
  } catch (error) {
    next(error);
  }
});

// Sign in
app.post('/api/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(401, 'Invalid login credentials');
    }
    const sql = `
    SELECT "userId", "hashedPassword" from "users" where "username" = $1
    `;
    const params = [username];
    const result = await db.query(sql, params);
    const [user] = result.rows;
    if (!user) {
      throw new ClientError(401, 'Invalid login credentials');
    }
    const { userId, hashedPassword } = user;

    if (!(await argon2.verify(hashedPassword, password))) {
      throw new ClientError(401, 'Invalid login credentials');
    }
    const payload = { userId, username };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET);
    res.json({ token, user: payload });
  } catch (error) {
    next(error);
  }
});

// POSTS new entry with authentication, authorization and file uploading
app.post(
  '/api/entryform',
  authMiddleware,
  uploadsMiddleware.single('imageUrl'),
  async (req, res, next) => {
    try {
      if (!req.user) {
        throw new ClientError(401, 'User is not logged in');
      }
      const file = req.file;
      const { location, travelDate, blurb } = req.body;
      // Validates entry form data - throws error if invalid
      if (!location || !travelDate || !blurb || !file) {
        throw new ClientError(400, 'all fields are required');
      }

      const url = `/images/${file.filename}`;

      // Creates sql for new entry
      const insertEntrySql = `
    INSERT INTO "entries" ("userId", "location", "travelDate", "blurb", "imageUrl")
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
      const params = [req.user.userId, location, travelDate, blurb, url];
      const response = await db.query(insertEntrySql, params);
      // Responds with new entry data
      res.status(201).json(response.rows[0]);
    } catch (error) {
      next(error);
    }
  }
);

// PUT (updates) an entry by id
app.put(
  '/api/update/:entryId',
  authMiddleware,
  uploadsMiddleware.single('imageUrl'),
  async (req, res, next) => {
    try {
      const entryId = Number(req.params.entryId);
      validateEntryId(entryId);
      const file = req.file;
      const { location, travelDate, blurb } = req.body;
      if (!location || !travelDate || !blurb || !file) {
        throw new ClientError(400, 'all fields are required');
      }

      const url = `/images/${file.filename}`;

      // Create sql object
      const sql = `
    UPDATE "entries"
    SET "imageUrl" = $5,
    "location" = $2,
    "travelDate" = $3,
    "blurb" = $4
    WHERE "entryId" = $1
    RETURNING *
`;
      // Set query params
      const params = [entryId, location, travelDate, blurb, url];
      const result = await db.query(sql, params);
      const entry = result.rows[0];
      if (!entry) {
        throw new ClientError(
          404,
          `Cannot find entry with "entryId" ${entryId}`
        );
      }
      res.json(entry);
    } catch (error) {
      next(error);
    }
  }
);

// GETS entry values by id
app.get('/api/entries/:entryId', async (req, res, next) => {
  try {
    const entryId = Number(req.params.entryId);
    if (!Number.isInteger(entryId) || entryId <= 0) {
      throw new ClientError(400, '"entryId" must be an integer');
    }
    const sql = `
    SELECT * from "entries"
    WHERE "entryId" = $1
    `;

    const params = [entryId];
    const result = await db.query(sql, params);
    const entry = result.rows[0];

    if (!entry) {
      throw new ClientError(404, `Cannot find entry with ID ${entryId}`);
    }

    res.status(200).json(entry);
  } catch (error) {
    next(error);
  }
});

// GETS all entries
app.get('/api/entries', authMiddleware, async (req, res, next) => {
  try {
    if (!req.user) {
      throw new ClientError(401, 'You are not logged in');
    }

    const sql = `
    SELECT * from "entries"
    WHERE "userId" = $1
    `;
    const result = await db.query(sql, [req.user.userId]);
    const entries = result.rows;
    if (!entries) {
      return res.status(404).json({ error: 'No entries found' });
    }
    res.status(200).json(entries);
  } catch (error) {
    next(error);
  }
});

// DELETES an entry
app.delete('/api/delete/:entryId', async (req, res, next) => {
  try {
    const entryId = Number(req.params.entryId);
    validateEntryId(entryId);

    // Create sql object
    const sql = `
    DELETE from "entries"
    WHERE "entryId" = $1
    RETURNING *
`;
    // Set query params
    const params = [entryId];
    const result = await db.query(sql, params);
    const entry = result.rows[0];
    validateEntry(entry, entryId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Vite server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});

// Validation functions
function validateEntryId(entryId) {
  if (!Number.isInteger(entryId) || entryId <= 0) {
    throw new ClientError(400, 'entryId must be a positive integer');
  }
}

function validateEntry(entry, entryId) {
  if (!entry) {
    throw new ClientError(404, `Cannot find entry with "entryId" ${entryId}`);
  }
}
