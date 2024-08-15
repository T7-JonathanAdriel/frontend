"use client";

import Sidebar from "@/components/Sidebar";
import UserNavbar from "@/components/UserNavbar";
import Footer from "@/components/Footer";
import axios from "@/lib/utils";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const startNewChat = async () => {
    try {
      const response = await axios.post('/chat/create/');
      const newChatId = response.data.id;

      router.push(`/chat/${newChatId}/`);
    } catch (error) {
      console.error('Error creating new chat:', error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="pl-72 flex-1 flex flex-col">
        <UserNavbar />

        <section className="bg-white flex flex-col justify-center items-center flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Hello, User!</h1>
          <p className="text-lg text-gray-600 mb-8">Your journey to success starts here. Explore our features and get started today!</p>
          <button 
            onClick={startNewChat} 
            className="bg-red-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700"
          >
            New Chat
          </button>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
