import React from 'react';
import Link from 'next/link';
import useLogout from '@/lib/hooks/useLogout';

const UserNavbar: React.FC = () => {
  const logout = useLogout();

  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/home" className="text-white text-2xl font-bold">Telkom Bot</Link>
        <div className="space-x-4">
          <Link href="/home" className="text-white hover:text-red-200">Home</Link>
          <button
            onClick={logout}
            className="text-white hover:text-red-200 focus:outline-none"
          >
            Logout
          </button>
        </div> 
      </div>
    </nav>
  );
};

export default UserNavbar;
