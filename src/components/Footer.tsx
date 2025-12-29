import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt
} from 'react-icons/fa';
import QRCode from 'react-qr-code';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hesbonangwenyi606' },
    { icon: FaEnvelope, href: 'mailto:hesbonmanyinsa96@gmail.com' },
    { icon: FaTwitter, href: 'https://x.com/home' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 space-y-12 animate-fade-up">

        <div className="grid md:grid-cols-5 gap-8">

          {/* Brand */}
          <div>
            <img
              src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
              alt="Hesbon Logo"
              className="w-28 h-28 rounded-full mb-4 glow"
            />
            <p className="text-gray-400 text-sm max-w-xs">
              Full-Stack & DevOps Intern, passionate about creating web applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Web Development</li>
              <li>Basic Cloud Deployment</li>
              <li>Backend Development (Entry-Level)</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold mb-3">Location</h3>

            {/* Map */}
            <p className="flex items-start gap-2 text-gray-300 mb-2">
              <FaMapMarkerAlt className="text-green-400 animate-pulse mt-1" />
              <a
                href="https://www.google.com/maps/place/Nairobi+CBD,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Nairobi, Kenya
              </a>
            </p>

            {/* Phone */}
            <p className="flex items-start gap-2 text-gray-300 mb-2">
              <FaPhoneAlt className="text-blue-400 mt-1" />
              <a href="tel:+254743573380" className="hover:text-white">
                +254 743 573 380
              </a>
            </p>

            {/* Email (NO ICON) */}
            <p className="flex items-start gap-2 text-gray-300">
              <span className="text-white text-xl leading-none">•</span>
              <a
                href="mailto:hesbonmanyinsa96@gmail.com"
                className="hover:text-white"
              >
                hesbonmanyinsa96@gmail.com
              </a>
            </p>
          </div>

          {/* QR Code */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-2">Scan to WhatsApp</h3>
            <QRCode
              value="https://wa.me/254743573380"
              size={150}
              bgColor="#1F2937"
              fgColor="#10B981"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 hover:scale-110 transition"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-4 text-sm">
          © 2023 – {currentYear} Hesbon Angwenyi. All rights reserved.
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .glow:hover {
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
