"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaServer, FaDesktop, FaCode, FaEnvelope, FaGraduationCap } from "react-icons/fa";

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
    title: "Backend Developer contract",
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
    qualification: "Diploma | Mathematics & Computer Science",
    period: "2020 - 2023",
    icon: <FaGraduationCap className="text-gray-900" />,
    description:
      "Acquired strong foundations in algorithms, data structures, programming languages, problem-solving, and computer science fundamentals.",
  },
];

// ----- Typewriter Component -----
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

// ----- Experience Component -----
const Experience: React.FC = () => {
  // Store tilt per card
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
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-200">
                  {exp.company}
                </a>
              </p>
              <p className="text-sm text-gray-400 italic text-center mb-4">{exp.period}</p>
              <div className="space-y-2 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & CTA remain the same */}
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
