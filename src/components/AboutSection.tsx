import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Crafting Digital Excellence Through Code
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over 3+ years of experience in full-stack development and DevOps, 
              I specialize in building scalable web applications and implementing 
              robust CI/CD pipelines. My passion lies in solving complex problems 
              and delivering high-quality solutions that drive business growth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I have successfully led multiple projects from conception to deployment, 
              working with diverse teams and technologies. My expertise spans modern 
              JavaScript frameworks, cloud platforms, and infrastructure automation.
            </p>
            

            
            <a
              href="https://hesbon-developer.netlify.app/"
              download
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              My Resume
            </a>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">What I Do</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  Full-Stack Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3+"></span>
                  DevOps & Cloud Infrastructure
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  API Design & Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3+"></span>
                  Database Architecture
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
