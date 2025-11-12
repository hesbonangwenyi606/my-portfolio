import React, { useState, useEffect } from "react";

interface ChatMessage {
  name: string;
  text: string;
}

const NanoChatBot = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<ChatMessage[]>([]);

  // Load saved messages and name
  useEffect(() => {
    const savedComments = localStorage.getItem("nanoChatComments");
    const savedName = localStorage.getItem("nanoChatClientName");
    if (savedComments) setComments(JSON.parse(savedComments));
    if (savedName) setName(savedName);
  }, []);

  // Save messages
  useEffect(() => {
    localStorage.setItem("nanoChatComments", JSON.stringify(comments));
  }, [comments]);

  // Save name
  useEffect(() => {
    if (name) localStorage.setItem("nanoChatClientName", name);
  }, [name]);

  const sendMessage = () => {
    if (!message.trim() || !name.trim()) return;
    const newMessage = { name, text: message.trim() };
    setComments([...comments, newMessage]);
    setMessage("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-[9999]"
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-44 right-6 w-80 bg-white rounded-xl shadow-lg flex flex-col text-sm z-[9998]">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 font-semibold rounded-t-xl">
            Leave a Comment
          </div>

          {/* Ask for name */}
          {!name ? (
            <div className="p-4">
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full border border-gray-300 rounded p-2 text-sm mb-2"
                onChange={(e) => setName(e.target.value)}
              />
              <button
                onClick={() => name && localStorage.setItem("nanoChatClientName", name)}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
              >
                Start Commenting
              </button>
            </div>
          ) : (
            <>
              {/* Messages */}
              <div className="flex-1 p-3 h-56 overflow-y-auto">
                {comments.length === 0 ? (
                  <p className="text-gray-400 text-center">No comments yet.</p>
                ) : (
                  comments.map((c, i) => (
                    <div key={i} className="bg-gray-100 p-2 rounded mb-2">
                      <strong>{c.name}:</strong> {c.text}
                    </div>
                  ))
                )}
              </div>

              {/* Input for comment */}
              <div className="flex border-t border-gray-200 p-2">
                <input
                  type="text"
                  className="flex-1 p-2 outline-none text-sm"
                  placeholder="Write a comment..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-600 text-white px-3 ml-2 rounded hover:bg-blue-500 transition"
                >
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default NanoChatBot;
