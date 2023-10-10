// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import EntryForm from './EntryForm';

// export default function UpdateEntry() {
//   const [entry, setEntry] = useState(null);
//   const { entryId } = useParams();

//   useEffect(() => {
//     const fetchEntry = async () => {
//       try {
//         const res = await fetch(`api/entries/${entryId}`);

//         if (!res.ok) {
//           throw new Error('Network response was not okay');
//         }

//         const entryData = await res.json();
//         setEntry(entryData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (entryId) {
//       fetchEntry();
//     }
//   }, [entryId]);

//   if (!entry) {
//     return <div>Loading...</div>;
//   }

//   return <EntryForm entry={entry} />;
// }
