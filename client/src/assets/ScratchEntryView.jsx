// import React, { useState, useEffect } from 'react';
// import LinkComponent from './LinkComponent';
// import Entry from './Entry';

// export default function EntryView({ entryId, onChange }) {
//   const [entry, setEntry] = useState('');

//   const fetchEntry = async (entryId) => {
//     try {
//       console.log('inside:', entryId);
//       const res = await fetch(`/api/entries/${entryId}`);
//       if (!res.ok) {
//         throw new Error('Network response was not okay');
//       }
//       const entryData = await res.json();
//       console.log('data:', entryData);
//       console.log('entry:', entry);
//       setEntry(entryData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (entryId) {
//       fetchEntry(entryId);
//       console.log(entryId);
//     }
//   }, [entryId]);

//   function handleSelect() {
//     if (onChange) {
//       onChange(entryId);
//     }
//   }
//   console.log('entryId:', entryId);

//   return (
//     <div>
//       <Entry entry={entry} onChange={handleSelect} />
//       <LinkComponent
//         to="/list"
//         placeholder="Back"
//         className="text-indigo-500"
//       />
//     </div>
//   );
// }

// afternoon

// import React, { useState, useEffect } from 'react';
// import Entry from './Entry';
// import LinkComponent from './LinkComponent';

// export default function EntryView({ entryId, onChange }) {
//   const [entry, setEntry] = useState({});

//   const fetchEntry = async (entryId) => {
//     try {
//       const res = await fetch(`/api/entries/${entryId}`);
//       if (!res.ok) {
//         throw new Error('Network response was not okay');
//       }
//       const entryData = await res.json();
//       console.log('entry data:', entryData);
//       setEntry(entryData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (entryId) {
//       fetchEntry(entryId);
//       console.log(entryId);
//     }
//   }, [entryId]);

//   function handleSelect() {
//     if (onChange) {
//       onChange(entryId);
//     }
//   }
//   console.log('entry:', entry.values);

//   return (
//     <div>
//       <Entry entry={entry} onChange={handleSelect} />
//       <LinkComponent
//         to="/list"
//         placeholder="Back"
//         className="text-indigo-500"
//       />
//     </div>
//   );
// }

// one more
// import React, { useState, useEffect } from 'react';
// import Entry from './Entry';
// import LinkComponent from './LinkComponent';

// export default function EntryView({ entryId, onChange }) {
//   const [entry, setEntry] = useState({});

//   const fetchEntry = async () => {
//     alert('inside fetch');
//     try {
//       alert('inside try');
//       const res = await fetch(`/api/entries/${entryId}`);
//       alert('after fetch');
//       console.log('res:', res);
//       if (!res.ok) {
//         alert('inside if not ok');
//         throw new Error('Network response was not okay');
//       }
//       alert('out of if');
//       const entryData = await res.json();
//       alert(entryData);
//       console.log('entry data:', entryData);
//       setEntry(entryData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchEntry();

//   // useEffect(() => {
//   //   if (entryId) {
//   //     fetchEntry(entryId);
//   //     console.log(entryId);
//   //   }
//   // }, [entryId]);

//   // function handleSelect() {
//   //   if (onChange) {
//   //     onChange(entryId);
//   //   }
//   // }
//   // console.log('entry:', entry.values);

//   return (
//     <div>
//       <Entry entry={entry} />
//       <LinkComponent
//         to="/list"
//         placeholder="Back"
//         className="text-indigo-500"
//         onClick={() => fetchEntry(entryId)}
//       />
//     </div>
//   );
// }
