import React from 'react';
import { useNavigate } from 'react-router-dom';
import GophrLogo from './GophrLogo';
import LinkComponent from './LinkComponent';

export default function NavBar() {
  const navigate = useNavigate();
  function handleSignOut() {
    sessionStorage.removeItem('token');
    navigate('/');
  }

  return (
    <div className="flex justify-between mr-12">
      <GophrLogo />
      <LinkComponent
        to="/create-entry"
        placeholder="Create New Entry"
        className="text-indigo-500"
      />

      <LinkComponent
        onClick={handleSignOut}
        to="/"
        placeholder="Sign Out"
        className="text-rose-400"
      />
    </div>
  );
}
