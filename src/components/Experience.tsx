"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const sectionOffsets = useRef<Record<string, number>>({});

  // Smooth scroll with offset
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  // Scroll spy + navbar background
  useEffect(() => {
    const calculateOffsets = () => {
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) sectionOffsets.current[id] = el.offsetTop;
      });
    };

    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + 120;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const id = navItems[i].id;
        if (scrollPos >= sectionOffsets.current[id]) {
          setActiveSection(id);
          break;
        }
      }
    };

    calculateOffsets();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", calculateOffsets);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateOffsets);
    };
  }, []);

  return (
    <>
      {/* Profile image */}
      <div className="fixed top-2 left-2 z-50 w-10 h-10 rounded-full border-2 border-blue-400 overflow-hidden">
        <img src="/updated.jpeg" alt="Hesbon" className="w-full h-full object-cover" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-end items-center">
          {/* Desktop */}
          <div className="hidden md:flex space-x-8 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-semibold transition-colors ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-gray-700"
                    : "text-white"
                }`}
              >
                {item.label}

                {/* Animated underline */}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden ml-auto ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-semibold ${
                  activeSection === item.id
                    ? "text-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
