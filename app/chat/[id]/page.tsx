"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import UserNavbar from "@/components/UserNavbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

const Chat = ({ params }: Props) => {
  const router = useRouter();
  const id = params.id;
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`/chat/${id}/`)
        .then((response) => {
          setMessages(response.data.messages);
        })
        .catch((error) => {
          console.log(error.response?.data?.error || error);
          router.push("/home");
        });
    }
  }, [id, router]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      axios
        .post(`/chat/message/create`, { chatId: id, content: newMessage })
        .then((response) => {
          if (messages.length === 0) {
            window.location.reload();
          }

          setMessages((prevMessages) => [
            ...prevMessages,
            ...response.data.messages,
          ]);
          setNewMessage("");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="pl-72 flex-1 flex flex-col">
        <UserNavbar />
        <section className="pt-12 bg-white flex flex-col justify-center items-center flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Chat {id}</h1>
          <div className="flex flex-col space-y-4 w-full max-w-3xl p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>
          <div className="w-full max-w-3xl p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 p-2 border rounded-lg"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Chat;
