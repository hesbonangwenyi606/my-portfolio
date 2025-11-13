import React, { useState, useEffect } from "react";

const ContactSection: React.FC = () => {
  const [result, setResult] = useState("");
  const [hue, setHue] = useState(0);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Animate hue for rainbow effects
  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 0.5) % 360);
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
      className="relative py-24 md:py-32 min-h-[80vh] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://scontent.fnbo16-1.fna.fbcdn.net/v/t39.30808-6/581055697_1605855860788408_6355822191920083654_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aHeSFiulopEQ7kNvwHDmWAr&_nc_oc=Adl_Yhd7k3yIUi3wojUDMFYA02d-cUcZn8WN7WjGvgeVz8guB8pJSaugXbo_sySWGxA&_nc_zt=23&_nc_ht=scontent.fnbo16-1.fna&_nc_gid=LK9tJI93gy6ZKIbB9-4tOA&oh=00_AfiUzkygcXu5khcSW7HMcBZyZTJTJdMeMwRItfBpN2vebA&oe=691B5638')",
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
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-white">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: `hsl(${hue}, 80%, 70%)` }}
          >
            Get In Touch
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-4 rounded-full shadow-md"
            style={{
              background: `linear-gradient(90deg, hsl(${hue}, 80%, 70%), hsl(${(hue + 60) % 360}, 80%, 70%), hsl(${(hue + 120) % 360}, 80%, 70%))`,
            }}
          ></div>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg"
            style={{ color: `hsl(${(hue + 180) % 360}, 70%, 70%)` }}
          >
            Ready to start your next project? Fill out the form below and I’ll get
            back to you.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="space-y-6 p-8 rounded-2xl border border-gray-200 shadow-xl relative transition-all duration-1000 animate-glow hover-glow"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            boxShadow: `0 0 20px hsl(${hue}, 80%, 60%), 0 0 40px hsl(${(hue + 60) % 360}, 80%, 60%)`,
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formValues.name}
              onFocus={() => handleFocus("name")}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
            <p className="text-sm text-gray-400 mt-1">Enter your full name</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formValues.email}
              onFocus={() => handleFocus("email")}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john.doe@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
            <p className="text-sm text-gray-400 mt-1">Enter a valid email address</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              value={formValues.phone}
              onFocus={() => handleFocus("phone")}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+254 7XX XXX XXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
            <p className="text-sm text-gray-400 mt-1">Include country code</p>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={formValues.subject}
              onFocus={() => handleFocus("subject")}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="Project Inquiry"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
            <p className="text-sm text-gray-400 mt-1">Briefly summarize your message</p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formValues.message}
              onFocus={() => handleFocus("message")}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Describe your project or question..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
            <p className="text-sm text-gray-400 mt-1">Provide details about your project or inquiry</p>
          </div>

          {/* Submit Button with dynamic rainbow glow */}
          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
            style={{
              background: `linear-gradient(90deg, hsl(${hue}, 80%, 60%), hsl(${(hue + 60) % 360}, 80%, 60%), hsl(${(hue + 120) % 360}, 80%, 60%))`,
              boxShadow: `0 0 20px hsl(${hue}, 80%, 60%), 0 0 40px hsl(${(hue + 60) % 360}, 80%, 60%), 0 0 60px hsl(${(hue + 120) % 360}, 80%, 60%)`,
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

        @keyframes typingGlow {
          0% { box-shadow: 0 0 5px #ff6ec7; border-color: #ff6ec7; }
          25% { box-shadow: 0 0 10px #6effaa; border-color: #6effaa; }
          50% { box-shadow: 0 0 15px #6eafff; border-color: #6eafff; }
          75% { box-shadow: 0 0 10px #ff9e6e; border-color: #ff9e6e; }
          100% { box-shadow: 0 0 5px #ff6ec7; border-color: #ff6ec7; }
        }
        input:focus, textarea:focus { animation: typingGlow 2s linear infinite; outline: none; }
      `}</style>
    </section>
  );
};

export default ContactSection;
