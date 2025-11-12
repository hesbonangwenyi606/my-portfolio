import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
              ].map(({ icon: Icon, href, bg, hover }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 ${bg} rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-125 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] ${hover}`}
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
          <p className="text-gray-300 font-semibold text-sm tracking-wider animate-shimmer bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
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

        /* Shimmer for copyright */
        @keyframes shimmer {
          0% { background-position: -500px 0; }
          100% { background-position: 500px 0; }
        }
        .animate-shimmer {
          background-size: 1000px 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
