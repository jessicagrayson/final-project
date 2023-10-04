// app.post('/api/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     // Validates registration data - throws error if invalid
//     if (!username || !password) {
//       throw new ClientError(400, 'username and password required');
//     }
//     // Hashes user's password using argon
//     const hashedPassword = await argon2.hash(password);
//     // Creates sql for new user and inserts into database
//     const insertUserSql = `INSERT INTO "users"("username", "hashedPassword")
//     VALUES($1, $2)
//     RETURNING "userId", "username"
//     `;
//     const response = await db.query(insertUserSql, [username, hashedPassword]);
//     // Responds w/ new user data
//     res.status(201).json(response.rows[0]);
//     // Handles error
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Failed to register' });
//   }
// });
