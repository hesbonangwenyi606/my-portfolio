import React, { useState } from "react";

const NanoChatBot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setComments([...comments, message.trim()]);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-[9999] hover:bg-blue-500 transition"
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-44 right-6 w-72 bg-white rounded-xl shadow-2xl flex flex-col text-sm z-[9998] border border-gray-200">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 font-semibold rounded-t-xl">
            Reviewer Chat
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 h-56 overflow-y-auto">
            {comments.length === 0 ? (
              <p className="text-gray-400 text-center">No comments yet.</p>
            ) : (
              comments.map((c, i) => (
                <div
                  key={i}
                  className="bg-blue-100 text-blue-800 p-2 rounded-lg mb-2 break-words"
                >
                  {c}
                </div>
              ))
            )}
          </div>

          {/* Input Area */}
          <div className="flex border-t border-gray-200">
            <input
              type="text"
              className="flex-1 p-2 outline-none text-sm"
              placeholder="Leave comment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 hover:bg-blue-500 transition text-sm rounded-r-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NanoChatBot;
