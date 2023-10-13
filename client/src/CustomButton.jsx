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
