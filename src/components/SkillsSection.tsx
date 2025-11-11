import React, { useEffect, useRef, useState } from "react";

const Stats = () => {
  return (
    <section className="py-10 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-12">
          <StatCard number="50+" label="Projects Completed" />
          <StatCard number="3+" label="Years Experience" />
          <StatCard number="10+" label="Clients Served" />
          <StatCard number="10+" label="Awards Won" />
          <StatCard number="100%" label="Client Satisfaction" />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-8">
            My Skills
          </h2>

          {/* Grid of Skill Categories */}
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
                { name: "Python", level: 85 },
                { name: "Java", level: 80 },
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
                { name: "Jenkins", level: 70 },
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

/* Reusable Stat Card */
const StatCard = ({ number, label }) => (
  <div className="cursor-pointer bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500 hover:scale-105 transform transition duration-300">
    <h3 className="text-3xl font-bold text-blue-600">{number}</h3>
    <p className="text-gray-700">{label}</p>
  </div>
);

/* Skill Category Component */
const SkillCategory = ({ title, skills }) => (
  <div className="bg-white p-5 rounded-xl shadow-md">
    <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
      {title}
    </h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  </div>
);

/* Skill Progress Bar Component with animation */
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
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-blue-600 font-semibold">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Stats;
