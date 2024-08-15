"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "@/lib/utils";

interface ChatData {
  id: string;
  title: string;
}

const Sidebar = () => {
  const [chats, setChats] = useState<ChatData[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`/chat/title/`)
      .then((response) => setChats(response.data.chats))
      .catch((error) => {
        console.log(error.response?.data?.error || error);
      });
  }, []);

  const handleChatClick = (id: string) => {
    router.push(`/chat/${id}`);
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 w-1/5 bg-gray-900 text-white p-4 flex flex-col overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Chat History</h2>
      <ul className="space-y-2">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer"
            onClick={() => handleChatClick(chat.id)}
          >
            {chat.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
