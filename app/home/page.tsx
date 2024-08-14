"use client";

import { useState } from "react";
import Link from "next/link";
import ChatHistory from "@/components/Sidebar";
import UserNavbar from "@/components/UserNavbar";
import Footer from "@/components/Footer";

const Home = () => {
  const [user, setUser] = useState<string | null>("User");
  const [chats, setChats] = useState<string[]>([
    "Chat 1",
    "Chat 2",
    "Chat 3",
  ]);

  return (
    <div className="flex h-screen">
      <ChatHistory chats={chats} />
      <div className="flex-1 flex flex-col">
        <UserNavbar />

        <section className="bg-white flex flex-col justify-center items-center flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, {user}!</h1>
          <p className="text-lg text-gray-600 mb-8">Your journey to success starts here. Explore our features and get started today!</p>
          <Link href="/register">
            <span className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700">New Chat</span>
          </Link>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
