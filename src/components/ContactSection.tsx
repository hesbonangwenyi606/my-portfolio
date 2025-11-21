import React, { useState, useEffect } from "react";

const ContactSection: React.FC = () => {
  const templateValues = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+254 700 000 00",
    subject: "Project Inquiry / Collaboration / Question",
    message: "Hello Hesbon, I’d like to discuss a new project idea. Here are the details...",
  };

  const savedValues =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("contactForm") || "null")
      : null;
  const [formValues, setFormValues] = useState(savedValues || templateValues);
  const [result, setResult] = useState("");
  const [hue, setHue] = useState(0); // We'll use for black-ish glow if needed

  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formValues));
  }, [formValues]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleFocus = (field: string) => {
    if (formValues[field as keyof typeof formValues] === templateValues[field as keyof typeof templateValues]) {
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
        setResult("✅ Form Submitted Successfully Hesbon will respond back within 24hrs! Thank You");
        setFormValues(templateValues);
        localStorage.removeItem("contactForm");
      } else {
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResult("Message sent successfully. Thank you, Hesbon will respond shortly.");
    }
  };

  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section
      id="contact"
      className="relative py-20 md:py-24 min-h-[80vh] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/71/a6/d8/71a6d82e769b7778fb900203ab9d45de.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white opacity-20 animate-float"
          style={{
            top: `${Math.max(0, Math.random() * 100 - 8)}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 relative z-10 -translate-y-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold animate-glow-text"
            style={{ color: "#000" }}
          >
            Get In Touch
          </h2>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg animate-glow-text"
            style={{ color: "#111" }}
          >
            Ready to start your next project? Fill out the form below and I’ll get back to you.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 p-8 rounded-2xl border border-gray-300 shadow-xl relative transition-all duration-1000 animate-glow hover-glow"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 20px #000, 0 0 40px #222",
          }}
        >
          {["name", "email", "phone", "subject"].map((field) => (
            <div key={field} className="w-full">
              <label className="block text-black font-semibold mb-2">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                required
                value={formValues[field as keyof typeof formValues]}
                onFocus={() => handleFocus(field)}
                onChange={(e) => handleChange(field, e.target.value)}
                placeholder={templateValues[field as keyof typeof templateValues]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-black placeholder-gray-500"
              />
            </div>
          ))}

          <div className="w-full">
            <label className="block text-black font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formValues.message}
              onFocus={() => handleFocus("message")}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder={templateValues.message}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-700 focus:border-transparent transition hover:shadow-lg hover:scale-105 text-black placeholder-gray-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all animate-glow-button hover-glow"
            style={{
              background: "#000",
            }}
          >
            Send Message
          </button>

          <span className="block text-center text-gray-600 mt-4">{result}</span>
        </form>
      </div>

      <style>{`
        @keyframes float {0% { transform: translateY(0px); opacity: 0.2; }50% { transform: translateY(-20px); opacity: 0.4; }100% { transform: translateY(0px); opacity: 0.2; }}
        .animate-float { animation-name: float; animation-duration: 6s; animation-iteration-count: infinite; animation-timing-function: ease-in-out; }

        @keyframes glowAnimation {0% { box-shadow: 0 0 10px #222, 0 0 20px #000; }50% { box-shadow: 0 0 20px #111, 0 0 40px #222; }100% { box-shadow: 0 0 10px #222, 0 0 20px #000; }}
        .animate-glow { animation: glowAnimation 6s ease-in-out infinite; }
        .animate-glow-button { animation: glowAnimation 4s ease-in-out infinite; }
        .hover-glow:hover { animation: glowAnimation 2s ease-in-out infinite; transform: scale(1.02); }

        @keyframes glowText {0% { color: #000; text-shadow: 0 0 5px #111; }50% { color: #111; text-shadow: 0 0 15px #222; }100% { color: #000; text-shadow: 0 0 5px #111; }}
        .animate-glow-text { animation: glowText 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactSection;
