import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GophrLogo() {
  const navigate = useNavigate();
  function handleSignOut() {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  return (
    <h1
      onClick={handleSignOut}
      className="text-4xl font-bold text-indigo-500 drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black cursor-pointer">
      Gophr
    </h1>
  );
}
