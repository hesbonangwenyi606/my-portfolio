"use client";

import React, { useEffect, useState, useRef } from "react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const NAVBAR_HEIGHT = 80;

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const navRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 10;
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(item.id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const idx = NAV_ITEMS.findIndex((item) => item.id === activeSection);
    const el = navRefs.current[idx];
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeSection]);

  return (
    <>
      {/* Profile picture */}
      <div className="fixed top-2 left-2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-blue-400 shadow-lg overflow-hidden animate-pulse-slow">
        <img
          src="/updated.jpeg"
          alt="Hesbon Angwenyi"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-end items-center py-4 relative">
          {/* Desktop */}
          <div className="hidden md:flex space-x-4 relative">
            {/* Animated gradient indicator */}
            <div
              className="absolute bottom-0 h-1 rounded-md animate-gradient"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />

            {NAV_ITEMS.map((item, idx) => (
              <button
                key={item.id}
                ref={(el) => (navRefs.current[idx] = el)}
                onClick={() => scrollToSection(item.id)}
                className={`relative z-10 px-4 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105
                  ${activeSection === item.id ? "text-white" : isScrolled ? "text-gray-800" : "text-white"}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ml-auto ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="py-4 flex flex-col items-center space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-32 text-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105
                    ${activeSection === item.id ? "text-blue-600" : "text-gray-800"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background: linear-gradient(
            to right,
            #ff0000,
            #ff9900,
            #ffff00,
            #00ff00,
            #00ffff,
            #ff00ff,
            #ff0000
          );
          background-size: 300% 100%;
          animation: gradientShift 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
