import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hesbonangwenyi606", label: "GitHub" },
    { icon: FaEnvelope, href: "mailto:hesbonmanyinsa96@gmail.com", label: "Email" },
    { icon: FaTwitter, href: "https://x.com/hesbon_angwenyi", label: "X (Twitter)" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-white py-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Back to top"
              className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-3"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-yellow-300"></div>
              <div className="absolute inset-[4px] rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
                  alt="Hesbon Angwenyi Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </button>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs">
              Full-Stack & DevOps Intern, passionate about creating web
              applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-1.5 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Web Development</li>
              <li>Basic Cloud Deployment</li>
              <li>Backend Development (Entry-Level)</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Location</h3>
            <p className="flex items-center gap-2 text-gray-300">
              <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <a
                href="https://www.google.com/maps/place/Nairobi,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300"
              >
                Nairobi, Kenya
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <a
                href="tel:+254743573380"
                className="text-gray-300"
              >
                +254 743 573 380
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-300">
              <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <a
                href="mailto:hesbonmanyinsa96@gmail.com"
                className="text-gray-300"
              >
                hesbonmanyinsa96@gmail.com
              </a>
            </p>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <p className="font-semibold mb-2 text-center md:text-right">Scan to WhatsApp</p>
            <QRCode
              value="https://wa.me/254743573380"
              size={140}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-300"></div>
              <Icon className="relative w-6 h-6 md:w-7 md:h-7 text-black z-10" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm tracking-wider">
            © {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
