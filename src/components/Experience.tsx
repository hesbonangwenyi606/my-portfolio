"use client";
import React from "react";
import { motion } from "framer-motion";
import { Server, Monitor, Code2 } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const iconMap: Record<string, JSX.Element> = {
  "Backend Developer Intern": <Server className="w-6 h-6 text-white" />,
  "Front-End Developer Intern": <Monitor className="w-6 h-6 text-white" />,
  "Full Stack Software Engineer": <Code2 className="w-6 h-6 text-white" />,
};

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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
          Work Experience
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 w-1 h-full bg-blue-200 rounded-full" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative pl-20"
              >
                {/* ICON AREA */}
                <motion.div
                  initial={{ scale: 0.7 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 top-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg flex items-center justify-center"
                >
                  {iconMap[exp.title] || (
                    <Code2 className="w-6 h-6 text-white" />
                  )}
                </motion.div>

                {/* CARD */}
                <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300">
                  <h3 className="text-xl font-semibold text-blue-800 mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 italic mb-4">
                    {exp.period}
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
