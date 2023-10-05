import React from 'react';

export default function LinkComponent({ href, className, placeholder }) {
  return (
    <div>
      <a href={href} className={className}>
        {placeholder}
      </a>
    </div>
  );
}
