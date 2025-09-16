import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'DevOps Engineer', 'Cloud Architect', 'Problem Solver'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    setCurrentText('');
    const timer = setInterval(() => {
      setCurrentText(texts[currentIndex].slice(0, i + 1));
      i++;
      if (i === texts[currentIndex].length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            <span className="text-blue-400">Hesbon Angwenyi</span>
          </h1>

          <div className="text-xl md:text-2xl font-medium text-gray-300 mt-2 flex items-center gap-2">
            <span>I'm a</span>
            <span className="text-blue-400 font-semibold">{currentText}</span>
            <span className="animate-pulse text-blue-400">|</span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Passionate about building scalable applications and robust infrastructure. 
            I transform ideas into powerful digital solutions using cutting-edge technologies.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
<a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            </button>
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
             <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/updated.jpeg"  // ✅ from public folder
              alt="Hesbon Angwenyi"
              className="w-80 h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;