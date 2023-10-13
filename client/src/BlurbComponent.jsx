import React from 'react';

export default function BlurbComponent({ value, className, onChange }) {
  return (
    <div>
      <textarea
        onChange={onChange}
        className={`w-full overflow-scroll ${className}`}
        value={value}></textarea>
    </div>
  );
}
