// import React from "react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaEnvelope,
//   FaTwitter,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import QRCode from "react-qr-code";

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: FaGithub, href: "https://github.com/hesbonangwenyi606", label: "GitHub" },
//     { icon: FaEnvelope, href: "mailto:hesbonmanyinsa96@gmail.com", label: "Email" },
//     { icon: FaTwitter, href: "https://x.com/hesbon_angwenyi", label: "X (Twitter)" },
//     { icon: FaLinkedin, href: "https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/", label: "LinkedIn" },
//   ];

//   const quickLinks = [
//     { label: "Home", id: "home" },
//     { label: "About", id: "about" },
//     { label: "Skills", id: "skills" },
//     { label: "Experience", id: "experience" },
//     { label: "Projects", id: "projects" },
//     { label: "Contact", id: "contact" },
//   ];

//   const scrollToSection = (id: string) => {
//     if (id === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }
//     const section = document.getElementById(id);
//     if (!section) return;
//     const y = section.getBoundingClientRect().top + window.scrollY - 80;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-gray-900 text-white py-10 font-sans">
//       <div className="max-w-6xl mx-auto px-4 space-y-8">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
//           {/* Brand */}
//           <div className="flex flex-col items-center md:items-start">
//             <button
//               onClick={() => scrollToSection("home")}
//               aria-label="Back to top"
//               className="relative w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-3"
//             >
//               <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-yellow-300"></div>
//               <div className="absolute inset-[4px] rounded-full bg-gray-900 overflow-hidden flex items-center justify-center">
//                 <img
//                   src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
//                   alt="Hesbon Angwenyi Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </button>
//             <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs">
//               Full-Stack & DevOps Intern, passionate about creating web
//               applications and automating infrastructure.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//             <ul className="space-y-1.5">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="text-gray-300 focus:outline-none"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Services</h3>
//             <ul className="space-y-1.5 text-gray-300">
//               <li>Full-Stack Development</li>
//               <li>Basic Cloud Deployment</li>
//               <li>Web Development</li>
//               <li>Backend Development (Entry-Level)</li>
//             </ul>
//           </div>

//           {/* Location */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Location</h3>
//             <p className="flex items-center gap-2 text-gray-300">
//               <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//               <a
//                 href="https://www.google.com/maps/place/Nairobi,+Kenya"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-300"
//               >
//                 Nairobi, Kenya
//               </a>
//             </p>
//             <p className="flex items-center gap-2 text-gray-300">
//               <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//               <a
//                 href="tel:+254743573380"
//                 className="text-gray-300"
//               >
//                 +254 743 573 380
//               </a>
//             </p>
//             <p className="flex items-center gap-2 text-gray-300">
//               <FaEnvelope className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
//               <a
//                 href="mailto:hesbonmanyinsa96@gmail.com"
//                 className="text-gray-300"
//               >
//                 hesbonmanyinsa96@gmail.com
//               </a>
//             </p>
//           </div>

//           {/* QR Code */}
//           <div className="flex flex-col items-center md:items-end mt-1 md:mt-0">
//             <p className="font-semibold mb-3 text-center md:text-right">Scan to WhatsApp</p>
//             <QRCode
//               value="https://wa.me/254743573380"
//               size={145}
//               bgColor="#ffffff"
//               fgColor="#3e0f74ff"
//             />
//           </div>
//         </div>

//         {/* Social Icons */}
//         <div className="flex justify-center gap-6 mt-6 flex-wrap">
//           {socialLinks.map(({ icon: Icon, href, label }, i) => (
//             <a
//               key={i}
//               href={href}
//               aria-label={label}
//               title={label}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full relative overflow-hidden"
//             >
//               <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-yellow-400 to-yellow-300"></div>
//               <Icon className="relative w-6 h-6 md:w-7 md:h-7 text-black z-10" />
//             </a>
//           ))}
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-700 pt-4 text-center">
//           <p className="text-sm tracking-wider">
//             © {currentYear} Hesbon Angwenyi. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const backgroundImage = "https://i.postimg.cc/C1wfz0LX/back-footer.jpg"; 

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hesbonangwenyi606", label: "GitHub" },
    { icon: FaEnvelope, href: "mailto:hesbonmanyinsa96@gmail.com", label: "Email" },
    { icon: FaTwitter, href: "https://x.com/hesbon_angwenyi", label: "X (Twitter)" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/hesbon-angwenyi-58b9412b4/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;
    const y = section.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    // bg-[#f38d1e] matches the specific rich orange from your sample image
    <footer className="relative bg-[#f38d1e] text-white py-16 font-sans overflow-hidden">
      
      {/* 
          BACKGROUND IMAGE LAYER 
          - Zoom set to 170% as requested previously
          - blend-mode set to 'multiply' to allow the specific #f38d1e orange 
            to define the sky color perfectly.
      */}
      <div 
        className="absolute inset-0 z-0 opacity-100 mix-blend-multiply"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '170%', 
          backgroundPosition: 'center 85%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <button
              onClick={() => scrollToSection("home")}
              className="relative w-32 h-32 mb-4 hover:scale-105 transition-transform"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
              <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/50">
                <img
                  src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
                  alt="Hesbon Angwenyi Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </button>
            <p className="text-white font-bold leading-relaxed text-sm md:text-base max-w-xs [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
              Full-Stack & DevOps Intern, passionate about creating web
              applications and automating infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-extrabold mb-4 border-b-2 border-white/40 pb-2 inline-block [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-black transition-colors focus:outline-none font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-extrabold mb-4 border-b-2 border-white/40 pb-2 inline-block [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">Services</h3>
            <ul className="space-y-2 text-white font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">
              <li>Full-Stack Development</li>
              <li>Basic Cloud Deployment</li>
              <li>Web Development</li>
              <li>Backend Development</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-extrabold mb-4 border-b-2 border-white/40 pb-2 inline-block [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">Location</h3>
            <div className="space-y-3 font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-black/80" />
                  <span>Nairobi, Kenya</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-black/80" />
                  <a href="tel:+254743573380" className="hover:text-black transition-colors">
                    +254 743 573 380
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-black/80" />
                  <a href="mailto:hesbonmanyinsa96@gmail.com" className="hover:text-white transition-colors truncate">
                    hesbonmanyinsa96@gmail.com
                  </a>
                </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center md:items-end">
            <p className="font-extrabold mb-3 text-black">Scan to WhatsApp</p>
            <div className="bg-white p-2 rounded-xl shadow-2xl ring-4 ring-white/30">
                <QRCode
                  value="https://wa.me/254743573380"
                  size={120}
                  bgColor="#ffffff"
                  fgColor="#f38d1e" // Matches the new orange color
                />
            </div>
          </div>
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center gap-6 mt-12">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-[#f38d1e] hover:bg-black hover:text-white transition-all shadow-xl hover:-translate-y-1"
            >
              <Icon className="w-7 h-7" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 pt-8 text-center">
          <p className="text-xs font-black text-black/60 tracking-widest uppercase">
            © {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;