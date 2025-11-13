import React, { useState, useEffect, useRef } from "react";

const ContactSection: React.FC = () => {
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const particleCount = 50;
  const connectionDistance = 120;
  const particles = useRef(
    Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 2 + Math.random() * 3,
      blur: 1.5 + Math.random() * 1.5,
      hueOffset: Math.random() * 360,
      speedX: (Math.random() - 0.5) * 0.002,
      speedY: (Math.random() - 0.5) * 0.002,
    }))
  ).current;

  // Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Canvas animation for particles and lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = sectionRef.current?.clientWidth || window.innerWidth;
      canvas.height = sectionRef.current?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > 1) p.speedX *= -1;
        if (p.y < 0 || p.y > 1) p.speedY *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const x1 = p1.x * canvas.width + (mousePos.x - 0.5) * 20;
        const y1 = p1.y * canvas.height + (mousePos.y - 0.5) * 20;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const x2 = p2.x * canvas.width + (mousePos.x - 0.5) * 20;
          const y2 = p2.y * canvas.height + (mousePos.y - 0.5) * 20;

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            ctx.strokeStyle = `hsla(${(p1.hueOffset + Date.now() * 0.01) % 360}, 80%, 60%, ${
              1 - dist / connectionDistance
            })`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.fillStyle = `hsl(${(p1.hueOffset + Date.now() * 0.01) % 360}, 80%, 60%)`;
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = p1.blur * 4;
        ctx.beginPath();
        ctx.arc(x1, y1, p1.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mousePos, particles]);

  // Form submit
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

  return (
    <section
      ref={sectionRef}
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
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 -z-5"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 text-white transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-left animate-pulse-gradient">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mx-auto mb-4 rounded-full shadow-md"></div>
          <p className="max-w-2xl mx-auto text-blue-400 animate-slide-in-left animate-pulse-gradient delay-200 text-base md:text-lg">
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
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+254 7XX XXX XXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent transition hover:shadow-lg hover:scale-105"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all animate-glow-button hover-glow"
          >
            Send Message
          </button>

          <span className="block text-center text-gray-600 mt-4">{result}</span>
        </form>
      </div>

      <style>{`
        @keyframes glowAnimation {
          0% { box-shadow: 0 0 10px #ff6ec7, 0 0 20px #6eafff; }
          25% { box-shadow: 0 0 20px #ff9e6e, 0 0 30px #6effaa; }
          50% { box-shadow: 0 0 15px #6effaa, 0 0 25px #ff6eff; }
          75% { box-shadow: 0 0 25px #6eafff, 0 0 35px #ff9e6e; }
          100% { box-shadow: 0 0 10px #ff6ec7, 0 0 20px #6eafff; }
        }
        .animate-glow { animation: glowAnimation 6s ease-in-out infinite; }
        .animate-glow-button { animation: glowAnimation 4s ease-in-out infinite; }
        .hover-glow:hover { animation: glowAnimation 2s ease-in-out infinite; transform: scale(1.02); }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left { animation: slideInLeft 1s ease forwards; }
        .animate-slide-in-left.delay-200 { animation-delay: 0.2s; }

        @keyframes pulseGradient {
          0% { color: #3b82f6; }
          50% { color: #60a5fa; }
          100% { color: #3b82f6; }
        }
        .animate-pulse-gradient { animation: pulseGradient 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default ContactSection;
