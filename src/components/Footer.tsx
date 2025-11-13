import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/', color: '#0077B5' },
    { icon: FaGithub, href: 'https://github.com/hesbonangwenyi606', color: '#333' },
    { icon: FaWhatsapp, href: 'https://wa.me/254743573380', color: '#25D366' },
    { icon: FaEnvelope, href: 'mailto:hesbonmanyinsa96@gmail.com', color: '#D44638' },
    { icon: FaTwitter, href: 'https://x.com/home', color: '#1DA1F2' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand & Description */}
          <div className="transition-transform transform hover:scale-[1.02] duration-500">
            <div className="text-2xl font-bold mb-4">
              Hesbon <span className="text-blue-400">Angwenyi</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full Stack & DevOps Engineer passionate about building scalable applications and robust infrastructure solutions.
            </p>
          </div>

          {/* Services */}
          <div className="transition-transform transform hover:scale-[1.02] duration-500 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 mb-6 text-center">
              {['Web Development', 'DevOps Consulting', 'Cloud Architecture', 'Technical Leadership'].map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>

            {/* Centered Social Icons with Gradient Ring */}
            <div className="flex justify-center gap-7 mt-4">
              {socialLinks.map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full flex items-center justify-center gradient-ring hover:white-glow"
                  style={{ color }}
                  aria-label="Social Link"
                >
                  <Icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="transition-transform transform hover:scale-[1.02] duration-500">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {['About', 'Skills', 'Projects', 'Contact'].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="transition-transform transform hover:scale-[1.02] duration-500 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300 mb-2">Nairobi CBD, Kenya</p>
            <p className="text-gray-300 mb-1">📞 +254 743 573 380</p>
            <p className="text-gray-300 mb-1">📞 +254 722 514 540</p>
            <p className="text-gray-300">✉️ hesbonmanyinsa96@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-white font-bold text-sm tracking-wider text-transparent bg-clip-text animate-rainbow-neon">
            © 2021 - {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        /* Rainbow text for copyright */
        @keyframes rainbowNeon {
          0%,100% { text-shadow:0 0 5px #ff0000,0 0 10px #ff7f00,0 0 20px #ffff00,0 0 30px #00ff00,0 0 40px #0000ff,0 0 50px #4b0082,0 0 60px #8f00ff; }
          14% { text-shadow:0 0 5px #ff7f00,0 0 10px #ffff00,0 0 20px #00ff00,0 0 30px #0000ff,0 0 40px #4b0082,0 0 50px #8f00ff,0 0 60px #ff0000; }
          28% { text-shadow:0 0 5px #ffff00,0 0 10px #00ff00,0 0 20px #0000ff,0 0 30px #4b0082,0 0 40px #8f00ff,0 0 50px #ff0000,0 0 60px #ff7f00; }
          42% { text-shadow:0 0 5px #00ff00,0 0 10px #0000ff,0 0 20px #4b0082,0 0 30px #8f00ff,0 0 40px #ff0000,0 0 50px #ff7f00,0 0 60px #ffff00; }
          57% { text-shadow:0 0 5px #0000ff,0 0 10px #4b0082,0 0 20px #8f00ff,0 0 30px #ff0000,0 0 40px #ff7f00,0 0 50px #ffff00,0 0 60px #00ff00; }
          71% { text-shadow:0 0 5px #4b0082,0 0 10px #8f00ff,0 0 20px #ff0000,0 0 30px #ff7f00,0 0 40px #ffff00,0 0 50px #00ff00,0 0 60px #0000ff; }
          85% { text-shadow:0 0 5px #8f00ff,0 0 10px #ff0000,0 0 20px #ff7f00,0 0 30px #ffff00,0 0 40px #00ff00,0 0 50px #0000ff,0 0 60px #4b0082; }
        }

        .animate-rainbow-neon { animation: rainbowNeon 5s linear infinite; }

        /* Gradient ring border for icons */
        .gradient-ring {
          position: relative;
          border-radius: 50%;
          padding: 0.3rem;
          background: conic-gradient(red, orange, yellow, green, blue, indigo, violet, red);
          background-size: 300% 300%;
          animation: rotateRing 4s linear infinite;
          display: inline-flex;
        }
        .gradient-ring > svg {
          border-radius: 50%;
          background: #111; /* inner circle color */
          width: 100%;
          height: 100%;
          padding: 0.25rem;
        }

        @keyframes rotateRing {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Hover glow */
        .white-glow:hover {
          box-shadow: 0 0 15px #fff, 0 0 25px #fff, 0 0 35px #fff, 0 0 50px #fff;
          transform: scale(1.35);
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </footer>
  );
};

export default Footer;
