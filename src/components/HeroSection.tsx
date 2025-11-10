import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaVuejs,
  FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaRust
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiKubernetes, SiNextdotjs,
  SiTailwindcss, SiDotnet, SiFlutter, SiGo, SiRuby, SiJavascript, SiTypescript,
  SiC, SiCplusplus, SiExpress
} from 'react-icons/si';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'DevOps Engineer', 'Cloud Architect', 'Problem Solver'];

  // cycle through text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // typing effect
  useEffect(() => {
    let i = 0;
    setCurrentText('');
    const timer = setInterval(() => {
      setCurrentText(texts[currentIndex].slice(0, i + 1));
      i++;
      if (i === texts[currentIndex].length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // bouncing animation variant for icons
  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* --- Left: Text --- */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400">Hesbon Angwenyi</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-gray-300 mt-2 flex items-center gap-2">
            <span>I'm a</span>
            <span className="text-blue-400 font-semibold">{currentText}</span>
            <span className="animate-pulse text-blue-400">|</span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Passionate about building scalable applications and robust infrastructure. 
            I transform ideas into powerful digital solutions using cutting-edge technologies.
          </p>

          {/* --- Buttons --- */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              <a href="#contact" className="transition-colors">
                Contact
              </a>
            </button>
          </div>

          {/* --- 🚀 Rotating & Bouncing Tech Icons --- */}
          <div className="mt-12 overflow-hidden relative h-20 w-full">
            <motion.div
              className="absolute flex gap-10 text-5xl text-gray-300 whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div className="flex gap-10" key={i}>
                  {[
                    <FaPython title="Python" className="hover:text-yellow-400" />,
                    <FaJava title="Java" className="hover:text-red-500" />,
                    <FaPhp title="PHP" className="hover:text-indigo-400" />,
                    <FaHtml5 title="HTML5" className="hover:text-orange-500" />,
                    <FaCss3Alt title="CSS3" className="hover:text-blue-400" />,
                    <SiJavascript title="JavaScript" className="hover:text-yellow-300" />,
                    <SiTypescript title="TypeScript" className="hover:text-sky-400" />,
                    <FaReact title="React" className="hover:text-blue-400" />,
                    <SiNextdotjs title="Next.js" className="hover:text-white" />,
                    <FaAngular title="Angular" className="hover:text-red-500" />,
                    <FaVuejs title="Vue.js" className="hover:text-green-400" />,
                    <FaNodeJs title="Node.js" className="hover:text-green-500" />,
                    <SiExpress title="Express.js" className="hover:text-gray-300" />,
                    <SiDotnet title=".NET" className="hover:text-purple-500" />,
                    <SiFlutter title="Flutter" className="hover:text-blue-400" />,
                    <SiTailwindcss title="Tailwind CSS" className="hover:text-sky-400" />,
                    <SiMongodb title="MongoDB" className="hover:text-green-500" />,
                    <SiPostgresql title="PostgreSQL" className="hover:text-sky-500" />,
                    <SiMysql title="MySQL" className="hover:text-blue-400" />,
                    <FaDocker title="Docker" className="hover:text-blue-400" />,
                    <SiKubernetes title="Kubernetes" className="hover:text-sky-500" />,
                    <FaAws title="AWS" className="hover:text-orange-400" />,
                    <SiFirebase title="Firebase" className="hover:text-yellow-400" />,
                    <FaGitAlt title="Git" className="hover:text-red-400" />,
                    <FaLinux title="Linux" className="hover:text-orange-500" />,
                    <FaRust title="Rust" className="hover:text-orange-400" />,
                    <SiGo title="Go" className="hover:text-cyan-400" />,
                    <SiRuby title="Ruby" className="hover:text-red-400" />,
                    <SiC title="C" className="hover:text-blue-400" />,
                    <SiCplusplus title="C++" className="hover:text-blue-400" />,
                  ].map((Icon, index) => (
                    <motion.div key={index} animate={bounceAnimation}>
                      {Icon}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* --- Right: Image --- */}
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/updated.jpeg"
              alt="Hesbon Angwenyi"
              className="w-80 h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
