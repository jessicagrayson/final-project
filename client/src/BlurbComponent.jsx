import React from 'react';

export default function BlurbComponent({ value, className }) {
  return (
    <div>
      <textarea className={`w-full${className}`} value={value}></textarea>
    </div>
  );
}
