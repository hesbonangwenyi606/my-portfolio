"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaServer, FaDesktop, FaCode, FaEnvelope } from "react-icons/fa";

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
    school: "KCA University",
    qualification: "Diploma | Mathematics & Computer Science",
    period: "2020 - 2023",
  },
  {
    school: "Moringa School",
    qualification: "Certificate | Software Development",
    period: " 2023 - 2024",
  },
  {
    school: "Moringa School",
    qualification: "Certificate | DevOps Engineering",
    period: "2024 -  2025",
  },
  {
    school: "Nyaikuro High School",
    qualification: "KCSE | Mean Grade: B+",
    period: "2016 – 2019",
  },
];

// Sparkles generator
const generateSparkles = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 3 + 1 + "px",
    delay: Math.random() * 5,
    speed: Math.random() * 2 + 1,
  }));

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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
        .animate-blink {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s infinite;
        }
      `}</style>
    </span>
  );
};

const Experience: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState(generateSparkles(40));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMouse({
        x: Math.min(Math.max(e.clientX * 0.01, -20), 20),
        y: Math.min(Math.max(e.clientY * 0.01, -20), 20),
      });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMouseTilt({ x, y });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } },
    hover: (idx: number) => ({
      scale: 1.06,
      rotateX: hoveredCard === idx ? mouseTilt.y : 0,
      rotateY: hoveredCard === idx ? mouseTilt.x : 0,
      boxShadow: "0 0 25px #ff00ff, 0 0 50px #00ffff",
      transition: { type: "spring", stiffness: 200, damping: 12 },
    }),
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
        style={{ backgroundImage: "url('https://i.pinimg.com/1200x/4f/a0/f8/4fa0f8d32fac31b4ae03ee9c60f034fb.jpg')" }}
        animate={{ x: mouse.x, y: mouse.y }}
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
          transition={{ duration: sparkle.speed + 2, repeat: Infinity, ease: "easeInOut", delay: sparkle.delay }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Work Experience */}
        <motion.h2
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 animate-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg cursor-pointer z-10 border border-white/10 overflow-hidden"
              variants={cardVariants}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => { setHoveredCard(null); setMouseTilt({ x: 0, y: 0 }); }}
              onMouseMove={handleCardMouseMove}
            >
              <motion.div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 opacity-20 animate-gradient blur-xl rounded-2xl" />
              <div className="relative z-10 flex justify-center mb-4">{exp.icon}</div>
              <h3 className="text-xl font-semibold text-teal-400 text-center mb-1">{exp.title}</h3>
              <p className="text-teal-300 font-medium text-center mb-1">
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-200">{exp.company}</a>
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

        {/* Education Section */}
        <motion.h2
          className="text-3xl font-bold text-center mt-16 mb-8 text-teal-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 cursor-pointer overflow-hidden"
              variants={cardVariants}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: false }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onMouseMove={handleCardMouseMove}
            >
              <h3 className="text-lg font-semibold text-teal-400">{edu.school}</h3>
              <p className="text-gray-300 mb-1">{edu.qualification}</p>
              <p className="text-sm text-gray-400 italic">{edu.period}</p>
            </motion.div>
          ))}
        </div>

        {/* Available for Hire Button */}
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
              boxShadow: "0 0 20px #ff0000, 0 0 30px #ff9900, 0 0 40px #ffff00, 0 0 25px #00ff00, 0 0 35px #00ffff, 0 0 45px #ff00ff",
              transition: { duration: 0.3, type: "spring", stiffness: 300 },
            }}
          >
            <motion.div
              className="text-white"
              whileHover={{
                scale: 1.3,
                textShadow: "0 0 8px #ffffff, 0 0 12px #14B8A6",
              }}
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
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
