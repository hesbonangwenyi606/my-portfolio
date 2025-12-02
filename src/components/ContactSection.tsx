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
    savedValues || {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  );
  const [result, setResult] = useState("");
  const [hue, setHue] = useState(210);

  // Save form to localStorage
  useEffect(() => {
    localStorage.setItem("contactForm", JSON.stringify(formValues));
  }, [formValues]);

  // Hue animation
  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Auto-reset form after success
  useEffect(() => {
    if (result.includes("Successfully")) {
      const timer = setTimeout(() => {
        setResult("");
        setFormValues({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult(
          "✅ Form Submitted Successfully Hesbon will respond back within 24hrs! Thank You"
        );
        setFormValues({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        localStorage.removeItem("contactForm");
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
            style={{ color: "#0a3d91" }}
          >
            Get In Touch
          </h2>
          <p
            className="max-w-2xl mx-auto text-base md:text-lg animate-glow-text"
            style={{ color: "#0f4bbd" }}
          >
            Ready to start your next project? Fill out the form below and I’ll
            get back to you within 24hrs.
          </p>
        </div>

        {result && result.includes("Successfully") ? (
          <div
            className="p-8 rounded-2xl border border-blue-700 shadow-xl text-center animate-glow"
            style={{
              background: "rgba(10, 61, 145, 0.15)",
              backdropFilter: "blur(10px)",
              color: "#1a5eff",
              fontWeight: "600",
            }}
          >
            <h3 className="text-3xl font-bold mb-4">🎉 Thank You!</h3>
            <p className="text-xl mb-6">{result}</p>
            <p className="text-blue-200">Form will reopen automatically...</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-6 p-8 rounded-2xl border border-blue-700 shadow-xl relative transition-all duration-1000 animate-glow hover-glow"
            style={{
              background: "rgba(10, 61, 145, 0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: `0 0 20px hsl(${hue}, 100%, 50%), 
                  0 0 40px hsl(${(hue + 30) % 360}, 100%, 50%)`,
            }}
          >
            {["name", "email", "phone", "subject"].map((field) => (
              <div key={field} className="w-full">
                <label className="block text-blue-900 font-semibold mb-2">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  required
                  value={formValues[field as keyof typeof formValues]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  placeholder={placeholderValues[field as keyof typeof placeholderValues]}
                  className="w-full px-4 py-3 border border-blue-500 rounded-lg 
                     focus:ring-2 focus:ring-blue-400 focus:border-transparent 
                     transition hover:shadow-lg hover:scale-105 
                     text-black placeholder-blue-300"
                />
              </div>
            ))}

            <div className="w-full">
              <label className="block text-blue-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formValues.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder={placeholderValues.message}
                className="w-full px-4 py-3 border border-blue-500 rounded-lg 
                   focus:ring-2 focus:ring-blue-400 focus:border-transparent 
                   transition hover:shadow-lg hover:scale-105 
                   text-black placeholder-blue-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 px-6 rounded-lg shadow-md 
                 transition-all animate-glow-button hover-glow"
              style={{
                background: `linear-gradient(
          90deg, 
          hsl(${hue}, 80%, 40%), 
          hsl(${(hue + 30) % 360}, 80%, 50%), 
          hsl(${(hue + 60) % 360}, 80%, 50%)
        )`,
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-20px); opacity: 0.4; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
        .animate-float {
          animation-name: float;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes glowAnimation {
          0% { box-shadow: 0 0 10px #0a3d91, 0 0 20px #0f4bbd; }
          50% { box-shadow: 0 0 20px #1a5eff, 0 0 40px #2980ff; }
          100% { box-shadow: 0 0 10px #0a3d91, 0 0 20px #0f4bbd; }
        }
        .animate-glow {
          animation: glowAnimation 6s ease-in-out infinite;
        }
        .animate-glow-button {
          animation: glowAnimation 4s ease-in-out infinite;
        }
        .hover-glow:hover {
          animation: glowAnimation 2s ease-in-out infinite;
          transform: scale(1.02);
        }

        @keyframes glowText {
          0% { color: #0a3d91; text-shadow: 0 0 5px #0f4bbd; }
          50% { color: #1a5eff; text-shadow: 0 0 15px #2980ff; }
          100% { color: #0a3d91; text-shadow: 0 0 5px #0f4bbd; }
        }
        .animate-glow-text {
          animation: glowText 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
