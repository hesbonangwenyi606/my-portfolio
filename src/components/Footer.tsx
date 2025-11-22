import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:hesbonmanyinsa96@gmail.com', color: '#EA4335' },
    { icon: FaGithub, href: 'https://github.com/hesbonangwenyi606', color: '#333' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/', color: '#0077b5' },
    { icon: FaTwitter, href: 'https://x.com/home', color: '#1DA1F2' },
    { icon: FaWhatsapp, href: 'https://wa.me/254743573380', color: '#25D366' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">

      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 animate-gradient-float1 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20 animate-gradient-float2 -z-10"></div>
      <div className="absolute top-1/2 right-1/2 w-72 h-72 rounded-full opacity-15 animate-gradient-float3 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 opacity-0 animate-fade-up space-y-12">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Hesbon <span className="text-blue-400">Angwenyi</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Full Stack & DevOps Engineer passionate about building scalable web applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, i) => (
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
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              {['Web Development', 'DevOps Consulting', 'Cloud Architecture', 'Technical Leadership'].map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Location — STATIC WHITE DOTS */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Location</h3>

            {[
              { label: 'Nairobi, Kenya', href: 'https://www.google.com/maps/place/Nairobi+CBD,+Kenya', type: 'link' },
              { label: '+254 (0)743-573-380', href: 'tel:+254743573380', type: 'link' },
              { label: '+254 (0)722-514-540', href: 'tel:+254722514540', type: 'link' },
              { label: 'hesbonmanyinsa96@gmail.com', href: 'mailto:hesbonmanyinsa96@gmail.com', type: 'link' },
            ].map((item, i) => (
              <p key={i} className="mb-1 flex items-start gap-3">
                <span className="text-3xl leading-none text-white">•</span>
                <a
                  href={item.href}
                  target={item.type === 'link' && item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.type === 'link' && item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-7 mt-10">
          {socialLinks.map(({ icon: Icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-12 h-12 flex items-center justify-center group"
              aria-label="Social Link"
            >
              <div className="absolute inset-0 rounded-full rainbow-rotate"></div>
              <div
                className="relative z-11 w-11 h-11 rounded-full flex items-center justify-center text-white bg-gray-900 hover:white-glow transition-transform duration-300 transform hover:scale-110 pulse-icon"
                style={{ color }}
              >
                <Icon className="w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-white font-bold text-sm tracking-wider text-transparent bg-clip-text animate-rainbow-neon">
            © 2021 - {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeUp { 0% { opacity:0; transform:translateY(20px);} 100% { opacity:1; transform:translateY(0);} }
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }

        @keyframes gradient1 {0%,100%{background:linear-gradient(45deg,#6EE7B7,#3B82F6);}50%{background:linear-gradient(45deg,#3B82F6,#F472B6);}}
        @keyframes gradient2 {0%,100%{background:linear-gradient(135deg,#F9A8D4,#8B5CF6);}50%{background:linear-gradient(135deg,#8B5CF6,#FCD34D);}}
        @keyframes gradient3 {0%,100%{background:linear-gradient(225deg,#FBBF24,#3B82F6);}50%{background:linear-gradient(225deg,#3B82F6,#EC4899);}}

        @keyframes float1 {0%,100%{transform:translateY(0);}50%{transform:translateY(-20px);}}
        @keyframes float2 {0%,100%{transform:translateY(0);}50%{transform:translateY(25px);}}
        @keyframes float3 {0%,100%{transform:translateY(0);}50%{transform:translateY(-15px);}}

        .animate-gradient-float1 { animation: gradient1 15s ease infinite, float1 25s ease-in-out infinite; }
        .animate-gradient-float2 { animation: gradient2 20s ease infinite, float2 30s ease-in-out infinite; }
        .animate-gradient-float3 { animation: gradient3 18s ease infinite, float3 28s ease-in-out infinite; }

        @keyframes rotateRainbow {0%{transform:rotate(0deg); filter:hue-rotate(0deg);}100%{transform:rotate(360deg); filter:hue-rotate(360deg);}}
        .rainbow-rotate { border:3px solid transparent; background:conic-gradient(red,orange,yellow,green,blue,indigo,violet,red); border-radius:9999px; animation:rotateRainbow 10s linear infinite;}

        @keyframes pulseIcon {0%,100%{transform:scale(1); box-shadow:0 0 10px rgba(255,255,255,0.3);}50%{transform:scale(1.08); box-shadow:0 0 25px rgba(255,255,255,0.8);}}
        .pulse-icon { animation: pulseIcon 3s ease-in-out infinite; }

        @keyframes rainbowNeon {0%,100%{text-shadow:0 0 8px #ff0000,0 0 16px #ff7f00,0 0 24px #ffff00,0 0 32px #00ff00,0 0 40px #0000ff,0 0 48px #4b0082,0 0 56px #8f00ff;}50%{text-shadow:0 0 10px #8f00ff,0 0 20px #0000ff,0 0 30px #00ff00,0 0 40px #ffff00,0 0 50px #ff7f00,0 0 60px #ff0000;}}
        .animate-rainbow-neon { animation: rainbowNeon 6s linear infinite; }

        .white-glow:hover { box-shadow: 0 0 20px #fff,0 0 40px #fff,0 0 60px #fff; }
      `}</style>

    </footer>
  );
};

export default Footer;
