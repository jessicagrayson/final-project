import React from 'react';
import GophrLogo from './GophrLogo';
import FadeMenu from './MenuCustomList';

export default function NavBar() {
  return (
    <div className="flex justify-between p-1">
      <GophrLogo />

      <FadeMenu />
    </div>
  );
}
