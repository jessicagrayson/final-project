// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// import LinkComponent from './LinkComponent';
// // import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useState } from 'react';
// import {
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
// } from '@material-tailwind/react';
// import { useParams } from 'react-router-dom';

// export function MenuDefault() {
//   const [entry, setEntry] = useState();
//   const { entryId } = useParams();
//   <FontAwesomeIcon icon={faPen} />;

//   // Fetches entry by entryId
//   useEffect(() => {
//     const fetchEntry = async () => {
//       try {
//         const res = await fetch(`/api/entries/${entryId}`);
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

//   async function removeEntry() {
//     console.log(entryId);
//     try {
//       const res = await fetch(`/api/delete/${entryId}`, {
//         method: 'DELETE',
//       });
//       if (!res.ok) {
//         throw new Error(`Network status not okay: ${res.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//     // handleRemove();
//   }

//   async function handleRemove() {
//     await removeEntry();
//     console.log(entryId);
//     // navigate('/list');
//   }

//   if (!entry) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <Menu>
//       <MenuHandler>
//         <Button></Button>
//       </MenuHandler>
//       <MenuList>
//         <MenuItem>
//           <LinkComponent
//             to="/update-entry/:entryId"
//             state={entry}
//             placeholder="Edit Entry"
//             className="text-indigo-500"
//           />
//         </MenuItem>
//         <MenuItem>
//           <LinkComponent
//             // debugger
//             onClick={() => handleRemove(entry.entryId)}
//             // to="/list"
//             placeholder="Delete"
//             className="text-rose-500"
//             debugger
//           />
//         </MenuItem>
//         <MenuItem>Menu Item 3</MenuItem>
//       </MenuList>
//     </Menu>
//   );
// }
