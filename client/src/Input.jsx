import React from 'react';

// Later delete ml and mt, just so I can see better for now
export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}

// export default function Input() {
//   return (
//     <input
//       type="text"
// className =
//   'bg-zinc-200 border-2 border-indigo-400 w-80 h-9 rounded-sm mt-5 ml-10';
//     />
//   );
// }
