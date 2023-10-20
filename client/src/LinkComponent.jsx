import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkComponent({
  to,
  className,
  placeholder,
  entry,
  state,
  onClick,
}) {
  return (
    <div>
      <Link
        onClick={onClick}
        to={to}
        state={state}
        className={className}
        entry={entry}>
        {placeholder}
      </Link>
    </div>
  );
}
