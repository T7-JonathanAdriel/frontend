"use client";

import GuestNavbar from '@/components/GuestNavbar';
import Footer from '@/components/Footer';

import Link from 'next/link';

const Landing = () => {
  return (
    <div className="flex flex-col">
      <GuestNavbar />
      <section className="bg-white flex h-screen items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to TelkomBot</h1>
          <p className="text-lg text-gray-600 mb-8">Your journey to success starts here. Explore our features and get started today!</p>
          <Link href="/register">
            <span className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700">Get Started</span>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
