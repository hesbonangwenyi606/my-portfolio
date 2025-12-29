import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
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
    <footer className="relative bg-gray-900 text-white py-10 overflow-hidden font-sans">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 animate-gradient-float1 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 animate-gradient-float2 -z-10"></div>
      <div className="absolute top-1/2 right-1/2 w-72 h-72 rounded-full opacity-10 animate-gradient-float3 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 opacity-0 animate-fade-up space-y-8">
        <div className="grid md:grid-cols-5 gap-6 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="#home"
              aria-label="Back to top"
              className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-2 group rotate-logo"
            >
              <div className="absolute inset-0 rounded-full static-rect"></div>
              <div className="absolute inset-[4px] rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
                  alt="Hesbon Angwenyi Logo"
                  className="w-full h-full rounded-full object-cover glow"
                />
              </div>
            </a>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs text-center md:text-left">
              Full-Stack & DevOps Intern, passionate about creating web applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-3">Services</h3>
            <ul className="space-y-1.5 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Web Development</li>
              <li>Basic Cloud Deployment</li>
              <li>Backend Development (Entry-Level)</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-2">Location</h3>

            <p className="mb-1 flex items-center gap-2 text-gray-300 text-sm md:text-base">
              <FaMapMarkerAlt className="text-white w-4 h-4 flex-shrink-0" />
              <a
                href="https://www.google.com/maps/place/Nairobi+CBD,+Kenya"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Nairobi, Kenya
              </a>
            </p>

            <p className="mb-1 flex items-center gap-2 text-gray-300 text-sm md:text-base">
              <FaPhoneAlt className="text-white w-4 h-4 flex-shrink-0" />
              <a
                href="tel:+254743573380"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                +254 743 573 380
              </a>
            </p>

            <p className="mb-1 flex items-center gap-2 text-gray-300 text-sm md:text-base">
              <FaEnvelope className="text-white w-4 h-4 flex-shrink-0" />
              <a
                href="mailto:hesbonmanyinsa96@gmail.com"
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                hesbonmanyinsa96@gmail.com
              </a>
            </p>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center md:items-end md:ml-8 mt-4 md:mt-0">
            <h3 className="text-lg font-heading font-semibold mb-2">Scan to WhatsApp</h3>
            <a
              href="https://wa.me/254743573380"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-700 hover:glow"
            >
              <QRCode
                value="https://wa.me/254743573380"
                size={160}
                bgColor="#1F2937"
                fgColor="#10B981"
              />
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 flex items-center justify-center group"
            >
              <div className="rotating-circle absolute inset-0 rounded-full"></div>
              <div className="relative z-20 w-11 h-11 rounded-full flex items-center justify-center 
                              bg-gray-900 text-white transition-transform duration-300 
                              hover:scale-110">
                <Icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-white text-sm md:text-base tracking-wider">
            © 2023 - {currentYear} Hesbon Angwenyi. All rights reserved
          </p>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }

        .static-rect {
          background: linear-gradient(135deg, #10B981, #3B82F6, #FCD34D);
        }

        .rotate-logo {
          animation: rotateLogo 20s linear infinite;
        }

        .rotate-logo:hover {
          animation: rotateLogoReverse 10s linear infinite;
        }

        @keyframes rotateLogo {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotateLogoReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        .glow:hover {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.6),
                      0 0 25px rgba(59, 130, 246, 0.4);
        }

        .rotating-circle {
          background: conic-gradient(#3B82F6, #FCD34D);
          animation: rotateCircle 6s linear infinite;
          opacity: 0.8;
        }

        @keyframes rotateCircle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
