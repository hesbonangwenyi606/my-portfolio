import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from 'react-icons/fa';
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

      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-15 animate-gradient-float1 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 animate-gradient-float2 -z-10"></div>
      <div className="absolute top-1/2 right-1/2 w-72 h-72 rounded-full opacity-10 animate-gradient-float3 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 opacity-0 animate-fade-up space-y-12">
        <div className="grid md:grid-cols-5 gap-8 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">

            {/* RECTANGLE Logo with static gradient border */}
            <a
              href="#home"
              aria-label="Back to top"
              className="relative w-40 h-24 mb-4 group"
            >
              {/* Static gradient border */}
              <div className="absolute inset-0 rounded-xl static-rect"></div>

              {/* Inner background */}
              <div className="absolute inset-[2px] rounded-lg bg-gray-900"></div>

              {/* Logo image */}
              <img
                src="https://www.krea.ai/api/img?f=webp&i=https%3A%2F%2Fgen.krea.ai%2Fimages%2Fc91863dc-6b80-4900-bb05-8d61cc19ba28.png&s=1024"
                alt="Hesbon Angwenyi Logo"
                className="relative z-10 w-full h-full rounded-lg object-contain
                           transition-transform duration-500
                           group-hover:scale-105 group-hover:glow"
              />
            </a>

            {/* Description only */}
            <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs text-center md:text-left">
              Full Stack & DevOps Engineer passionate about building scalable web applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
            <h3 className="text-lg font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Stack Development</li>
              <li>Web Development</li>
              <li>Database Fundamentals</li>
              <li>Agile Team Collaboration</li>
              <li>Cloud Deployment</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-2">Location</h3>
            {[
              { label: 'Nairobi, Kenya', href: 'https://www.google.com/maps/place/Nairobi+CBD,+Kenya' },
              { label: '+254 743 573 380', href: 'tel:+254743573380' },
              { label: '+254 722 514 540', href: 'tel:+254722514540' },
              { label: 'hesbonmanyinsa96@gmail.com', href: 'mailto:hesbonmanyinsa96@gmail.com' },
            ].map((item, i) => (
              <p key={i} className="mb-1 flex items-start gap-3 text-gray-300">
                <span className="text-3xl leading-none text-white">•</span>
                <a href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </p>
            ))}
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center md:items-end md:ml-auto mt-4 md:mt-0">
            <h3 className="text-lg font-heading font-semibold mb-2">Scan to WhatsApp</h3>
            <a
              href="https://wa.me/254743573380"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-700 hover:glow"
            >
              <QRCode
                value="https://wa.me/254743573380"
                size={150}
                bgColor="#1F2937"
                fgColor="#10B981"
              />
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
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
                <Icon className="w-7 h-7" />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
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
          background: linear-gradient(
            135deg,
            #10B981,
            #3B82F6,
            #FCD34D
          );
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

        .glow:hover {
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.6),
                      0 0 25px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
