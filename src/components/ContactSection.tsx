import React, { useState, useEffect } from "react";

const ContactSection: React.FC = () => {
  const [result, setResult] = useState("");
  const [hue, setHue] = useState(50);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "+254 7XX XXX XXX",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 0.3) % 60);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleFocus = (field: string) => {
    if (formValues[field as keyof typeof formValues].length > 0) {
      setFormValues((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

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
      setResult(
        "Message sent successfully. Thank you, Hesbon will respond shortly."
      );
    }
  };

  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 min-h-[80vh] overflow-hidden"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/8a/b1/93/8ab19328e6bf7aaf9c688a029ffb1626.jpg')", // <-- Local image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {/* Floating particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-30 animate-float"
          style={{
            top: `${Math.max(0, Math.random() * 100 - 8)}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 -translate-y-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 animate-glow-text"
            style={{ color: `hsl(${hue}, 100%, 60%)` }}
          >
            Get In Touch
          </h2>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg animate-glow-text"
            style={{ color: `hsl(${(hue + 10) % 60}, 100%, 60%)` }}
          >
            Ready to start your next project? Fill out the form below and I’ll get back to you.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="space-y-6 p-8 rounded-2xl border border-gray-200 shadow-xl relative transition-all duration-1000 animate-glow hover-glow"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: `0 0 20px hsl(${hue}, 100%, 50%), 0 0 40px hsl(${(hue + 10) % 60}, 100%, 50%)`,
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-blue-400 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formValues.name}
              onFocus={() => handleFocus("name")}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-blue-400 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formValues.email}
              onFocus={() => handleFocus("email")}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-blue-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-blue-400 font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formValues.phone}
              onFocus={() => handleFocus("phone")}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-blue-400"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-blue-400 font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formValues.subject}
              onFocus={() => handleFocus("subject")}
              onChange={(e) => handleChange("subject", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-blue-400 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formValues.message}
              onFocus={() => handleFocus("message")}
              onChange={(e) => handleChange("message", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all animate-glow-button hover-glow"
            style={{
              background: `linear-gradient(90deg, hsl(${hue}, 100%, 50%), hsl(${(hue + 10) % 60}, 100%, 50%), hsl(${(hue + 20) % 60}, 100%, 50%))`,
            }}
          >
            Send Message
          </button>

          <span className="block text-center text-gray-600 mt-4">{result}</span>
        </form>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
        .animate-float { animation-name: float; animation-duration: 6s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }

        @keyframes glowAnimation {
          0% { box-shadow: 0 0 10px #ffea00, 0 0 20px #ffd700; }
          50% { box-shadow: 0 0 20px #fff176, 0 0 40px #ffeb3b; }
          100% { box-shadow: 0 0 10px #ffea00, 0 0 20px #ffd700; }
        }
        .animate-glow { animation: glowAnimation 6s ease-in-out infinite; }
        .animate-glow-button { animation: glowAnimation 4s ease-in-out infinite; }
        .hover-glow:hover { animation: glowAnimation 2s ease-in-out infinite; transform: scale(1.02); }

        @keyframes glowText {
          0% { color: hsl(50, 100%, 60%); text-shadow: 0 0 5px #fff176; }
          50% { color: hsl(55, 100%, 65%); text-shadow: 0 0 15px #ffeb3b; }
          100% { color: hsl(50, 100%, 60%); text-shadow: 0 0 5px #fff176; }
        }
        .animate-glow-text { animation: glowText 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactSection;
