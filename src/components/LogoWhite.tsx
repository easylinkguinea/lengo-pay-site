import React from 'react';
import { Link } from 'react-router-dom';

export default function LogoWhite() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="https://portal.lengopay.com/public/images/logo_lengopay_white.png" 
        alt="Lengo Pay" 
        className="h-8 w-auto" 
      />
    </Link>
  );
}