import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Stat {
  label: string;
  value: number;
}

const DashboardSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'Vue.js/Nuxt.js', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Sass/SCSS', level: 88 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Python/Django', level: 88 },
        { name: 'Python/Flask', level: 85 },
        { name: 'Java/Spring Boot', level: 87 },
        { name: 'C#/.NET', level: 80 },
        { name: 'PHP/Laravel', level: 82 },
        { name: 'Ruby on Rails', level: 78 },
        { name: 'Go/Gin', level: 75 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 }
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 87 },
        { name: 'Azure', level: 85 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD Pipelines', level: 90 },
        { name: 'Terraform', level: 82 },
        { name: 'Ansible', level: 78 },
        { name: 'Jenkins/GitHub Actions', level: 85 },
        { name: 'Prometheus/Grafana', level: 75 },
        { name: 'Helm', level: 70 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Linux/Bash', level: 88 },
        { name: 'Monitoring/Logging', level: 85 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Postman', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Jira', level: 85 },
        { name: 'Confluence', level: 80 },
        { name: 'VS Code', level: 95 },
        { name: 'Chrome DevTools', level: 90 }
      ]
    }
  ];

  const stats: Stat[] = [
    { label: 'Projects Completed', value: 50 },
    { label: 'Years Experience', value: 3 },
    { label: 'Clients Served', value: 10 },
    { label: 'Awards Won', value: 10 }
  ];

  // Skill animations
  const [animatedLevels, setAnimatedLevels] = useState<number[][]>(
    skillCategories.map(cat => cat.skills.map(() => 0))
  );

  // Stats animations
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLevels(prevLevels =>
        prevLevels.map((catLevels, i) =>
          catLevels.map((lvl, j) => {
            const target = skillCategories[i].skills[j].level;
            return lvl < target ? Math.min(lvl + 1, target) : lvl;
          })
        )
      );
    }, 15);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animate = () => {
      const interval = setInterval(() => {
        setAnimatedValues(prevValues =>
          prevValues.map((val, i) => {
            if (stats[i].label === 'Clients Served') return val; // constant
            const target = stats[i].value;
            return val < target ? Math.min(val + 1, target) : val;
          })
        );
      }, 20);

      setTimeout(() => clearInterval(interval), 2000);
    };

    animate();

    const repeatInterval = setInterval(() => {
      setAnimatedValues(stats.map(() => 0));
      animate();
    }, 45000);

    return () => clearInterval(repeatInterval);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Stats Section on top */}
      <section id="stats" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.label === 'Projects Completed'
                  ? `${animatedValues[index]}+`
                  : stat.label === 'Clients Served'
                  ? '10+'
                  : animatedValues[index]}
              </h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{animatedLevels[catIndex][skillIndex]}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${animatedLevels[catIndex][skillIndex]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardSection;
