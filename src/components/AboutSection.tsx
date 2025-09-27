import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side with Blue Cover */}
          <div className="space-y-6 bg-blue-600 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-100">
              Crafting Digital Excellence Through Code
            </h3>
            <p className="text-blue-50 text-lg leading-relaxed">
              With over 3+ years of experience in full-stack development and DevOps, 
              I specialize in building scalable web applications and implementing 
              robust CI/CD pipelines. My passion lies in solving complex problems 
              and delivering high-quality solutions that drive business growth.
            </p>
            <p className="text-blue-50 text-lg leading-relaxed">
              I have successfully led multiple projects from conception to deployment, 
              working with diverse teams and technologies. My expertise spans modern 
              JavaScript frameworks, cloud platforms, and infrastructure automation.
            </p>

            <a
              href="https://hesbon-developer.netlify.app/"
              download
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              My Resume
            </a>
          </div>
          
          {/* Right Side with Gray Cover */}
          <div className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg">
            <h4 className="font-semibold text-black mb-6 text-xl">What I Do</h4>
            <ul className="space-y-4 text-gray-800">
              <li>
                <h5 className="flex items-center font-semibold text-gray-900">
                  <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                  Full-Stack Web Development
                </h5>
                <p className="ml-5 text-sm text-gray-700">
                  I design and develop responsive, scalable web applications using 
                  modern frameworks like React, Node.js, and Express.js to deliver 
                  seamless user experiences.
                </p>
              </li>

              <li>
                <h5 className="flex items-center font-semibold text-gray-900">
                  <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                  DevOps & Cloud Infrastructure
                </h5>
                <p className="ml-5 text-sm text-gray-700">
                  I implement CI/CD pipelines, automate deployments, and manage 
                  cloud infrastructure on platforms like AWS, Azure, and Docker/Kubernetes.
                </p>
              </li>

              <li>
                <h5 className="flex items-center font-semibold text-gray-900">
                  <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                  API Design & Integration
                </h5>
                <p className="ml-5 text-sm text-gray-700">
                  I create secure and efficient RESTful APIs, integrate third-party 
                  services, and ensure reliable communication between systems.
                </p>
              </li>

              <li>
                <h5 className="flex items-center font-semibold text-gray-900">
                  <span className="w-2 h-2 bg-gray-700 rounded-full mr-3"></span>
                  Database Architecture
                </h5>
                <p className="ml-5 text-sm text-gray-700">
                  I design and optimize databases using SQL and NoSQL solutions, 
                  ensuring high performance, security, and scalability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
