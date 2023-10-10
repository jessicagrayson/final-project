import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent({ to, className, placeholder, entry }) {
  return (
    <div>
      <Link to={to} className={className} entry={entry}>
        {placeholder}
      </Link>
    </div>
  );
}
