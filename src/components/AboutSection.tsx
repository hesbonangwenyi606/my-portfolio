import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const AboutSection: React.FC = () => {
  const [particles] = useState(
    Array.from({ length: 30 }).map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 4 + 2 + "px",
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      rotate: Math.random() * 360,
      xOffset: Math.random() * 20 - 10,
      yOffset: Math.random() * 20 - 10,
    }))
  );

  const bulletItems = [
    {
      title: "Full-Stack Web Development",
      description: `I design and develop responsive, scalable web applications using modern frameworks like React, Node.js, and Express.js to deliver seamless user experiences.`,
      images: [
        "https://i.pinimg.com/736x/08/72/8f/08728f42513b4d9194d46d0d6655cde0.jpg",
        "https://i.pinimg.com/736x/40/26/ba/4026ba46fd98ac6223e83607e0de1709.jpg",
        "https://i.pinimg.com/1200x/02/f2/cc/02f2cca1044cad7e4b878aaf75583a42.jpg",
      ],
    },
    {
      title: "DevOps & Cloud Infrastructure",
      description: `I implement CI/CD pipelines, automate deployments, and manage cloud infrastructure on platforms like AWS, Azure, and Docker/Kubernetes.`,
      images: [
        "https://i.pinimg.com/736x/4a/91/ea/4a91ea168314527a010b991def9d1cd1.jpg",
        "https://i.pinimg.com/736x/d8/42/d8/d842d866eeff1fccc7bba203e101d7f2.jpg",
        "https://i.pinimg.com/736x/a9/d3/3f/a9d33ffbd42bb1bc9dd221a409888ea4.jpg",
      ],
    },
    {
      title: "API Design & Integration",
      description: `I create secure and efficient RESTful APIs, integrate third-party services, and ensure reliable communication between systems.`,
      images: [
        "https://i.pinimg.com/1200x/3d/64/d0/3d64d065313c7fc92e53d82350760d64.jpg",
        "https://i.pinimg.com/736x/cd/9c/84/cd9c841f7b9e7b763fe05b7500187d93.jpg",
        "https://i.pinimg.com/736x/93/bb/f4/93bbf49e48ed27d46ff18d2bff884b8a.jpg",
      ],
    },
    {
      title: "Database Architecture",
      description: `I design and optimize databases using SQL and NoSQL solutions, ensuring high performance, security, and scalability.`,
      images: [
        "https://i.pinimg.com/736x/d1/dc/7f/d1dc7f53d038d45a309730ed79a5c5b9.jpg",
        "https://i.pinimg.com/736x/d2/78/0a/d2780aaa5f367ba0be55e20e1c2e96cc.jpg",
        "https://i.pinimg.com/1200x/0e/6e/d1/0e6ed19c5195302fb9b0ffbaf68f5076.jpg",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden scroll-mt-16">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-blue-400 rounded-full opacity-30"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{
              x: [0, p.xOffset, 0],
              y: [0, p.yOffset, 0],
              rotate: [0, p.rotate, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4"
            animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4,
              ease: "easeInOut",
            }}
          >
            About Me
          </motion.h2>
          <div className="h-1 bg-blue-600 mx-auto rounded relative overflow-hidden w-32">
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-white opacity-20 blur-md"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT PANEL */}
          <motion.div
            className="space-y-6 bg-blue-600 p-8 rounded-xl shadow-lg min-h-[650px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl font-semibold text-blue-100 mb-4">
              Building Digital Excellence
            </h3>

            {/* 1️⃣ First paragraph */}
            <div>
              <p className="text-blue-50 text-lg leading-relaxed mb-3">
                With over 3+ years of experience in full-stack development and DevOps, I specialize in
                building scalable web applications and implementing reliable automation pipelines that
                streamline deployment.
              </p>
              <motion.img
                src="https://i.pinimg.com/736x/ef/e1/5c/efe15c31e146989f9df6277418a5057c.jpg"
                alt="Full-stack development & DevOps"
                className="w-full h-40 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* 2️⃣ Second paragraph */}
            <div>
              <p className="text-blue-50 text-lg leading-relaxed mb-3">
                I’ve led projects from concept to launch, collaborating with diverse teams across modern
                stacks, focusing on clean code, teamwork, and innovation.
              </p>
              <motion.img
                src="https://i.pinimg.com/1200x/09/6e/35/096e359e1e0bee3457c3517b09c4d165.jpg"
                alt="Projects & Teams"
                className="w-full h-40 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* 3️⃣ Third paragraph */}
            <div>
              <p className="text-blue-50 text-lg leading-relaxed mb-3">
                Beyond coding, I thrive on solving challenges, mentoring peers, and continuously learning
                to stay ahead in a fast-evolving tech landscape.
              </p>
              <motion.img
                src="https://i.pinimg.com/736x/4e/28/8e/4e288e90fe50266e86d74d34e03d4a61.jpg"
                alt="Team collaboration"
                className="w-full h-40 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            </div>

            {/* Resume Button */}
            <motion.a
              href="https://hesbon-resume.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md mt-6"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#e0f2fe",
                boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye /> View Resume
            </motion.a>
          </motion.div>

          {/* RIGHT PANEL — What I Do */}
          <motion.div
            className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h4 className="font-semibold text-black mb-6 text-xl">What I Do</h4>
            <ul className="space-y-8 text-gray-800">
              {bulletItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="flex items-start mb-2">
                    <span className="w-3 h-3 bg-gray-700 rounded-full mr-3 mt-1"></span>
                    <div>
                      <h5 className="font-semibold text-gray-900">{item.title}</h5>
                      <p className="ml-1 text-sm text-gray-700">{item.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {item.images.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt={`${item.title} ${i + 1}`}
                        className="w-full h-24 md:h-28 object-cover rounded-lg shadow-md"
                        whileHover={{
                          scale: 1.05,
                          rotate: i % 2 === 0 ? 2 : -2,
                          boxShadow: "0 0 15px rgba(59,130,246,0.4)",
                        }}
                      />
                    ))}
                  </div>
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
