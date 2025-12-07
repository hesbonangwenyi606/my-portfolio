"use client";
import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Backend Developer Intern",
    company: "HNG Internship",
    period: "Dec 2024 – Oct 2025",
    responsibilities: [
      "Developed and maintained scalable backend services for production-level projects.",
      "Built efficient API endpoints using Node.js, Express.js, and MongoDB.",
      "Collaborated with cross-functional teams during fast-paced sprint cycles.",
      "Improved performance of existing API routes through query optimization, caching, and better data modeling.",
      "Integrated third-party APIs and tools required by project teams.",
      "Participated in code reviews and contributed to team problem-solving and documentation.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Valos Company",
    period: "Aug 2024 – Nov 2024",
    responsibilities: [
      "Designed and implemented user-friendly UI components using React.js, JavaScript, HTML, and CSS.",
      "Worked closely with designers and backend developers to ensure smooth API integration.",
      "Optimized web performance using lazy loading, code splitting, and responsive design techniques.",
      "Debugged front-end issues to improve usability and application stability.",
      "Ensured cross-browser compatibility and mobile responsiveness across major devices.",
      "Contributed to production deployment processes and implementation tasks.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company: "Techno Brain Company",
    period: "Apr 2023 – Apr 2024",
    responsibilities: [
      "Developed and optimized RESTful APIs using Node.js, Express.js, and MongoDB.",
      "Implemented secure authentication and authorization mechanisms.",
      "Collaborated with front-end teams to connect user-facing elements with robust backend logic.",
      "Debugged and resolved system issues to reduce downtime and improve efficiency.",
      "Designed and maintained database schemas ensuring high data integrity.",
      "Wrote clean, maintainable, and well-documented code following industry best practices.",
      "Participated in software deployment and implementation for client systems.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Personal Projects / Freelance",
    period: "2022 – 2023",
    responsibilities: [
      "Built 15+ RESTful APIs using FastAPI (Python) and Node.js.",
      "Containerized applications using Docker for consistent deployment across environments.",
      "Integrated APIs with React & TypeScript front-end applications.",
      "Designed scalable and maintainable system architectures.",
      "Implemented efficient database schemas and optimized queries for PostgreSQL and MongoDB.",
      "Delivered client projects end-to-end, ensuring smooth implementation and release.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-8">
          Work Experience
        </h2>

        {/* Hero / About My Experience */}
        <motion.div
          className="mb-12 text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            I build <span className="text-teal-400 font-semibold">scalable backend systems</span>,{" "}
            <span className="text-teal-400 font-semibold">interactive frontends</span>, and{" "}
            <span className="text-teal-400 font-semibold">end-to-end applications</span> through
            hands-on projects and internships. Skilled in{" "}
            <span className="text-teal-400 font-semibold">Node.js, Express, MongoDB, React, and TypeScript</span>, I deliver clean, maintainable code and reliable, user-focused solutions. I thrive on solving complex problems and turning ideas into production-ready applications.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gray-800 rounded-2xl p-6 shadow-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Animated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl pointer-events-none"></div>

              <h3 className="text-xl font-semibold text-teal-400 mb-1 relative z-10">
                {exp.title}
              </h3>
              <p className="text-teal-300 font-medium relative z-10">{exp.company}</p>
              <p className="text-sm text-gray-400 italic mb-4 relative z-10">{exp.period}</p>

              <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed relative z-10">
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
