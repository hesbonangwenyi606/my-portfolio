import React, { useEffect, useRef, useState } from "react";

const Stats = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-12">
          <StatCard number={3} suffix="+" label="Years Experience" delay={0} />
          <StatCard number={50} suffix="+" label="Projects Completed" delay={0.1} />
          <StatCard number={16} suffix="+" label="Clients Served" delay={0.2} />
          <StatCard number={10} suffix="+" label="Awards Won" delay={0.3} />
          <StatCard number={100} suffix="%" label="Client Satisfaction" delay={0.4} />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
            My Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <SkillCategory
              title="Frontend"
              skills={[
                { name: "HTML5", level: 95 },
                { name: "CSS3 / Tailwind", level: 90 },
                { name: "JavaScript (ES6+)", level: 92 },
                { name: "React.js", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
              ]}
            />

            <SkillCategory
              title="Backend"
              skills={[
                { name: "Node.js", level: 90 },
                { name: "Express.js", level: 88 },
                { name: "Python", level: 90 },
                { name: "Java", level: 60 },
                { name: "C++", level: 50 },
                { name: "PHP", level: 75 },
                { name: "REST APIs", level: 92 },
                { name: "GraphQL", level: 75 },
              ]}
            />

            <SkillCategory
              title="DevOps"
              skills={[
                { name: "Docker", level: 90 },
                { name: "Kubernetes", level: 75 },
                { name: "Ansible", level: 80 },
                { name: "Terraform", level: 78 },
                { name: "Git & GitHub", level: 92 },
                { name: "CI/CD Pipelines", level: 85 },
                { name: "AWS", level: 80 },
                { name: "Azure", level: 70 },
              ]}
            />

            <SkillCategory
              title="Databases"
              skills={[
                { name: "MongoDB", level: 90 },
                { name: "MySQL", level: 88 },
                { name: "PostgreSQL", level: 85 },
                { name: "Redis", level: 75 },
              ]}
            />

            <SkillCategory
              title="Other Tools"
              skills={[
                { name: "Figma", level: 75 },
                { name: "Postman", level: 90 },
                { name: "Swagger", level: 80 },
                { name: "Agile / Scrum", level: 85 },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ✅ StatCard with glow pulse animation */
const StatCard = ({ number, suffix, label, delay }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pop, setPop] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = number;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
          setPop(true);
          setTimeout(() => setPop(false), 800); // glow pulse lasts longer
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [inView, number]);

  return (
    <div
      ref={ref}
      className={`cursor-pointer bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 transform transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative flex justify-center items-center">
        {/* Glow Pulse Ring */}
        {pop && (
          <div className="absolute w-20 h-20 rounded-full animate-glow-pulse bg-blue-400/30 blur-lg"></div>
        )}

        <h3
          className={`text-3xl font-bold text-blue-600 transition-transform duration-300 ${
            pop ? "scale-125" : "scale-100"
          }`}
        >
          {count}
          {suffix}
        </h3>
      </div>
      <p className="text-gray-700 mt-2">{label}</p>

      <style jsx>{`
        @keyframes glowPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-glow-pulse {
          animation: glowPulse 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

/* Skill Category */
const SkillCategory = ({ title, skills }) => (
  <div className="bg-white p-5 rounded-xl shadow-md">
    <h3
      className="text-xl font-bold text-center 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400
                 drop-shadow-lg
                 transition transform hover:scale-110 hover:drop-shadow-xl mb-4"
    >
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

/* Skill Progress Bar */
const SkillBar = ({ name, level }) => {
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 2;
        if (start >= level) {
          start = level;
          clearInterval(interval);
        }
        setProgress(start);
      }, 20);
    }
  }, [inView, level]);

  return (
    <div ref={barRef}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium transition-transform transform hover:scale-105 hover:text-blue-500">
          {name}
        </span>
        <span className="text-blue-600 font-semibold">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden relative">
        <div
          className="h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(270deg, #4f46e5, #ec4899, #facc15, #4f46e5)",
            backgroundSize: "600% 100%",
            animation: "flowGradient 3s ease infinite",
            boxShadow:
              "0 0 8px rgba(236,72,153,0.5), 0 0 8px rgba(252,204,21,0.5)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 h-3 rounded-full pointer-events-none"
          style={{
            width: `${progress}%`,
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)",
            animation: "shine 2s infinite linear",
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes flowGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Stats;
