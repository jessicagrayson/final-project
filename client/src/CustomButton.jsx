import React from 'react';

export default function CustomButton({ label, type, className, onClick }) {
  return (
    <>
      <button onClick={onClick} type={type} className={className}>
        {label}
      </button>
    </>
  );
}
