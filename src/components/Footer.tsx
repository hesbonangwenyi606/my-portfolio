import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4">
              Hesbon <span className="text-blue-400">Angwenyi</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Full Stack & DevOps Engineer passionate about building scalable 
              applications and robust infrastructure solutions.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hesbonangwenyi606"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254743573380"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M16.002 3.2c-7.069 0-12.8 5.731-12.8 12.8 0 2.262.589 4.466 1.71 6.407l-1.822 6.658 6.813-1.789a12.735 12.735 0 006.099 1.524h.001c7.068 0 12.799-5.731 12.799-12.8s-5.731-12.8-12.8-12.8zm0 23.466h-.001a10.62 10.62 0 01-5.402-1.482l-.387-.23-4.046 1.062 1.082-3.957-.252-.406a10.584 10.584 0 01-1.642-5.61c0-5.869 4.775-10.645 10.646-10.645 2.842 0 5.514 1.107 7.523 3.116a10.6 10.6 0 013.122 7.529c0 5.87-4.775 10.623-10.643 10.623zm5.883-7.971c-.322-.162-1.902-.938-2.196-1.045-.294-.108-.509-.162-.725.162-.216.323-.832 1.044-1.019 1.26-.187.216-.377.243-.699.081-.322-.162-1.359-.501-2.589-1.598-.957-.854-1.604-1.91-1.791-2.233-.187-.323-.02-.498.142-.66.147-.147.323-.377.485-.565.162-.188.216-.323.323-.539.108-.216.054-.405-.027-.566-.081-.162-.725-1.748-.994-2.394-.262-.629-.529-.544-.725-.554-.187-.009-.405-.011-.622-.011s-.566.081-.863.405c-.294.323-1.131 1.105-1.131 2.691s1.158 3.127 1.318 3.342c.162.216 2.278 3.478 5.519 4.877.771.333 1.372.531 1.841.678.773.246 1.477.211 2.034.128.62-.092 1.902-.775 2.172-1.525.27-.75.27-1.391.189-1.525-.081-.135-.294-.216-.616-.378z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:hesbonmanyinsa96@gmail.com"
                className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm0-2.13l11.99-7.065h-23.98l11.99 7.065z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.959-3.127 1.184-1.796-1.91-4.862-1.949-6.772-.153-1.28 1.204-1.775 3.077-1.227 4.787-4.088-.205-7.72-2.165-10.148-5.144-1.29 2.213-.63 5.081 1.445 6.564-.806-.026-1.58-.247-2.258-.616v.061c0 2.385 1.693 4.373 3.946 4.827-.693.188-1.429.217-2.136.08.631 1.953 2.445 3.379 4.604 3.419-2.07 1.623-4.679 2.348-7.29 2.04 2.179 1.396 4.768 2.209 7.557 2.209 9.053 0 13.998-7.496 13.998-13.985 0-.21-.006-.423-.015-.635.959-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>DevOps Consulting</li>
              <li>Cloud Architecture</li>
              <li>Technical Leadership</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2021 - {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
