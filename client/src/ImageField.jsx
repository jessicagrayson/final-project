import React from 'react';

export default function ImageField({ src, alt, className, width, height }) {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}></img>
    </div>
  );
}
