"use client";

import React, { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
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
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      const scrollPosition = window.scrollY + NAVBAR_HEIGHT + 10;

      for (const item of NAV_ITEMS) {
        if (item.id === "home") continue;

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

  return (
    <>
      {/* Profile picture with animated rotating & pulsing halo */}
      <div className="fixed top-2 left-2 z-50 w-12 h-12 md:w-16 md:h-16">
        {/* Rotating + pulsing halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 animate-halo blur-xl opacity-60"></div>

        {/* Profile picture */}
        <div className="relative w-full h-full rounded-full border-2 border-white overflow-hidden shadow-lg">
          <img
            src="/updated.jpeg"
            alt="Hesbon Angwenyi"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-end items-center py-4">
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                  ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-white shadow-lg"
                      : isScrolled
                      ? "bg-gray-200 text-gray-800 hover:bg-blue-100"
                      : "bg-white/20 text-white hover:bg-white/40"
                  }
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
            <div className="py-4 flex flex-col items-center space-y-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-32 text-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                    ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                    }
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
        @keyframes rotate {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-halo {
          animation: rotate 10s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;
