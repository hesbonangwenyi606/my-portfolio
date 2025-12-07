"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaServer, FaDesktop, FaCode } from "react-icons/fa";

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
  icon: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    title: "Backend Developer Intern",
    company: "HNG Internship",
    companyUrl: "#",
    period: "Dec 2024 – Oct 2025",
    icon: <FaServer size={32} className="text-teal-400" />,
    responsibilities: [
      "Built scalable backend systems for production-level projects.",
      "Developed RESTful APIs using Node.js, Express, and MongoDB.",
      "Collaborated in agile teams to deliver high-quality solutions.",
      "Optimized API performance and implemented caching strategies.",
      "Contributed to documentation, code reviews, and knowledge sharing.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Valos.ai",
    companyUrl: "https://valos.ai/",
    period: "Aug 2024 – Nov 2024",
    icon: <FaDesktop size={32} className="text-teal-400" />,
    responsibilities: [
      "Designed and implemented responsive user interfaces with React.",
      "Integrated frontend with backend APIs seamlessly.",
      "Improved performance using lazy loading and code splitting.",
      "Debugged UI issues for better accessibility and usability.",
      "Assisted in production deployments and QA workflows.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "Techno Brain Group",
    companyUrl: "https://www.technobraingroup.com/",
    period: "Apr 2023 – Apr 2024",
    icon: <FaServer size={32} className="text-teal-400" />,
    responsibilities: [
      "Developed secure and high-performance RESTful APIs.",
      "Implemented authentication and authorization flows.",
      "Integrated front-end applications with backend services.",
      "Troubleshot and resolved system-level issues.",
      "Designed optimized database schemas for MongoDB and SQL.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Freelance / Personal Projects",
    companyUrl: "https://www.freelancer.com/",
    period: "2022 – 2023",
    icon: <FaCode size={32} className="text-teal-400" />,
    responsibilities: [
      "Delivered 15+ full-stack projects using React and Node.js.",
      "Containerized apps using Docker for reliable deployments.",
      "Designed scalable system architectures.",
      "Optimized database performance for MongoDB and PostgreSQL.",
      "Managed full development lifecycle from design to deployment.",
    ],
  },
];

// Sparkles
const generateSparkles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 3 + 1 + "px",
    delay: Math.random() * 5,
    speed: Math.random() * 2 + 1,
  }));

const sparkles = generateSparkles(40);

const Experience: React.FC = () => {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
    hover: {
      scale: 1.06,
      rotateY: 6,
      rotateX: 3,
      boxShadow: "0 0 25px #ff00ff, 0 0 50px #00ffff",
      transition: { type: "spring", stiffness: 200, damping: 12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/4f/a0/f8/4fa0f8d32fac31b4ae03ee9c60f034fb.jpg')",
        }}
        animate={{ x: mouse.x * 0.01, y: mouse.y * 0.01 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: "#14B8A6",
            boxShadow: "0 0 12px #14B8A6",
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: sparkle.speed + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Rainbow Gradient Title */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Animated connecting rainbow lines */}
          <svg className="hidden md:block absolute w-full h-full pointer-events-none">
            {[
              { x1: "10%", y1: "10%", x2: "90%", y2: "10%" },
              { x1: "90%", y1: "10%", x2: "10%", y2: "90%" },
              { x1: "10%", y1: "90%", x2: "90%", y2: "90%" },
            ].map((line, idx) => (
              <motion.line
                key={idx}
                {...line}
                stroke="url(#rainbowGradient)"
                strokeWidth={2}
                strokeDasharray="6"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                animate={
                  hoveredLine === idx
                    ? { strokeWidth: 4 }
                    : {}
                }
                transition={{ duration: 1.4, delay: idx * 0.2 }}
              />
            ))}
            <defs>
              <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="20%" stopColor="#ff9900" />
                <stop offset="40%" stopColor="#ffff00" />
                <stop offset="60%" stopColor="#00ff00" />
                <stop offset="80%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#ff00ff" />
              </linearGradient>
            </defs>
          </svg>

          {/* Experience Cards */}
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg cursor-pointer z-10 border border-white/10 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredLine(idx)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              {/* Rainbow glow overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 opacity-20 animate-gradient blur-xl rounded-2xl"></div>

              <div className="relative z-10 flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 text-center mb-1">{exp.title}</h3>
              <p className="text-teal-300 font-medium text-center mb-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-200"
                >
                  {exp.company}
                </a>
              </p>
              <p className="text-sm text-gray-400 italic text-center mb-4">{exp.period}</p>

              <div className="space-y-2 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <motion.p key={i} custom={i} variants={itemVariants}>
                    • {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Gradient Animation */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
