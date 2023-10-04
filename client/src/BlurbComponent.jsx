import React from 'react';

export function BlurbComponent({ value, className }) {
  return (
    <div>
      <textarea className={`w-full${className}`} value={value}></textarea>
    </div>
  );
}
