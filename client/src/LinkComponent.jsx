import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent({
  to,
  className,
  placeholder,
  entry,
  state,
}) {
  return (
    <div>
      <Link to={to} state={state} className={className} entry={entry}>
        {placeholder}
      </Link>
    </div>
  );
}
