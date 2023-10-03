import React from 'react';

export default function ImageField({ src, alt, className }) {
  return (
    <div>
      <img src={src} alt={alt} className={className}></img>
    </div>
  );
}
