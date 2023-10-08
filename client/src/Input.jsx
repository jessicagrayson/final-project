import React from 'react';

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  className,
  id,
  name,
  autoComplete,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      id={id}
      name={name}
      autoComplete={autoComplete}
    />
  );
}
