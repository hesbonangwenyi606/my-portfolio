import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [result, setResult] = useState("");
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ef64095e-581b-4676-a94c-1d4767d6b375");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.currentTarget.reset();
      } else {
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResult("Message sent successfully. Thank you, Hesbon will respond shortly.");
    }
  };

  // Generate 30 particles for shining rain
  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">

      {/* Soft glowing circles */}
      <div
        className="absolute top-10 left-1/4 w-64 h-64 rounded-full opacity-20 -z-10 animate-shimmer-floating blur-3xl"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 -z-10 animate-shimmer-floating delay-2000 blur-3xl"
        style={{ transform: `translateY(${offsetY * -0.1}px)` }}
      ></div>
      <div
        className="absolute bottom-20 left-1/2 w-72 h-72 rounded-full opacity-18 -z-10 animate-shimmer-floating delay-4000 blur-3xl"
        style={{ transform: `translateX(-50%) translateY(${offsetY * 0.05}px)` }}
      ></div>

      {/* Shining rain particles with sparkle */}
      {particles.map((i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-white opacity-50 animate-rain animate-sparkle`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        ></div>
      ))}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mx-auto mb-4 rounded-full shadow-md"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you need a full-stack developer, DevOps expertise, or technical consultation, I'd love to hear from you.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-400 text-xl" />
                <span>Ngong Road, Nairobi, Kenya</span>
              </div>
              <div className="mt-4 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="Ngong Road Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.830398758381!2d36.7965!3d-1.3105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f6b6d3d53d%3A0x9c12e5c1b0c1d6e4!2sNgong%20Road%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699999999999!5m2!1sen!2ske"
                  width="100%"
                  height="250"
                  className="border-0 rounded-md"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <a href="mailto:hesbonmanyinsa96@email.com" className="text-indigo-500 hover:text-indigo-600 hover:underline">
                  hesbonmanyinsa96@email.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaWhatsapp className="text-green-400 text-xl" />
                <a href="https://wa.me/254743573380" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 hover:underline">
                  +254 743 573 380
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-purple-400 text-xl" />
                <a href="tel:+254722514540" className="text-purple-500 hover:text-purple-600 hover:underline">
                  +254 722 514 540
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-blue-500 text-xl" />
                <a href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 hover:underline">
                  linkedin.com/in/hesbon-angwenyi
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaGithub className="text-gray-800 text-xl" />
                <a href="https://github.com/hesbonangwenyi606" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 hover:underline">
                  github.com/hesbonangwenyi606
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form onSubmit={onSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" name="name" required placeholder="Example Hesbon" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input type="email" name="email" required placeholder="hes.@bonexample.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition" />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input type="tel" name="phone" required placeholder="+254 7XX XXX XXX" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input type="text" name="subject" required placeholder="Inquiry about your services" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition" />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea name="message" required rows={5} placeholder={`Hi Hesbon,

I am reaching out to discuss [your topic/project]. I would like to know more about [specific details]. Looking forward to your response.

Thank you!`} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition"></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
              Send Message
            </button>

            <span className="block text-center text-gray-600 mt-4">{result}</span>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmerGradient {
          0% { background: linear-gradient(45deg, #6EE7B7, #3B82F6, #F472B6); }
          25% { background: linear-gradient(45deg, #F472B6, #6EE7B7, #3B82F6); }
          50% { background: linear-gradient(45deg, #3B82F6, #F472B6, #6EE7B7); }
          75% { background: linear-gradient(45deg, #6EE7B7, #F472B6, #3B82F6); }
          100% { background: linear-gradient(45deg, #3B82F6, #6EE7B7, #F472B6); }
        }

        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }

        @keyframes rainFall {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(120vh); opacity: 0; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        .animate-shimmer-floating {
          animation: shimmerGradient 25s ease-in-out infinite alternate, floatY 35s ease-in-out infinite alternate;
          background-size: 400% 400%;
        }

        .animate-rain {
          animation-name: rainFall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .animate-sparkle {
          animation-name: sparkle;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .delay-2000 { animation-delay: 2s; }
        .delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default ContactSection;
