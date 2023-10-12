import React from 'react';

export default function CustomButton({ label, type, className }) {
  return (
    <>
      <button type={type} className={className}>
        {label}
      </button>
    </>
  );
}

// className="h-8 text-white bg-indigo-500 rounded-sm w-80">
