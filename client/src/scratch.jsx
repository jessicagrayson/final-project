// import React, { useState, useEffect } from 'react';
// import ImageField from './ImageField';
// import LinkComponent from './LinkComponent';
// import Input from './Input';
// import BlurbComponent from './BlurbComponent';

// export default function Entry() {
//   // const [location, setLocation] = useState('');
//   // const [travelDate, setTravelDate] = useState('');
//   // const [blurb, setBlurb] = useState('');
//   // const [imageUrl, setImageUrl] = useState('');
//   const [entry, setEntry] = useState('');
//   // const [entryId, setEntryId] = useState('');

//   // const fetchEntry = async (entryId) => {
//   //   try {
//   //     const res = await fetch(`/api/entries/${entryId}`);
//   //     if (!res.ok) {
//   //       throw new Error('Network response was not okay');
//   //     }
//   //     const entryData = await res.json();
//   //     console.log(entryData);
//   //     setLocation(entryData.location);
//   //     setTravelDate(entryData.travelDate);
//   //     setBlurb(entryData.blurb);
//   //     setImageUrl(entryData.imageUrl);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (entryId) {
//   //     fetchEntry(entryId);
//   //   } else {
//   //     //  It's something to do with this section
//   //     setEntryId();
//   //     setLocation('');
//   //     setTravelDate('');
//   //     setBlurb('');
//   //     setImageUrl('');
//   //   }
//   // }, [entryId]);

//   useEffect(() => {
//     async function fetchEntries() {
//       try {
//         const res = await fetch(`/api/entries`);
//         if (!res.ok) throw new Error(`fetch error: ${res.status}`);
//         const entry = await res.json();
//         setEntry(entry);
//       } catch (error) {
//         throw new Error('fetch error');
//       }
//     }
//     fetchEntries();
//   }, []);

//   return (
//     <div>
//       <form className="flex flex-col">
//         <Input
//           // onChange={(e) => setLocation(e.target.value)}
//           className="text-indigo-400"
//           placeholder="Location"
//           value={entry[3].location}
//         />
//         <Input
//           // onChange={(e) => setTravelDate(e.target.value)}
//           className="text-indigo-400"
//           placeholder="Travel Date"
//           value={entry[3].travelDate}
//         />
//         <ImageField
//           // onChange={(e) => setImageUrl(e.target.value)}
//           src={entry[3].imageUrl}
//           placeholder="Image URL"
//           value={entry[3].imageUrl}
//         />
//         <BlurbComponent
//           // onChange={(e) => setBlurb(e.target.value)}
//           className="text-black"
//           placeholder="Blurb"
//           value={entry[3].blurb}
//         />
//         {/* This link will be an expand link, update when done testing */}
//         <LinkComponent
//           href={'#'}
//           placeholder={'Expand (link)'}
//           className="text-indigo-500"
//         />
//       </form>
//     </div>
//   );
// }

///

// const [entries, setEntries] = useState('');

// useEffect(() => {
//   async function fetchEntries() {
//     try {
//       const res = await fetch(`/api/entries`);
//       if (!res.ok) throw new Error(`fetch error: ${res.status}`);
//       const entries = await res.json();
//       setEntries(entries);
//     } catch (error) {
//       throw new Error('fetch error');
//     }
//   }
//   fetchEntries();
// }, []);
// console.log(entry);
