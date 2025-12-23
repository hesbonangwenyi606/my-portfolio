import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';
import QRCode from 'react-qr-code';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/hesbonangwenyi606' },
    { icon: FaEnvelope, href: 'mailto:hesbonmanyinsa96@gmail.com' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/' },
    { icon: FaTwitter, href: 'https://x.com/home' },
    { icon: FaWhatsapp, href: 'https://wa.me/254743573380' },
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
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-2xl font-heading font-bold mb-2 transition-all duration-500 hover:glow">
              Hesbon Angwenyi
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Full Stack & DevOps Engineer passionate about building scalable web applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-blue-400 transition-colors">
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
                <a
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
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
              className="transition-all duration-500 hover:glow"
            >
              <QRCode
                value="https://wa.me/254743573380"
                size={120}
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
              aria-label="Social Link"
            >
              {/* Rotating circle behind icon */}
              <div className="rotating-circle absolute inset-0 rounded-full"></div>

              {/* Static icon */}
              <div className="relative z-20 w-11 h-11 rounded-full flex items-center justify-center 
                              bg-gray-900 text-white transition-transform duration-300 transform 
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

      {/* Animations and Glow Effects */}
      <style jsx>{`
        @keyframes fadeUp { 0% { opacity:0; transform:translateY(20px);} 100% { opacity:1; transform:translateY(0);} }
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }

        @keyframes gradient1 {0%,100%{background:linear-gradient(45deg,#6EE7B7,#3B82F6);}50%{background:linear-gradient(45deg,#3B82F6,#F472B6);}}
        @keyframes gradient2 {0%,100%{background:linear-gradient(135deg,#F9A8D4,#8B5CF6);}50%{background:linear-gradient(135deg,#8B5CF6,#FCD34D);}}
        @keyframes gradient3 {0%,100%{background:linear-gradient(225deg,#FBBF24,#3B82F6);}50%{background:linear-gradient(225deg,#3B82F6,#EC4899);}}

        @keyframes float1 {0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);}}
        @keyframes float2 {0%,100%{transform:translateY(0);}50%{transform:translateY(20px);}}
        @keyframes float3 {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}

        .animate-gradient-float1 { animation: gradient1 20s ease infinite, float1 30s ease-in-out infinite; }
        .animate-gradient-float2 { animation: gradient2 22s ease infinite, float2 32s ease-in-out infinite; }
        .animate-gradient-float3 { animation: gradient3 25s ease infinite, float3 35s ease-in-out infinite; }

        /* Rotating circle behind social icons */
        @keyframes rotateCircle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .rotating-circle {
          background: conic-gradient(#3B82F6, #FCD34D); /* Blue to yellow */
          border-radius: 9999px;
          animation: rotateCircle 6s linear infinite;
          opacity: 0.8;
        }

        .glow {
          transition: all 0.5s ease;
          box-shadow: 0 0 0 rgba(16, 185, 129, 0.5);
        }
        .glow:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px 5px rgba(16, 185, 129, 0.6),
                      0 0 25px 10px rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
