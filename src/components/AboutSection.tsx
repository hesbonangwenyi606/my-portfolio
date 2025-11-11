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
      images: [
        'https://i.pinimg.com/736x/08/72/8f/08728f42513b4d9194d46d0d6655cde0.jpg',
        'https://i.pinimg.com/1200x/f9/01/bb/f901bb71e28c559d90257a4a3880e773.jpg',
        'https://i.pinimg.com/736x/1a/e3/ff/1ae3ffdb10326a80e333550ad69f1fa4.jpg',
      ],
    },
    {
      title: 'DevOps & Cloud Infrastructure',
      description: `I implement CI/CD pipelines, automate deployments, and manage cloud infrastructure on platforms like AWS, Azure, and Docker/Kubernetes.`,
      images: [
        'https://i.pinimg.com/736x/4a/91/ea/4a91ea168314527a010b991def9d1cd1.jpg',
        'https://i.pinimg.com/736x/d8/42/d8/d842d866eeff1fccc7bba203e101d7f2.jpg',
        'https://i.pinimg.com/736x/a9/d3/3f/a9d33ffbd42bb1bc9dd221a409888ea4.jpg',
      ],
    },
    {
      title: 'API Design & Integration',
      description: `I create secure and efficient RESTful APIs, integrate third-party services, and ensure reliable communication between systems.`,
      images: [
        'https://i.pinimg.com/1200x/3d/64/d0/3d64d065313c7fc92e53d82350760d64.jpg',
        'https://i.pinimg.com/736x/cd/9c/84/cd9c841f7b9e7b763fe05b7500187d93.jpg',
        'https://i.pinimg.com/736x/93/bb/f4/93bbf49e48ed27d46ff18d2bff884b8a.jpg',
      ],
    },
    {
      title: 'Database Architecture',
      description: `I design and optimize databases using SQL and NoSQL solutions, ensuring high performance, security, and scalability.`,
      images: [
        'https://i.pinimg.com/736x/d1/dc/7f/d1dc7f53d038d45a309730ed79a5c5b9.jpg',
        'https://i.pinimg.com/736x/d2/78/0a/d2780aaa5f367ba0be55e20e1c2e96cc.jpg',
        'https://i.pinimg.com/1200x/0e/6e/d1/0e6ed19c5195302fb9b0ffbaf68f5076.jpg',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 relative group">
          <motion.h2
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
            animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 4, ease: 'easeInOut' }}
          >
            About Me
          </motion.h2>

          {/* Underline */}
          <motion.div
            className="h-1 bg-blue-600 mx-auto rounded relative overflow-hidden"
            animate={{ x: ['-10%', '10%', '-10%'] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-white opacity-20 blur-md"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Panel */}
          <motion.div
            className="space-y-6 bg-blue-600 p-8 rounded-xl shadow-lg relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold text-blue-100"
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, repeatType: 'loop', duration: 3, ease: 'easeInOut' }}
            >
              Building Digital Excellence
            </motion.h3>

            {/* First Paragraph with Image */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                src="https://i.pinimg.com/736x/ef/e1/5c/efe15c31e146989f9df6277418a5057c.jpg"
                alt="Full-stack development & DevOps"
                className="w-full md:w-40 h-24 md:h-32 object-cover rounded-lg shadow-md"
              />
              <p className="text-blue-50 text-lg leading-relaxed md:flex-1">
                With over 3+ years of experience in full-stack development and DevOps, I specialize in building scalable web applications and implementing robust CI/CD pipelines. My passion lies in solving complex problems and delivering high-quality solutions that drive business growth.
              </p>
            </div>

            {/* Second Paragraph with Image */}
            <div className="flex flex-col md:flex-row items-start gap-4">
              <img
                src="https://i.pinimg.com/736x/0e/a7/ef/0ea7ef79bbfe9c8a6e2b16cf2b3d9cd5.jpg"
                alt="Projects & Teams"
                className="w-full md:w-40 h-24 md:h-32 object-cover rounded-lg shadow-md"
              />
              <p className="text-blue-50 text-lg leading-relaxed md:flex-1">
                I have successfully led multiple projects from conception to deployment, working with diverse teams and technologies. My expertise spans modern JavaScript frameworks, cloud platforms, and infrastructure automation.
              </p>
            </div>

            <a
              href="https://hesbon-resume.vercel.app/"
              download
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-blue-400/50"
            >
              My Resume
            </a>
          </motion.div>

          {/* Right Panel with Images */}
          <motion.div
            className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-black mb-6 text-xl">What I Do</h4>

            <ul className="space-y-8 text-gray-800">
              {bulletItems.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-start mb-2">
                    <span className="w-3 h-3 bg-gray-700 rounded-full mr-3 mt-1"></span>
                    <div>
                      <h5 className="font-semibold text-gray-900">{item.title}</h5>
                      <p className="ml-1 text-sm text-gray-700">{item.description}</p>
                    </div>
                  </div>

                  {/* Images grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {item.images.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt={`${item.title} ${i + 1}`}
                        className="w-full h-24 md:h-28 object-cover rounded-lg shadow-md"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59,130,246,0.5)' }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
