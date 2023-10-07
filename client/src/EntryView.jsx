// import React, { useState, useEffect } from 'react';
// import Entry from './Entry';

// export default function EntryView({ onChange }) {
//   const [entry, setEntry] = useState([]);
//   const [entryId, setEntryId] = useState(5);

//   const fetchEntry = async (entryId) => {
//     try {
//       const res = await fetch(`/api/entries/${entryId}`);
//       if (!res.ok) {
//         throw new Error('Network response was not okay');
//       }
//       const entryData = await res.json();
//       console.log(entryData);
//       setEntry(entryData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchEntry(entryId);
//   }, [entryId]);

//   function handleSelect() {
//     if (onChange) {
//       onChange(entryId);
//     }
//   }

//   return (
//     <div>
//       <Entry entry={entry} onChange={handleSelect} />
//     </div>
//   );
// }
