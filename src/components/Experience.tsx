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
      "Designed and implemented interactive, responsive UI with React.",
      "Integrated front-end with backend APIs seamlessly.",
      "Improved web performance using lazy loading and code splitting.",
      "Debugged UI issues to enhance usability and accessibility.",
      "Assisted in production deployments and QA processes.",
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
      "Implemented authentication and authorization mechanisms.",
      "Connected front-end apps with robust backend services.",
      "Troubleshot system issues to minimize downtime.",
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
      "Delivered over 15 full-stack projects integrating backend APIs with React & TypeScript.",
      "Containerized apps with Docker for consistent deployment.",
      "Designed scalable and maintainable system architectures.",
      "Optimized database queries for MongoDB and PostgreSQL.",
      "Delivered end-to-end solutions including development, deployment, and support.",
    ],
  },
];

// Generate sparkles for background
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -5, scale: 0.95 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 120 } },
    hover: { scale: 1.05, rotate: 1, transition: { type: "spring", stiffness: 300 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  // Optional: Track mouse for parallax effect
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="py-16 bg-gray-900 font-serif relative overflow-hidden"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/4f/a0/f8/4fa0f8d32fac31b4ae03ee9c60f034fb.jpg')",
          transform: `translate(${mouse.x * 0.01}px, ${mouse.y * 0.01}px)`,
        }}
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
            boxShadow: "0 0 10px #14B8A6, 0 0 20px #14B8A6",
          }}
          animate={{
            y: [0, 10 * Math.random(), -10 * Math.random(), 0],
            x: [0, 10 * Math.random(), -10 * Math.random(), 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: sparkle.speed,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: sparkle.delay,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">Work Experience</h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Animated Connecting Lines */}
          <svg className="hidden md:block absolute w-full h-full pointer-events-none">
            {[
              { x1: "10%", y1: "10%", x2: "90%", y2: "10%" },
              { x1: "90%", y1: "10%", x2: "10%", y2: "90%" },
              { x1: "10%", y1: "90%", x2: "90%", y2: "90%" },
            ].map((line, idx) => (
              <motion.line
                key={idx}
                {...line}
                stroke="#14B8A6"
                strokeWidth={2}
                strokeDasharray="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={hoveredLine === idx ? { stroke: "#22D3EE", strokeWidth: 4 } : {}}
                transition={{ duration: 1.2, delay: idx * 0.3 }}
              />
            ))}
          </svg>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer relative z-10"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredLine(idx)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              <div className="flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 mb-1 text-center">{exp.title}</h3>
              <p className="text-teal-300 font-medium text-center mb-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-200 transition-colors"
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
    </section>
  );
};

export default Experience;
