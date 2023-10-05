// // Entry creation function
// app.post('/api/entryform', async (req, res) => {
//   try {
//     const { location, travelDate, blurb, imageUrl } = req.body;
//     // Validates entry form data - throws error if invalid
//     if (!location || !travelDate || !blurb || !imageUrl) {
//       throw new ClientError(400, 'all fields are required');
//     }
//     // Creates sql for new entry
//     const insertEntrySql = `
//     INSERT INTO "entries" ("location", "travelDate", "blurb", "imageUrl")
//     VALUES ($1, $2, $3, $4)
//     RETURNING "blurb"
//     `;
//     const response = await db.query(insertEntrySql, [
//       location,
//       travelDate,
//       blurb,
//       imageUrl,
//     ]);
//     // Responds with new entry data
//     res.status(201).json(response.rows[0]);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: `Failed to create entry` });
//   }
// });

// // Get
// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Delete me!' });
// });
