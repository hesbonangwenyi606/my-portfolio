import React, { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaVuejs,
  FaNodeJs, FaDocker, FaAws, FaGitAlt, FaLinux, FaRust
} from 'react-icons/fa';
import {
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiKubernetes, SiNextdotjs,
  SiTailwindcss, SiRuby, SiJavascript, SiTypescript, SiC, SiCplusplus, SiExpress
} from 'react-icons/si';

// Memoized Icon Component with Color-Shift
const Icon = memo(({ icon: IconComp, title, color }: any) => (
  <motion.div
    className="relative group"
    initial={{ filter: 'hue-rotate(0deg)' }}
    animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'] }}
    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
  >
    <IconComp
      title={title}
      className={`text-gray-300 hover:text-${color} transition-transform duration-300 hover:scale-110`}
    />
    <motion.div
      className="absolute w-2 h-2 bg-white rounded-full opacity-0"
      initial={{ opacity: 0, scale: 0 }}
      whileHover={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
      transition={{ duration: 0.6, repeat: 1 }}
      style={{ top: "-4px", left: "50%" }}
    />
  </motion.div>
));

const HeroSection: React.FC = () => {
  const roles = [
    'Software Developer',
    'DevOp Engineer',
    'Cloud Architect',
    'Problem Solver',
    'Full-Stack Developer',
    'Web Developer'
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(70); // Base typing speed

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // Typewriter effect
  useEffect(() => {
    const currentRole = `Hi, I'm a ${roles[roleIndex]}`;
    const timer = setTimeout(() => {
      const adjustedSpeed = speed + (isMobile ? -20 : 0);

      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setIsDeleting(true);
          setSpeed(isMobile ? 300 : 500);
        } else {
          setSpeed(adjustedSpeed);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
        setSpeed(isMobile ? 30 : 50);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, speed, isMobile]);

  // Tech icons
  const techIcons = [
    { icon: FaPython, title: "Python", color: "yellow-400" },
    { icon: FaJava, title: "Java", color: "red-500" },
    { icon: FaPhp, title: "PHP", color: "indigo-400" },
    { icon: FaHtml5, title: "HTML5", color: "orange-500" },
    { icon: FaCss3Alt, title: "CSS3", color: "blue-400" },
    { icon: SiJavascript, title: "JavaScript", color: "yellow-300" },
    { icon: SiTypescript, title: "TypeScript", color: "sky-400" },
    { icon: FaReact, title: "React", color: "blue-400" },
    { icon: SiNextdotjs, title: "Next.js", color: "white" },
    { icon: FaAngular, title: "Angular", color: "red-500" },
    { icon: FaVuejs, title: "Vue.js", color: "green-400" },
    { icon: FaNodeJs, title: "Node.js", color: "green-500" },
    { icon: SiExpress, title: "Express.js", color: "gray-300" },
    { icon: SiTailwindcss, title: "Tailwind CSS", color: "sky-400" },
    { icon: SiMongodb, title: "MongoDB", color: "green-500" },
    { icon: SiPostgresql, title: "PostgreSQL", color: "sky-500" },
    { icon: SiMysql, title: "MySQL", color: "blue-400" },
    { icon: FaDocker, title: "Docker", color: "blue-400" },
    { icon: SiKubernetes, title: "Kubernetes", color: "sky-500" },
    { icon: FaAws, title: "AWS", color: "orange-400" },
    { icon: SiFirebase, title: "Firebase", color: "yellow-400" },
    { icon: FaGitAlt, title: "GitHub", color: "red-400" },
    { icon: FaLinux, title: "Linux", color: "orange-500" },
    { icon: FaRust, title: "Rust", color: "orange-400" },
    { icon: SiRuby, title: "Ruby", color: "red-400" },
    { icon: SiC, title: "C", color: "blue-400" },
    { icon: SiCplusplus, title: "C++", color: "blue-400" },
  ];

  const iconsLayer1 = isMobile ? [...techIcons.slice(0, 12), ...techIcons.slice(0, 12)] : [...techIcons, ...techIcons];
  const iconsLayer2 = isMobile ? [...techIcons.slice(0, 12).reverse(), ...techIcons.slice(0, 12).reverse()] : [...techIcons.reverse(), ...techIcons.reverse()];

  const [particles] = useState(() =>
    Array.from({ length: 10 }).map(() => ({
      top: Math.random() * 24 + 'px',
      left: Math.random() * 100 + '%',
      size: Math.random() * 5 + 2 + 'px',
      delay: Math.random() * 5,
    }))
  );

  // Scroll speed variable
  const iconScrollDuration = isMobile ? 30 : 60; // adjust this value to control speed

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Text */}
        <div className="text-white space-y-6 md:space-y-8 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight whitespace-nowrap">
            <span className="text-blue-400">Hesbon Angwenyi</span>
          </h1>

          <p className="text-3xl md:text-4xl text-gray-300 font-semibold h-10">
            {displayText}
            <span className="border-r-2 border-gray-300 animate-pulse ml-1"></span>
          </p>

          <p className="text-2xl md:text-2xl text-gray-200 leading-relaxed max-w-lg mt-2">
            Passionate about building scalable applications and robust infrastructure. 
            I transform ideas into powerful digital solutions using cutting-edge technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <a href="#contact" className="transition-colors">Contact</a>
            </button>
          </div>

          {/* Mirrored Scrolling Icons */}
          <div className="overflow-hidden relative h-24 w-full mt-12 z-10">
            {/* Top Row: scroll left */}
            <motion.div
              className="absolute flex gap-10 text-6xl md:text-7xl"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: iconScrollDuration, ease: 'linear' } }}
            >
              {iconsLayer1.map((t, i) => <Icon key={i} {...t} />)}
            </motion.div>

            {/* Bottom Row: scroll right */}
            <motion.div
              className="absolute flex gap-10 text-6xl md:text-7xl top-12 opacity-80"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: iconScrollDuration, ease: 'linear' } }}
            >
              {iconsLayer2.map((t, i) => <Icon key={i} {...t} />)}
            </motion.div>

            {/* Particles */}
            {!isMobile && particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
                animate={{ opacity: [0.7, 0.2, 0.7], scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, repeatType: 'loop', duration: 2, delay: p.delay }}
              />
            ))}
          </div>
        </div>

        {/* Floating Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center z-10"
        >
          <motion.div
            className="relative group"
            animate={{ y: [0, isMobile ? -5 : -10, 0] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 4, ease: 'easeInOut' }}
          >
            <motion.img
              src="/updated.jpeg"
              alt="Hesbon Angwenyi"
              loading="lazy"
              className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-400 shadow-2xl transform transition-all duration-500"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.4)',
              }}
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
