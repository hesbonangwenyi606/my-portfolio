import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  { label: "Years Experience", value: "2+" },
  {label : 
  { label: "Technologies Mastered", value: "9+" },
  { label: "Clients Served", value: "30+" },
  { label: "Projects Completed", value: "45+" },
  { label: "Client Satisfaction", value: "99%" },
];

const bulletItems = [
  {
    title: "Full-Stack Web Development",
    description:
      "Crafting responsive and efficient web applications using modern technologies like React, Node.js, and Express, focused on seamless user experiences and maintainable code.",
    images: [
      "https://i.pinimg.com/736x/08/72/8f/08728f42513b4d9194d46d0d6655cde0.jpg",
      "https://i.pinimg.com/736x/40/26/ba/4026ba46fd98ac6223e83607e0de1709.jpg",
      "https://i.pinimg.com/1200x/02/f2/cc/02f2cca1044cad7e4b878aaf75583a42.jpg",
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description:
      "Building robust CI/CD pipelines, automating deployments, and managing cloud platforms like AWS, Docker, and Kubernetes for scalable infrastructure.",
    images: [
      "https://i.pinimg.com/736x/4a/91/ea/4a91ea168314527a010b991def9d1cd1.jpg",
      "https://i.pinimg.com/736x/d8/42/d8/d842d866eeff1fccc7bba203e101d7f2.jpg",
      "https://i.pinimg.com/736x/a9/d3/3f/a9d33ffbd42bb1bc9dd221a409888ea4.jpg",
    ],
  },
  {
    title: "API Design & Integration",
    description:
      "Developing secure, scalable RESTful APIs and integrating third-party services to ensure smooth communication between applications.",
    images: [
      "https://i.pinimg.com/1200x/3d/64/d0/3d64d065313c7fc92e53d82350760d64.jpg",
      "https://i.pinimg.com/736x/cd/9c/84/cd9c841f7b9e7b763fe05b7500187d93.jpg",
      "https://i.pinimg.com/736x/93/bb/f4/93bbf49e48ed27d46ff18d2bff884b8a.jpg",
    ],
  },
  {
    title: "Database Architecture",
    description:
      "Designing and optimizing SQL and NoSQL databases for high performance, reliability, and scalability in production environments.",
    images: [
      "https://i.pinimg.com/736x/d1/dc/7f/d1dc7f53d038d45a309730ed79a5c5b9.jpg",
      "https://i.pinimg.com/736x/d2/78/0a/d2780aaa5f367ba0be55e20e1c2e96cc.jpg",
      "https://i.pinimg.com/1200x/0e/6e/d1/0e6ed19c5195302fb9b0ffbaf68f5076.jpg",
    ],
  },
];

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

  const [raindrops] = useState(
    Array.from({ length: 50 }).map(() => ({
      left: Math.random() * 100 + "%",
      length: Math.random() * 20 + 10 + "px",
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 1,
    }))
  );

  const [landed, setLanded] = useState<boolean[]>(Array(stats.length).fill(false));

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden scroll-mt-16 font-inter">
      {/* Particles + Rain */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-blue-400 rounded-full opacity-30"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ x: [0, p.xOffset, 0], y: [0, p.yOffset, 0], rotate: [0, p.rotate, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, repeatType: "mirror", delay: p.delay }}
          />
        ))}
        {raindrops.map((r, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-blue-300 w-[2px]"
            style={{ top: "-10%", left: r.left, height: r.length }}
            animate={{ y: ["-10%", "110%"] }}
            transition={{ duration: r.duration, repeat: Infinity, delay: r.delay, ease: "linear" }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-16">
          {stats.map((stat, idx) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { margin: "-100px" });
            const numericValue = parseInt(stat.value);
            const suffix = stat.value.replace(/\d+/g, "");

            return (
              <motion.div
                key={idx}
                ref={ref}
                className="bg-gray-100 p-6 rounded-xl shadow-lg relative overflow-visible font-poppins"
                initial={{ opacity: 0, y: -200, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                  delay: idx * 0.3,
                }}
                onAnimationComplete={() => {
                  setLanded(prev => {
                    const updated = [...prev];
                    updated[idx] = true;
                    return updated;
                  });
                }}
              >
                <h3 className="text-3xl font-bold text-blue-600 relative inline-block">
                  {isInView ? (
                    <CountUp start={0} end={numericValue} duration={2} suffix={suffix} redraw={true} />
                  ) : (
                    "0" + suffix
                  )}

                  <AnimatePresence>
                    {landed[idx] && (
                      <motion.span
                        key={`splash-${idx}`}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0.6 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <span className="block w-6 h-6 bg-blue-400 rounded-full opacity-30"></span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </h3>
                <p className="text-gray-700 mt-2 font-inter">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* About Me Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 className="text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            About Me
          </motion.h2>
          <div className="h-1 bg-blue-600 mx-auto rounded relative overflow-hidden w-32">
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-white opacity-20 blur-md"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Left and Right Panels */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Panel */}
          <motion.div
            className="space-y-8 bg-blue-600 p-8 rounded-xl shadow-lg min-h-[650px]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-semibold text-blue-100 mb-4 font-poppins">Building Digital Excellence</h3>

            {[
              {
                text: "I bring 2+ years of experience in full-stack development and DevOps, creating scalable web applications and automation pipelines that improve workflow efficiency.",
                img: "https://i.pinimg.com/736x/ef/e1/5c/efe15c31e146989f9df6277418a5057c.jpg",
              },
              {
                text: "From concept to launch, I lead projects and collaborate with teams using modern tech stacks, ensuring clean, maintainable code and innovative solutions.",
                img: "https://i.pinimg.com/736x/4e/19/82/4e1982ddc4dbc34b5843f7443f4fc676.jpg",
              },
              {
                text: "Passionate about problem-solving, mentoring, and continuous learning, I stay ahead in the fast-moving tech world and contribute to building digital excellence.",
                img: "https://i.pinimg.com/1200x/36/d1/6a/36d16a8bc9597f727d31bf16b3d6872c.jpg",
              },
            ].map((block, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <p className="text-blue-50 text-lg leading-relaxed mb-3 font-inter">{block.text}</p>
                <motion.img
                  src={block.img}
                  alt="About Section Visual"
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                />
              </motion.div>
            ))}

            <motion.a
              href="https://drive.google.com/file/d/1394tqlKNj1f2fu5xWgVTlC3wmhX0LNC5/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md mt-6 font-poppins"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#f7b11bff",
                boxShadow: "0 10px 20px rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <FaEye /> View CV 
            </motion.a>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          >
            <h4 className="font-semibold text-black mb-6 text-xl font-poppins">What I Do</h4>
            <ul className="space-y-8 text-gray-800">
              {bulletItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-start mb-2">
                    <span className="w-3 h-3 bg-gray-700 rounded-full mr-3 mt-1"></span>
                    <div>
                      <h5 className="font-semibold text-gray-900 font-poppins">{item.title}</h5>
                      <p className="ml-1 text-sm text-gray-700 font-inter">{item.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                    {item.images.map((img, i) => (
                      <motion.img
                        key={i}
                        src={img}
                        alt={`${item.title} ${i + 1}`}
                        className="w-full h-24 md:h-28 object-cover rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        viewport={{ once: false }}
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
