import React from 'react';
import Link from 'next/link';

const GuestNavbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">TelkomBot</Link>
        <div className="space-x-4">
          <Link href="/register" className="text-white hover:text-red-200">Register</Link>
          <Link href="/login" className="text-white hover:text-red-200">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default GuestNavbar;
