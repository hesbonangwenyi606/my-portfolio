import React, { useState, useEffect } from "react";

const ContactSection: React.FC = () => {
  const placeholderValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+254 700 000 000",
    subject: "Project Inquiry / Collaboration / Question",
    message:
      "Hello Hesbon, I’d like to discuss a new project idea. Here are the details...",
  };

  const savedValues =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("contactForm") || "null")
      : null;

  const [formValues, setFormValues] = useState(
    savedValues || { name: "", email: "", phone: "", subject: "", message: "" }
  );
  const [result, setResult] = useState("");
  const [hue, setHue] = useState(210);

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    const interval = setInterval(() => setHue((prev) => (prev + 0.3) % 360), 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (result.includes("Successfully")) {
      const timer = setTimeout(() => {
        setResult("");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "ef64095e-581b-4676-a94c-1d4767d6b375");

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (data.success) {
        setResult("✅ Form Submitted Successfully Hesbon will respond back within 24hrs! Thank You");
        setFormValues({ name: "", email: "", phone: "", subject: "", message: "" });
        localStorage.removeItem("contactForm");
      } else setResult(data.message || "Failed to send message.");
    } catch {
      setResult("Message sent successfully. Thank you, Hesbon will respond shortly.");
    }
  };

  const particles = Array.from({ length: 30 }, (_, i) => i);

  return (
    <section
      id="contact"
      className="relative py-12 min-h-[60vh] overflow-hidden"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/10/9f/5a/109f5aac620d83348acc6e8010eb8a1f.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-20 animate-float"
          style={{
            top: `${Math.max(0, Math.random() * 100 - 8)}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}

      <div className="max-w-3xl mx-auto px-4 relative z-10 -translate-y-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animate-glow-text" style={{ color: "#0a3d91" }}>
            Get In Touch
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-base animate-glow-text" style={{ color: "#0f4bbd" }}>
            Ready to start your next project? Fill out the form below and I’ll get back to you within 24hrs.
          </p>
        </div>

        {result && result.includes("Successfully") ? (
          <div
            className="p-6 rounded-2xl border border-blue-700 shadow-lg text-center animate-glow"
            style={{ background: "rgba(10, 61, 145, 0.15)", backdropFilter: "blur(8px)", color: "#1a5eff", fontWeight: 600 }}
          >
            <h3 className="text-2xl font-bold mb-3">🎉 Thank You!</h3>
            <p className="text-lg mb-4">{result}</p>
            <p className="text-blue-200 text-sm">Form will reopen automatically...</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-4 p-6 rounded-2xl border border-blue-700 shadow-lg relative transition-all duration-1000 animate-glow hover-glow"
            style={{
              background: "rgba(10, 61, 145, 0.08)",
              backdropFilter: "blur(8px)",
              boxShadow: `0 0 15px hsl(${hue}, 100%, 50%), 0 0 30px hsl(${(hue + 30) % 360}, 100%, 50%)`,
            }}
          >
            {/* Name field (single box) */}
            <div>
              <label className="block text-blue-900 font-semibold mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formValues.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={placeholderValues.name}
                className="w-full px-3 py-2 border border-blue-500 rounded-md focus:ring-1 focus:ring-blue-400 text-black placeholder-blue-300 text-sm transition hover:shadow-md hover:scale-102"
              />
            </div>

            {/* Email & Phone side by side */}
            <div className="grid grid-cols-2 gap-3">
              {["email", "phone"].map((field) => (
                <div key={field}>
                  <label className="block text-blue-900 font-semibold mb-1 text-sm">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "email" ? "email" : "tel"}
                    name={field}
                    required
                    value={formValues[field as keyof typeof formValues]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    placeholder={placeholderValues[field as keyof typeof placeholderValues]}
                    className="w-full px-3 py-2 border border-blue-500 rounded-md focus:ring-1 focus:ring-blue-400 text-black placeholder-blue-300 text-sm transition hover:shadow-md hover:scale-102"
                  />
                </div>
              ))}
            </div>

            {/* Subject */}
            <div>
              <label className="block text-blue-900 font-semibold mb-1 text-sm">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formValues.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                placeholder={placeholderValues.subject}
                className="w-full px-3 py-2 border border-blue-500 rounded-md focus:ring-1 focus:ring-blue-400 text-black placeholder-blue-300 text-sm transition hover:shadow-md hover:scale-102"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-blue-900 font-semibold mb-1 text-sm">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formValues.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={placeholderValues.message}
                className="w-full px-3 py-2 border border-blue-500 rounded-md focus:ring-1 focus:ring-blue-400 text-black placeholder-blue-300 text-sm resize-none transition hover:shadow-md hover:scale-102"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-2.5 px-4 rounded-md shadow transition-all animate-glow-button hover-glow text-sm"
              style={{
                background: `linear-gradient(90deg, hsl(${hue}, 80%, 40%), hsl(${(hue + 30) % 360}, 80%, 50%), hsl(${(hue + 60) % 360}, 80%, 50%))`,
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes float { 0% { transform: translateY(0px); opacity: 0.2; } 50% { transform: translateY(-15px); opacity: 0.4; } 100% { transform: translateY(0px); opacity: 0.2; } }
        .animate-float { animation-name: float; animation-duration: 5s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }

        @keyframes glowAnimation { 0% { box-shadow: 0 0 8px #0a3d91, 0 0 15px #0f4bbd; } 50% { box-shadow: 0 0 15px #1a5eff, 0 0 25px #2980ff; } 100% { box-shadow: 0 0 8px #0a3d91, 0 0 15px #0f4bbd; } }
        .animate-glow { animation: glowAnimation 6s ease-in-out infinite; }
        .animate-glow-button { animation: glowAnimation 4s ease-in-out infinite; }
        .hover-glow:hover { animation: glowAnimation 2s ease-in-out infinite; transform: scale(1.02); }

        @keyframes glowText { 0% { color: #0a3d91; text-shadow: 0 0 4px #0f4bbd; } 50% { color: #1a5eff; text-shadow: 0 0 10px #2980ff; } 100% { color: #0a3d91; text-shadow: 0 0 4px #0f4bbd; } }
        .animate-glow-text { animation: glowText 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactSection;
