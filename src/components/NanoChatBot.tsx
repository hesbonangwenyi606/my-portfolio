import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ChatMessage {
  name: string;
  text: string;
}

const NanoChatBot = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState<ChatMessage[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

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

  // Send new comment
  const sendMessage = () => {
    if (!message.trim() || !name.trim()) return;
    const newMessage = { name, text: message.trim() };
    setComments([...comments, newMessage]);
    setMessage("");
  };

  // Admin delete message
  const deleteMessage = (index: number) => {
    if (window.confirm("Delete this message?")) {
      const updated = comments.filter((_, i) => i !== index);
      setComments(updated);
    }
  };

  // Admin start editing
  const startEdit = (index: number) => {
    setEditingIndex(index);
    setEditingText(comments[index].text);
  };

  // Save edited message
  const saveEdit = (index: number) => {
    const updated = [...comments];
    updated[index].text = editingText;
    setComments(updated);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-28 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg z-[9999]"
      >
        {open ? "×" : "💬"}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-44 right-6 w-80 bg-white rounded-xl shadow-lg flex flex-col text-sm z-[9998] border border-gray-200">
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
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500 transition"
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
                    <div key={i} className="relative group mb-2">
                      {editingIndex === i ? (
                        <div className="flex flex-col">
                          <input
                            type="text"
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            className="border border-gray-300 p-1 rounded mb-1"
                          />
                          <div className="flex gap-2 justify-end">
                            <button
                              onClick={() => saveEdit(i)}
                              className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-500 text-xs"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingIndex(null)}
                              className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500 text-xs"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`p-2 rounded ${
                            c.name === name ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          <strong>{c.name}:</strong> {c.text}

                          {/* Admin-only edit/delete */}
                          <div className="absolute top-1 right-2 hidden group-hover:flex gap-1">
                            <button
                              onClick={() => startEdit(i)}
                              className="text-gray-500 hover:text-blue-600"
                              title="Edit"
                            >
                              <FaEdit size={12} />
                            </button>
                            <button
                              onClick={() => deleteMessage(i)}
                              className="text-gray-500 hover:text-red-600"
                              title="Delete"
                            >
                              <FaTrash size={12} />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Input */}
              <div className="flex border-t border-gray-200 p-2">
                <input
                  type="text"
                  className="flex-1 p-2 outline-none text-sm"
                  placeholder="Write your comment..."
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
