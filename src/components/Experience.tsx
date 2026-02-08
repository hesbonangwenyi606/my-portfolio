"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaDesktop, FaCode, FaEnvelope, FaGraduationCap } from "react-icons/fa";

// ----- Types -----
interface ExperienceItem {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  responsibilities: string[];
  icon: React.ReactNode;
}

interface EducationItem {
  school: string;
  qualification: string;
  period: string;
  icon?: React.ReactNode;
  description?: string;
}

// ----- Experiences -----
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

// ----- Education -----
const education: EducationItem[] = [
  {
    school: "FRATIRON SCHOOL BOOTCAMP",
    qualification: "Certificate | DevOps Engineering",
    period: "2024 - 2025",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
      "Learned CI/CD pipelines, containerization with Docker, Kubernetes orchestration, cloud deployment strategies, monitoring, and infrastructure automation.",
  },
  {
    school: "MORINGA SCHOOL BOOTCAMP",
    qualification: "Certificate | Software Development",
    period: "2023 - 2024",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
      "Gained hands-on experience in full-stack web development using React, Node.js, databases, RESTful APIs, and agile software practices.",
  },
  {
    school: "KCA UNIVERSITY",
    qualification: "Bachelor’s degree in Mathematics & Computer Science",
    period: "2020 - 2023",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
      "Acquired strong foundations in algorithms, data structures, programming languages, problem-solving, and computer science fundamentals.",
  },
];

// ----- Typewriter -----
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === text.length) setDeleting(true);
      } else {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setDeleting(false);
      }
    }, deleting ? 80 : 120);
    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <span className="overflow-hidden text-white font-bold text-lg">
      {displayed}
      <span className="animate-blink">|</span>
      <style>{`
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        .animate-blink { display:inline-block; margin-left:2px; animation:blink 1s infinite; }
      `}</style>
    </span>
  );
};

// ----- Framer Motion Variants -----
const educationContainer = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const educationItem = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ----- Main Component -----
const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mouseTilt, setMouseTilt] = useState<{ [key: number]: { x: number; y: number } }>({});

  const handleCardMouseMove = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMouseTilt((prev) => ({ ...prev, [idx]: { x, y } }));
  };

  const hoverAnimation = (idx: number) => ({
    scale: 1.05,
    rotateX: hoveredCard === idx ? mouseTilt[idx]?.y || 0 : 0,
    rotateY: hoveredCard === idx ? mouseTilt[idx]?.x || 0 : 0,
    boxShadow: "0 0 30px #14B8A6, 0 0 60px #00ffff",
    transition: { type: "spring", stiffness: 200, damping: 15 },
  });

  return (
    <section id="experience" className="relative py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Work Experience */}
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 animate-gradient">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg cursor-pointer border border-white/10 overflow-hidden"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={(e) => handleCardMouseMove(idx, e)}
              animate={hoveredCard === idx ? hoverAnimation(idx) : { scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 0 10px #00000050" }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 opacity-20 animate-gradient blur-xl rounded-2xl" />
              <div className="relative z-10 flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 text-center mb-1">{exp.title}</h3>
              <p className="text-teal-300 font-medium text-center mb-1">
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-200">{exp.company}</a>
              </p>
              <p className="text-sm text-gray-400 italic text-center mb-4">{exp.period}</p>
              <div className="space-y-2 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (<p key={i}>• {item}</p>))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-teal-400">EDUCATION</h2>
        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={educationContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-5 top-0 w-1 bg-teal-500 h-full rounded" />
          <div className="space-y-12">
            {education.map((edu, idx) => {
              const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
              return (
                <motion.div
                  key={idx}
                  variants={educationItem}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
                    setTilt({ x, y });
                  }}
                  whileHover={{
                    y: -4,
                    rotateX: tilt.y,
                    rotateY: tilt.x,
                    boxShadow: "0 0 20px #14B8A6, 0 0 40px #00ffff",
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="relative pl-16 flex items-start cursor-pointer"
                >
                  <div className="absolute left-0 top-2">
                    <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center shadow-lg">
                      {edu.icon || <FaGraduationCap className="text-gray-900" />}
                    </div>
                  </div>
                  <div className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 w-full">
                    <h3 className="text-lg font-semibold text-teal-400 mb-1">{edu.school}</h3>
                    <p className="text-gray-300 mb-1">{edu.qualification}</p>
                    <p className="text-sm text-gray-400 italic mb-2">{edu.period}</p>
                    {edu.description && <p className="text-gray-300 text-sm">{edu.description}</p>}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Available For Hire CTA */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="mailto:hesbonmanyinsa96@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg cursor-pointer overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 10px #ff0000, 0 0 20px #ff9900, 0 0 30px #ffff00",
                "0 0 15px #00ff00, 0 0 25px #00ffff, 0 0 35px #ff00ff",
                "0 0 10px #ff0000, 0 0 20px #ff9900, 0 0 30px #ffff00",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px #ff0000,0 0 30px #ff9900,0 0 40px #ffff00,0 0 25px #00ff00,0 0 35px #00ffff,0 0 45px #ff00ff",
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              className="text-white"
              whileHover={{ scale: 1.3, textShadow: "0 0 8px #ffffff,0 0 12px #14B8A6" }}
              transition={{ duration: 0.3 }}
            >
              <FaEnvelope />
            </motion.div>
            <TypewriterText text="Available For Hire" />
          </motion.a>
        </div>

      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient { background-size: 200% 200%; animation: gradientShift 6s ease infinite; }
      `}</style>
    </section>
  );
};

export default Experience;
