import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const [particles] = useState(
    Array.from({ length: 15 }).map(() => ({
      top: Math.random() * 300 + 'px',
      left: Math.random() * 100 + '%',
      size: Math.random() * 4 + 2 + 'px',
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      xOffset: Math.random() * 30 - 15,
      yOffset: Math.random() * 20 - 10,
    }))
  );

  const bulletItems = [
    {
      title: 'Full-Stack Web Development',
      description: `I design and develop responsive, scalable web applications using modern frameworks like React, Node.js, and Express.js to deliver seamless user experiences.`,
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      description: `I implement CI/CD pipelines, automate deployments, and manage cloud infrastructure on platforms like AWS, Azure, and Docker/Kubernetes.`,
    },
    {
      title: 'API Design & Integration',
      description: `I create secure and efficient RESTful APIs, integrate third-party services, and ensure reliable communication between systems.`,
    },
    {
      title: 'Database Architecture',
      description: `I design and optimize databases using SQL and NoSQL solutions, ensuring high performance, security, and scalability.`,
    },
  ];

  const paragraphs = [
    `With over 3+ years of experience in full-stack development and DevOps, I specialize in building scalable web applications and implementing robust CI/CD pipelines. My passion lies in solving complex problems and delivering high-quality solutions that drive business growth.`,
    `I have successfully led multiple projects from conception to deployment, working with diverse teams and technologies. My expertise spans modern JavaScript frameworks, cloud platforms, and infrastructure automation.`,
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-blue-200 rounded-full opacity-40"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{
            rotate: [0, 360],
            x: [0, p.xOffset, 0],
            y: [0, p.yOffset, 0],
            opacity: [0.4, 0.1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 6 + Math.random() * 4,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Panel */}
          <motion.div
            className="space-y-6 bg-blue-600 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-100">
              Crafting Digital Excellence Through Code
            </h3>

            {paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                className="text-blue-50 text-lg leading-relaxed cursor-pointer"
                animate={{ y: [0, -5, 0] }} // gentle float
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 4 + idx * 0.5,
                  delay: idx * 0.2,
                  ease: 'easeInOut',
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  textShadow: '0 0 10px rgba(255,255,255,0.3)',
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                {p}
              </motion.p>
            ))}

            <motion.a
              href="https://hesbon-resume.vercel.app/"
              download
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-blue-400/50"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
            >
              My Resume
            </motion.a>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-black mb-6 text-xl">What I Do</h4>

            <ul className="space-y-4 text-gray-800">
              {bulletItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="transition-transform duration-300 hover:scale-105 hover:bg-gray-200 rounded-lg p-2 cursor-pointer"
                  animate={{ y: [0, -5, 0] }} // gentle float
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 4 + idx * 0.3,
                    delay: idx * 0.2,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ y: -3, scale: 1.02, boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}
                >
                  <h5 className="flex items-center font-semibold text-gray-900">
                    <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                    {item.title}
                  </h5>
                  <p className="ml-5 text-sm text-gray-700">{item.description}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
