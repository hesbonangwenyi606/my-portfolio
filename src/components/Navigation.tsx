"use client";

import React, { useEffect, useState } from "react";

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

  /* 🔹 Smooth scroll with offset */
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  /* 🔹 Scroll spy (stable & accurate) */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 10;

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="max-w-6xl mx-auto px-4 flex justify-end items-center py-4">
          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-semibold transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : isScrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-300"
                }`}
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="py-4 flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-left font-semibold transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Animation */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
