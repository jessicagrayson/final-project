// // GETS entry values by id
// app.get('/api/entries/:entryId', async (req, res) => {
//   try {
//     const entryId = Number(req.params.entryId);
//     if (!Number.isInteger(entryId) || entryId <= 0) {
//       throw new ClientError(400, '"entryId" must be an integer');
//     }
//     const sql = `
//     SELECT * from "entries"
//     WHERE "entryId" = $1
//     `;

//     const params = [entryId];
//     const result = await db.query(sql, params);
//     const entry = result.rows[0];

//     if (!entry) {
//       throw new ClientError(404, `Cannot find entry with ID ${entryId}`);
//     }

//     res.status(200).json(entry);
//   } catch (error) {
//     console.error(error);
//   }
// });
