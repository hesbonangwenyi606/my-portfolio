"use client";
import React, { useState } from "react";
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

const Experience: React.FC = () => {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
    hover: { stroke: "#22D3EE", strokeWidth: 4, filter: "drop-shadow(0 0 6px #22D3EE)" },
  };

  return (
    <section
      className="py-16 bg-gray-900 font-serif relative"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">
          Work Experience
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Animated Connecting Lines */}
          <svg className="hidden md:block absolute w-full h-full pointer-events-none">
            {[
              { x1: "10%", y1: "10%", x2: "90%", y2: "10%" }, // Top row
              { x1: "90%", y1: "10%", x2: "10%", y2: "90%" }, // diagonal
              { x1: "10%", y1: "90%", x2: "90%", y2: "90%" }, // bottom row
            ].map((line, idx) => (
              <motion.line
                key={idx}
                {...line}
                stroke="#14B8A6"
                strokeWidth={2}
                strokeDasharray="4"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                animate={hoveredLine === idx ? "hover" : "visible"}
                transition={{ duration: 1.2, delay: idx * 0.3 }}
              />
            ))}
          </svg>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer relative z-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
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
                  <p key={i}>• {item}</p>
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
