import React from 'react';

interface ChatHistoryProps {
  chats: string[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chats }) => {
  return (
    <div className="w-1/5 bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Chat History</h2>
      <ul className="space-y-2">
        {chats.map((chat, index) => (
          <li key={index} className="bg-gray-800 p-2 rounded hover:bg-gray-700 cursor-pointer">
            {chat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
