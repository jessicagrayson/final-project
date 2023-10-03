import React from 'react';

// Rename function and pass title as a prop so it can be reusable for sign up vs sign in
export default function CustomButton({ label }) {
  return (
    <>
      <button
        type="submit"
        className="h-8 mt-5 ml-10 text-white bg-indigo-500 rounded-sm w-80">
        {label}
      </button>
    </>
  );
}
