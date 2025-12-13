"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaServer,
  FaDesktop,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

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

const education: EducationItem[] = [
  {
    school: "FRATIRON SCHOOL",
    qualification: "Certificate | DevOps Engineering",
    period: "2024 - 2025",
  },
  {
    school: "MORINGA SCHOOL",
    qualification: "Certificate | Software Development",
    period: "2023 - 2024",
  },
  {
    school: "KCA UNIVERSITY",
    qualification: "Diploma | Mathematics & Computer Science",
    period: "2020 - 2023",
  },
  {
    school: "NYAIKURO SDA HIGH SCHOOL",
    qualification: "KCSE | Mean Grade: B+",
    period: "2016 – 2019",
  },
];

const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMouseTilt({ x, y });
  };

  return (
    // 🔥 THIS ID FIXES NAVIGATION
    <section
      id="experience"
      className="relative py-16 bg-gray-900 overflow-hidden scroll-mt-[80px]"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
              onMouseMove={handleCardMouseMove}
              animate={
                hoveredCard === idx
                  ? {
                      scale: 1.05,
                      rotateX: mouseTilt.y,
                      rotateY: mouseTilt.x,
                      boxShadow:
                        "0 0 30px #14B8A6, 0 0 60px #00ffff",
                    }
                  : { scale: 1 }
              }
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 text-center">
                {exp.title}
              </h3>
              <p className="text-teal-300 text-center">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company}
                </a>
              </p>
              <p className="text-sm text-gray-400 italic text-center mb-4">
                {exp.period}
              </p>
              <div className="space-y-2 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-8 text-teal-400">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-gray-900" />
              </div>
              <div className="bg-gray-800/70 rounded-xl p-5 w-full">
                <h3 className="text-teal-400 font-semibold">{edu.school}</h3>
                <p className="text-gray-300">{edu.qualification}</p>
                <p className="text-sm text-gray-400 italic">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="mailto:hesbonmanyinsa96@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full shadow-lg hover:scale-105 transition"
          >
            <FaEnvelope className="text-white" />
            <span className="text-white font-semibold">
              Available For Hire
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
