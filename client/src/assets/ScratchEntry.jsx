// // import React, { useState, useEffect } from 'react';
// import ImageField from './ImageField';
// import LinkComponent from './LinkComponent';
// import Input from './Input';
// import BlurbComponent from './BlurbComponent';

// export default function Entry({ entry }) {
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

//   function handleClick() {
//     // This needs to be changed later - functional for now.
//     console.log('clicked');
//   }

//   return (
//     <div>
//       <form className="flex flex-col">
//         <Input
//           className="text-indigo-400"
//           placeholder="Location"
//           value={entry.location}
//           onChange={handleClick}
//         />
//         <Input
//           className="text-indigo-400"
//           placeholder="Travel Date"
//           value={entry.travelDate}
//           onChange={handleClick}
//         />
//         <ImageField
//           src={entry.imageUrl}
//           placeholder="Image URL"
//           value={entry.imageUrl}
//           onChange={handleClick}
//         />
//         <BlurbComponent
//           className="text-black"
//           placeholder="Blurb"
//           value={entry.blurb}
//           onChange={handleClick}
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

// MORE
// import React, { useState, useEffect } from 'react';
// import ImageField from './ImageField';
// import LinkComponent from './LinkComponent';
// import Input from './Input';
// import BlurbComponent from './BlurbComponent';

// export default function Entry({ entry }) {
//   return (
//     <div>
//       <form className="flex flex-col">
//         <Input
//           className="text-indigo-400"
//           placeholder="Location"
//           value={entry.location}
//           onChange={(e) => entry.onChange('location', e.target.value)}
//         />
//         <Input
//           className="text-indigo-400"
//           placeholder="Travel Date"
//           value={entry.travelDate}
//           onChange={(e) => entry.onChange('Travel Date', e.target.value)}
//         />
//         <ImageField
//           src={entry.imageUrl}
//           placeholder="Image URL"
//           value={entry.imageUrl}
//           onChange={(e) => entry.onChange('Image Url', e.target.value)}
//         />
//         <BlurbComponent
//           className="text-black"
//           placeholder="Blurb"
//           value={entry.blurb}
//           onChange={(e) => entry.onChange('Blurb', e.target.value)}
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
