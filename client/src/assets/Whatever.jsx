// app.post(
//   '/api/entryform',
//   authMiddleware,
//   uploadsMiddleware.single('imageUrl'),
//   async (req, res, next) => {

//     try {
//       if (!req.user) {
//         throw new ClientError(401, 'User is not logged in');
//       }
//       const file = req.file;
//       const { location, travelDate, blurb } = req.body;
//       // Validates entry form data - throws error if invalid
//       if (!location || !travelDate || !blurb || !file) {
//         throw new ClientError(400, 'all fields are required');
//       }

//       const url = `/images/${file.filename}`;

//       // Creates sql for new entry
//       const insertEntrySql = `
//     INSERT INTO "entries" ("userId", "location", "travelDate", "blurb", "imageUrl")
//     VALUES ($1, $2, $3, $4, $5)
//     RETURNING *
//     `;
//       const params = [req.user.userId, location, travelDate, blurb, url];
//       const response = await db.query(insertEntrySql, params);
//       // Responds with new entry data
//       res.status(201).json(response.rows[0]);
//     } catch (error) {
//       next(error);
//     }
//   }
// );
