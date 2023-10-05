import React from 'react';

export default function BlurbComponent({ value, className, onChange }) {
  return (
    <div>
      <textarea
        onChange={onChange}
        className={`w-full${className}`}
        value={value}></textarea>
    </div>
  );
}
