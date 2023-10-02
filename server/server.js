/* eslint-disable no-unused-vars  -- Remove when used */
import 'dotenv/config';
import express from 'express';
import argon2 from 'argon2';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
// eslint-disable-next-line no-unused-vars -- Remove when used
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

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

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
function validateRegistration(username, password) {
  if (!username || !password) {
    throw new ClientError(400, 'Username and password are required fields');
  }
}
