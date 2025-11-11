import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import {
  FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaVuejs,
  FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaRust
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiKubernetes, SiNextdotjs,
  SiTailwindcss, SiRuby, SiJavascript, SiTypescript, SiC, SiCplusplus, SiExpress
} from 'react-icons/si';

const HeroSection: React.FC = () => {
  const roles = [
    'Software Developer',
    'DevOps Engineer',
    'Cloud Architect',
    'Problem Solver',
    'Full-Stack Developer',
    'Infrastructure Automator'
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  // Typewriter effect
  useEffect(() => {
    const currentRole = `Hi, I'm a ${roles[roleIndex]}`;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setIsDeleting(true);
          setSpeed(1000);
        } else {
          setSpeed(150);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
        setSpeed(100);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed]);

  // Tech icons
  const techIcons = [
    <FaPython title="Python" className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110" />,
    <FaJava title="Java" className="hover:text-red-500 transition-transform duration-300 hover:scale-110" />,
    <FaPhp title="PHP" className="hover:text-indigo-400 transition-transform duration-300 hover:scale-110" />,
    <FaHtml5 title="HTML5" className="hover:text-orange-500 transition-transform duration-300 hover:scale-110" />,
    <FaCss3Alt title="CSS3" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" />,
    <SiJavascript title="JavaScript" className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110" />,
    <SiTypescript title="TypeScript" className="hover:text-sky-400 transition-transform duration-300 hover:scale-110" />,
    <FaReact title="React" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" />,
    <SiNextdotjs title="Next.js" className="hover:text-white transition-transform duration-300 hover:scale-110" />,
    <FaAngular title="Angular" className="hover:text-red-500 transition-transform duration-300 hover:scale-110" />,
    <FaVuejs title="Vue.js" className="hover:text-green-400 transition-transform duration-300 hover:scale-110" />,
    <FaNodeJs title="Node.js" className="hover:text-green-500 transition-transform duration-300 hover:scale-110" />,
    <SiExpress title="Express.js" className="hover:text-gray-300 transition-transform duration-300 hover:scale-110" />,
    <SiTailwindcss title="Tailwind CSS" className="hover:text-sky-400 transition-transform duration-300 hover:scale-110" />,
    <SiMongodb title="MongoDB" className="hover:text-green-500 transition-transform duration-300 hover:scale-110" />,
    <SiPostgresql title="PostgreSQL" className="hover:text-sky-500 transition-transform duration-300 hover:scale-110" />,
    <SiMysql title="MySQL" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" />,
    <FaDocker title="Docker" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" />,
    <SiKubernetes title="Kubernetes" className="hover:text-sky-500 transition-transform duration-300 hover:scale-110" />,
    <FaAws title="AWS" className="hover:text-orange-400 transition-transform duration-300 hover:scale-110" />,
    <SiFirebase title="Firebase" className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110" />,
    <FaGitAlt title="GitHub" className="hover:text-red-400 transition-transform duration-300 hover:scale-110 hover:animate-pulse" />,
    <FaLinux title="Linux" className="hover:text-orange-500 transition-transform duration-300 hover:scale-110" />,
    <FaRust title="Rust" className="hover:text-orange-400 transition-transform duration-300 hover:scale-110" />,
    <SiRuby title="Ruby" className="hover:text-red-400 transition-transform duration-300 hover:scale-110" />,
    <SiC title="C" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" />,
    <SiCplusplus title="C++" className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" />,
  ];

  const scrollingIcons = [...techIcons, ...techIcons];

  // Parallax background
  const { scrollY } = useViewportScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, -50]); // subtle upward movement

  return (
    <motion.section
      style={{ y: yBackground }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div className="text-white space-y-6 md:space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap"
          >
            <span className="text-blue-400">Hesbon Angwenyi</span>
          </motion.h1>

          {/* Typewriter Animated Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl text-gray-300 font-semibold h-10"
          >
            {displayText}
            <span className="border-r-2 border-gray-300 animate-pulse ml-1"></span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl md:text-2xl text-gray-200 leading-relaxed max-w-lg mt-2"
          >
            Passionate about building scalable applications and robust infrastructure. 
            I transform ideas into powerful digital solutions using cutting-edge technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors transition-transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors transition-transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
              <a href="#contact" className="transition-colors">Contact</a>
            </button>
          </motion.div>

          {/* Scrolling Tech Icons */}
          <div className="overflow-hidden relative h-24 w-full mt-12">
            <motion.div
              className="absolute flex gap-10 text-6xl md:text-7xl text-gray-300"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {scrollingIcons.map((icon, index) => (
                <div key={index} className="flex items-center">{icon}</div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img 
              src="/updated.jpeg"
              alt="Hesbon Angwenyi"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-400 shadow-2xl transform motion-safe:hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroSection;
