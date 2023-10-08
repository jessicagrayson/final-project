import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent({ to, className, placeholder }) {
  return (
    <div>
      <Link to={to} className={className}>
        {placeholder}
      </Link>
    </div>
  );
}

// ORIGINAL COMPONENT - DELETE WHEN LINK TESTED
// export default function LinkComponent({ href, className, placeholder }) {
//   return (
//     <div>
//       <a href={href} className={className}>
//         {placeholder}
//       </a>
//     </div>
//   );
// }
