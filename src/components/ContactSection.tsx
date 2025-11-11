import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ef64095e-581b-4676-a94c-1d4767d6b375"); // Web3Forms key

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
        console.error("Error:", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side (Contact Info) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you need a full-stack developer, DevOps expertise, or technical consultation, 
              I'd love to hear from you.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <a 
                  href="mailto:hesbonmanyinsa96@email.com" 
                  className="text-blue-600 hover:underline"
                >
                  hesbonmanyinsa96@email.com
                </a>
              </div>

              {/* WhatsApp and Call */}
              <div className="space-y-2">
                {/* WhatsApp */}
                <div className="flex items-center space-x-4">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  <a 
                    href="https://wa.me/254743573380"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-green-500 hover:underline"
                  >
                    +254 743 573 380
                  </a>
                </div>

                {/* Call */}
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-blue-600 text-xl" />
                  <a 
                    href="tel:+254722514540"
                    className="text-blue-600 hover:underline"
                  >
                    +254 722 514 540 
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-blue-700 text-xl" />
                <a 
                  href="https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-700 hover:underline"
                >
                  linkedin.com/in/hesbon-angwenyi
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4">
                <FaGithub className="text-gray-800 text-xl" />
                <a 
                  href="https://github.com/hesbonangwenyi606" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-800 hover:underline"
                >
                  github.com/hesbonangwenyi606
                </a>
              </div>
            </div>
          </div>

          {/* Right Side (Form with Web3Forms) */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Example Hesbon"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="hes.@bonexample.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+254 7XX XXX XXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Inquiry about your services"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={`Hi Hesbon,

I am reaching out to discuss [your topic/project]. I would like to know more about [specific details]. Looking forward to your response.

Thank you!`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>

            {/* Submission Result */}
            <span className="block text-center text-gray-600 mt-4">{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
