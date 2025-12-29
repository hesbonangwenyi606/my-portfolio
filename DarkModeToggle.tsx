import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
    if (saved) root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem('darkMode', String(!prev));
      const root = window.document.documentElement;
      if (!prev) root.classList.add('dark');
      else root.classList.remove('dark');
      return !prev;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded transition"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
