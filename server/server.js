import 'dotenv/config';
import express from 'express';
import argon2 from 'argon2';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

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

// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Delete me!' });
// });

// Account registration function
app.post('/api/register', async (req, res) => {
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
    console.error(error);
    return res.status(500).json({ message: 'Failed to register' });
  }
});

// POSTS new entry
app.post('/api/entryform', async (req, res) => {
  try {
    const { location, travelDate, blurb, imageUrl } = req.body;
    // Validates entry form data - throws error if invalid
    if (!location || !travelDate || !blurb || !imageUrl) {
      throw new ClientError(400, 'all fields are required');
    }
    // Creates sql for new entry
    const insertEntrySql = `
    INSERT INTO "entries" ("location", "travelDate", "blurb", "imageUrl")
    VALUES ($1, $2, $3, $4)
    RETURNING "blurb"
    `;
    const response = await db.query(insertEntrySql, [
      location,
      travelDate,
      blurb,
      imageUrl,
    ]);
    // Responds with new entry data
    res.status(201).json(response.rows[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Failed to create entry` });
  }
});

// GETS entry values by id
app.get('/api/entries/:entryId', async (req, res) => {
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
    console.error(error);
  }
});

// GETS all entries
app.get('/api/entries', async (req, res) => {
  try {
    const sql = `
    SELECT * from "entries"
    `;

    const result = await db.query(sql);
    const entries = result.rows;

    if (!entries) {
      return res.status(404).json({ error: 'No entries found' });
    }

    res.status(200).json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (updates) an entry by id
app.put('/api/update/:entryId', async (req, res) => {
  try {
    const entryId = Number(req.params.entryId);
    validateEntryId(entryId);
    const { imageUrl, location, travelDate, blurb } = req.body;

    // Create sql object
    const sql = `
    UPDATE "entries"
    SET "imageUrl" = $2,
    "location" = $3,
    "travelDate" = $4,
    "blurb" = $5
    WHERE "entryId" = $1
    RETURNING *
`;
    // Set query params
    const params = [entryId, imageUrl, location, travelDate, blurb];
    const result = await db.query(sql, params);
    const entry = result.rows[0];
    if (!entry) {
      throw new ClientError(404, `Cannot find entry with "entryId" ${entryId}`);
    }
    res.json(entry);
  } catch (error) {
    console.error(error);
  }
});

app.delete('/api/delete/:entryId', async (req, res) => {
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
    console.error(error);
    res.sendStatus(500);
    // Confirm message for entryId
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
