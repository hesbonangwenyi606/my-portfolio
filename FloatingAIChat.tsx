import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const FloatingAIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaComments className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 max-w-xs bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-green-500 text-white px-4 py-2 font-semibold">
            Chat with AI
            <button
              className="float-right font-bold"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <p className="text-gray-700">Hello! Ask me anything about this portfolio.</p>
          </div>
          <div className="p-2 border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-2 py-1 border rounded-l-md focus:outline-none"
            />
            <button className="bg-green-500 text-white px-3 rounded-r-md hover:bg-green-600">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingAIChat;

