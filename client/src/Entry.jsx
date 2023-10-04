// import React, { useState } from 'react';
// import ImageField from './ImageField';
// import LinkComponent from './LinkComponent';
// import Input from './Input';
// import BlurbComponent from './BlurbComponent';

// export default function Entry() {
//   const [location, setLocation] = useState('');
//   const [travelDate, setTravelDate] = useState('');
//   const [blurb, setBlurb] = useState('');
//   const [imageUrl, setImageUrl] = useState('');

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const handleTravelDateChange = (e) => {
//     setTravelDate(e.target.value);
//   };

//   const handleBlurbChange = (e) => {
//     setBlurb(e.target.value);
//   };

//   const handleImageUrlChange = (e) => {
//     setImageUrl(e.target.value);
//   };

//   const handleEntrySelection = async () => {
//     // Change this later to be a template literal
//     const entryId = 1;

//     try {
//       const res = await fetch(`/api/entries/${entryId}`, {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//         },
//       });
//       if (!res.ok) {
//         throw new Error(`Fetch error ${res.status}`);
//       }
//       const entry = await res.json();
//       console.log('Fetched entry:', entry);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <form className="flex flex-col">
//         <Input
//           onChange={handleLocationChange}
//           className="text-indigo-400"
//           placeholder="Location"
//         />
//         <Input
//           onChange={handleTravelDateChange}
//           className="text-indigo-400"
//           placeholder="Travel Date"
//         />
//         <ImageField
//           onChange={handleImageUrlChange}
//           src={imageUrl}
//           placeholder="Image URL"
//         />
//         <BlurbComponent
//           onChange={handleBlurbChange}
//           className="text-black"
//           placeholder="Blurb"
//         />
//         <LinkComponent
//           href={'#'}
//           placeholder={'Back'}
//           className="text-indigo-500"
//         />
//       </form>
//     </div>
//   );
// }
