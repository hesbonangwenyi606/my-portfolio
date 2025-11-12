import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = 2025;

  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Floating gradient circles */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-20 animate-gradient-float1 -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-20 animate-gradient-float2 -z-10"></div>
      <div className="absolute top-1/2 right-1/2 w-72 h-72 rounded-full opacity-15 animate-gradient-float3 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 opacity-0 animate-fade-up">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="col-span-2 transition-transform transform hover:scale-[1.02] duration-500">
            <div className="text-2xl font-bold mb-4">
              Hesbon <span className="text-blue-400">Angwenyi</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Full Stack & DevOps Engineer passionate about building scalable 
              applications and robust infrastructure solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/', bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
                { icon: FaGithub, href: 'https://github.com/hesbonangwenyi606', bg: 'bg-gray-700', hover: 'hover:bg-gray-600' },
                { icon: FaWhatsapp, href: 'https://wa.me/254743573380', bg: 'bg-green-500', hover: 'hover:bg-green-600' },
                { icon: FaEnvelope, href: 'mailto:hesbonmanyinsa96@gmail.com', bg: 'bg-red-500', hover: 'hover:bg-red-600' },
                { icon: FaTwitter, href: 'https://x.com/home', bg: 'bg-sky-500', hover: 'hover:bg-sky-600' },
                { icon: FaFacebook, href: 'https://www.facebook.com/hesbon.hemon', bg: 'bg-blue-800', hover: 'hover:bg-blue-900' },
              ].map(({ icon: Icon, href, bg, hover }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-125 ${hover} hover:animate-rainbow-neon-icon`}
                  aria-label="Social Link"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="transition-transform transform hover:scale-[1.02] duration-500">
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
          <div className="transition-transform transform hover:scale-[1.02] duration-500">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              {['Web Development', 'DevOps Consulting', 'Cloud Architecture', 'Technical Leadership'].map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-white font-bold text-sm tracking-wider text-transparent bg-clip-text animate-rainbow-neon">
            © 2021 - {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 1s ease-out forwards; }

        /* Gradient animations for floating circles */
        @keyframes gradient1 { 0%,100%{background:linear-gradient(45deg,#6EE7B7,#3B82F6);} 50%{background:linear-gradient(45deg,#3B82F6,#F472B6);} }
        @keyframes gradient2 { 0%,100%{background:linear-gradient(135deg,#F9A8D4,#8B5CF6);} 50%{background:linear-gradient(135deg,#8B5CF6,#FCD34D);} }
        @keyframes gradient3 { 0%,100%{background:linear-gradient(225deg,#FBBF24,#3B82F6);} 50%{background:linear-gradient(225deg,#3B82F6,#EC4899);} }

        @keyframes float1 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-20px);} }
        @keyframes float2 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(25px);} }
        @keyframes float3 { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-15px);} }

        .animate-gradient-float1 { animation: gradient1 15s ease infinite, float1 25s ease-in-out infinite; }
        .animate-gradient-float2 { animation: gradient2 20s ease infinite, float2 30s ease-in-out infinite; }
        .animate-gradient-float3 { animation: gradient3 18s ease infinite, float3 28s ease-in-out infinite; }

        /* Rainbow Neon Glow Animation */
        @keyframes rainbowNeon {
          0%,100% { text-shadow: 0 0 5px #ff0000, 0 0 10px #ff7f00, 0 0 20px #ffff00, 0 0 30px #00ff00, 0 0 40px #0000ff, 0 0 50px #4b0082, 0 0 60px #8f00ff; }
          14% { text-shadow: 0 0 5px #ff7f00, 0 0 10px #ffff00, 0 0 20px #00ff00, 0 0 30px #0000ff, 0 0 40px #4b0082, 0 0 50px #8f00ff, 0 0 60px #ff0000; }
          28% { text-shadow: 0 0 5px #ffff00, 0 0 10px #00ff00, 0 0 20px #0000ff, 0 0 30px #4b0082, 0 0 40px #8f00ff, 0 0 50px #ff0000, 0 0 60px #ff7f00; }
          42% { text-shadow: 0 0 5px #00ff00, 0 0 10px #0000ff, 0 0 20px #4b0082, 0 0 30px #8f00ff, 0 0 40px #ff0000, 0 0 50px #ff7f00, 0 0 60px #ffff00; }
          57% { text-shadow: 0 0 5px #0000ff, 0 0 10px #4b0082, 0 0 20px #8f00ff, 0 0 30px #ff0000, 0 0 40px #ff7f00, 0 0 50px #ffff00, 0 0 60px #00ff00; }
          71% { text-shadow: 0 0 5px #4b0082, 0 0 10px #8f00ff, 0 0 20px #ff0000, 0 0 30px #ff7f00, 0 0 40px #ffff00, 0 0 50px #00ff00, 0 0 60px #0000ff; }
          85% { text-shadow: 0 0 5px #8f00ff, 0 0 10px #ff0000, 0 0 20px #ff7f00, 0 0 30px #ffff00, 0 0 40px #00ff00, 0 0 50px #0000ff, 0 0 60px #4b0082; }
        }
        .animate-rainbow-neon { animation: rainbowNeon 5s linear infinite; }

        /* Rainbow neon glow for social icons */
        .hover\\:animate-rainbow-neon-icon:hover {
          animation: rainbowNeon 3s linear infinite;
          box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
