import React from 'react';
import GophrLogo from './GophrLogo';
import FadeMenu from './MenuCustomList';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div className="flex justify-between p-1 mb-2 border-b-2 rounded-sm">
      <GophrLogo />
      {currentPage !== '/' &&
        currentPage !== '/register' &&
        currentPage !== '/guest-feed' &&
        currentPage !== '/forgotten-password' && <FadeMenu />}
    </div>
  );
}
