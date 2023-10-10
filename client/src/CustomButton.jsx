import React from 'react';

export default function CustomButton({ label, type }) {
  return (
    <>
      <button
        type={type}
        className="h-8 mt-5 ml-10 text-white bg-indigo-500 rounded-sm w-80">
        {label}
      </button>
    </>
  );
}
