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
//   const backgroundImage = "https://i.postimg.cc/C1wfz0LX/back-footer.jpg"; 

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
//     <footer className="relative bg-[#f38d1e] text-white py-10 font-sans overflow-hidden">
      
//       {/* BACKGROUND IMAGE LAYER */}
//       <div 
//         className="absolute inset-0 z-0 opacity-100 mix-blend-multiply"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       ></div>

//       {/* Increased max-width to 7xl to give columns more horizontal space */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 space-y-8">
//         {/* Reduced gap to gap-4 to prevent text wrapping */}
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left items-start">
          
//           {/* Column 1: Brand/Logo */}
//           <div className="flex flex-col items-center md:items-start">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="relative w-20 h-20 mb-3 hover:scale-105 transition-transform"
//             >
//               <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
//               <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/50">
//                 <img
//                   src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
//                   alt="Hesbon Angwenyi Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </button>
//             <p className="text-white font-bold leading-tight text-xs max-w-[180px] [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
//               Full-Stack & DevOps Intern, passionate about web apps.
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-md font-extrabold mb-3 border-b-2 border-white/40 pb-1 inline-block [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">Quick Links</h3>
//             <ul className="space-y-1">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="text-white hover:text-black text-sm transition-colors font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Services */}
//           <div>
//             <h3 className="text-md font-extrabold mb-3 border-b-2 border-white/40 pb-1 inline-block [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">Services</h3>
//             <ul className="space-y-1 text-sm text-white font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">
//               <li>Full-Stack Dev</li>
//               <li>Cloud Deployment</li>
//               <li>Web Development</li>
//               <li>Backend Systems</li>
//             </ul>
//           </div>

//           {/* Column 4: Location - FORCED SINGLE LINE */}
//           <div className="md:col-span-1">
//             <h3 className="text-md font-extrabold mb-3 border-b-2 border-white/40 pb-1 inline-block [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]">Location</h3>
//             <div className="space-y-3 text-sm font-bold [text-shadow:_0_1px_2px_rgb(0_0_0_/_30%)]">
//                 <p className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
//                   <FaMapMarkerAlt className="text-black/80 shrink-0" />
//                   <span>Nairobi, Kenya</span>
//                 </p>
//                 <p className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
//                   <FaPhoneAlt className="text-black/80 shrink-0" />
//                   <a href="tel:+254743573380" className="hover:text-black transition-colors">
//                     +254 743 573 380
//                   </a>
//                 </p>
//                 <p className="flex items-center justify-center md:justify-start gap-2">
//                   <FaEnvelope className="text-black/80 shrink-0" />
//                   {/* whitespace-nowrap and slightly smaller text ensures one line */}
//                   <a 
//                     href="mailto:hesbonmanyinsa96@gmail.com" 
//                     className="hover:text-black transition-colors whitespace-nowrap text-[12px] lg:text-sm"
//                   >
//                     hesbonmanyinsa96@gmail.com
//                   </a>
//                 </p>
//             </div>
//           </div>

//           {/* Column 5: QR Code */}
//           <div className="flex flex-col items-center md:items-end">
//             <p className="font-extrabold text-xs mb-2 text-black whitespace-nowrap">Scan to WhatsApp</p>
//             <div className="bg-white p-1.5 rounded-xl shadow-2xl ring-4 ring-white/30">
//                 <QRCode
//                   value="https://wa.me/254743573380"
//                   size={80} 
//                   bgColor="#ffffff"
//                   fgColor="#f38d1e" 
//                 />
//             </div>
//           </div>
//         </div>

//         {/* Social Icons Row */}
//         <div className="flex justify-center gap-5 pt-2">
//           {socialLinks.map(({ icon: Icon, href, label }, i) => (
//             <a
//               key={i}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={label}
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white transition-all shadow-xl"
//             >
//               <Icon className="w-5 h-5" />
//             </a>
//           ))}
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-white/20 pt-4 text-center">
//           <p className="text-[10px] font-black text-white tracking-widest uppercase">
//             © {currentYear} Hesbon Angwenyi. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



















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
// import { motion } from "framer-motion"; // Import Framer Motion

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();
//   const backgroundImage = "https://i.pinimg.com/736x/ef/76/7f/ef767fe63fb05594484651217b98a0aa.jpg";

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

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1, // Elements appear one after another
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

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
//     <footer className="relative bg-[#f38d1e] text-white py-10 font-sans overflow-hidden">
//       {/* BACKGROUND IMAGE LAYER with subtle zoom animation */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute inset-0 z-0 opacity-100 mix-blend-multiply"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       ></motion.div>

//       {/* Main Content Area */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-4 space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible" // Triggers animation when scrolled into view
//         viewport={{ once: true }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center md:text-left items-start">
          
//           {/* Column 1: Brand/Logo */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="relative w-20 h-20 mb-3 hover:scale-110 transition-transform active:scale-95"
//             >
//               <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
//               <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/50">
//                 <img
//                   src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
//                   alt="Hesbon Angwenyi Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </button>
//             <p className="text-white font-bold leading-tight text-xs max-w-[180px] [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)]">
//               Full-Stack & DevOps Intern, passionate about web apps.
//             </p>
//           </motion.div>

//           {/* Column 2: Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-extrabold mb-3 border-b-2 border-white/40 pb-1 inline-block">Quick Links</h3>
//             <ul className="space-y-1">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="text-white hover:text-black hover:translate-x-1 transition-all text-sm font-bold"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Column 3: Services */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-extrabold mb-3 border-b-2 border-white/40 pb-1 inline-block">Services</h3>
//             <ul className="space-y-1 text-sm font-bold">
//               <li className="hover:text-black transition-colors">Full-Stack Development</li>
//               <li className="hover:text-black transition-colors">Cloud Deployment</li>
//               <li className="hover:text-black transition-colors">Web Development</li>
//               <li className="hover:text-black transition-colors">Backend Development</li>
//               <li className="hover:text-black transition-colors">CRM Development & Integration</li>
//             </ul>
//           </motion.div>

//           {/* Column 4: Location */}
//           <motion.div variants={itemVariants} className="md:col-span-1">
//             <h3 className="text-md font-extrabold mb-3 border-b-2 border-white/40 pb-1 inline-block">Location</h3>
//             <div className="space-y-3 text-sm font-bold">
//               <p className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
//                 <FaMapMarkerAlt className="text-black/80 shrink-0" />
//                 <span>Nairobi, Kenya</span>
//               </p>
//               <p className="flex items-center justify-center md:justify-start gap-2 whitespace-nowrap">
//                 <FaPhoneAlt className="text-black/80 shrink-0" />
//                 <a href="tel:+254743573380" className="hover:text-black transition-colors">+254 743 573 380</a>
//               </p>
//               <p className="flex items-center justify-center md:justify-start gap-2">
//                 <FaEnvelope className="text-black/80 shrink-0" />
//                 <a href="mailto:hesbonmanyinsa96@gmail.com" className="hover:text-black transition-colors whitespace-nowrap text-[12px] lg:text-sm">
//                   hesbonmanyinsa96@gmail.com
//                 </a>
//               </p>
//             </div>
//           </motion.div>

//           {/* Column 5: QR Code with Pulse animation */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
//             <p className="font-extrabold text-xs mb-2 text-black whitespace-nowrap">Scan to WhatsApp</p>
//             <motion.div 
//               animate={{ scale: [1, 1.05, 1] }} 
//               transition={{ repeat: Infinity, duration: 3 }}
//               className="bg-white p-1.5 rounded-xl shadow-2xl ring-4 ring-white/30"
//             >
//               <QRCode value="https://wa.me/254743573380" size={100} bgColor="#ffffff" fgColor="#f38d1e" />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Social Icons Row with Hover effects */}
//         <motion.div variants={itemVariants} className="flex justify-center gap-5 pt-2">
//           {socialLinks.map(({ icon: Icon, href, label }, i) => (
//             <motion.a
//               key={i}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.1, backgroundColor: "#000", color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black transition-all shadow-xl"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Copyright Section */}
//         <motion.div variants={itemVariants} className="border-t border-white/20 pt-4 text-center">
//           <p className="text-[10px] font-black text-white tracking-widest uppercase">
//             © {currentYear} Hesbon Angwenyi. All rights reserved.
//           </p>
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;













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
// import { motion } from "framer-motion";

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();
//   const backgroundImage =
//     "https://i.pinimg.com/736x/ef/76/7f/ef767fe63fb05594484651217b98a0aa.jpg";

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

//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const scrollToSection = (id: string) => {
//     if (id === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     const section = document.getElementById(id);
//     if (!section) return;

//     const yOffset = -80;
//     const y =
//       section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-[#0f172a] text-white py-10 font-sans overflow-hidden">
//       {/* Background Image + Dark Overlay */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute inset-0 z-0"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </motion.div>

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-4 space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left items-start">
          
//           {/* Brand */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="relative w-20 h-20 mb-3 hover:scale-110 transition-transform active:scale-95"
//             >
//               <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
//               <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/40">
//                 <img
//                   src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
//                   alt="Hesbon Angwenyi Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </button>
//             <p className="text-sm font-semibold max-w-[200px] text-gray-200">
//               Full-Stack & DevOps Intern passionate about building scalable web applications.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="hover:text-gray-300 transition-all"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Services
//             </h3>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Full-Stack Development</li>
//               <li>Cloud Deployment</li>
//               <li>Web Development</li>
//               <li>Backend Development</li>
//               <li>CRM Development & Integration</li>
//             </ul>
//           </motion.div>

//           {/* Location */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Location
//             </h3>
//             <div className="space-y-3 text-sm text-gray-200">
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaMapMarkerAlt className="text-gray-300" />
//                 Nairobi, Kenya
//               </p>
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaPhoneAlt className="text-gray-300" />
//                 <a href="tel:+254743573380" className="hover:text-white">
//                   +254 743 573 380
//                 </a>
//               </p>
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaEnvelope className="text-gray-300" />
//                 <a href="mailto:hesbonmanyinsa96@gmail.com" className="hover:text-white">
//                   hesbonmanyinsa96@gmail.com
//                 </a>
//               </p>
//             </div>
//           </motion.div>

//           {/* QR Code */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
//             <p className="font-semibold text-sm mb-2 text-gray-200">
//               Scan to WhatsApp
//             </p>
//             <motion.div
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ repeat: Infinity, duration: 3 }}
//               className="bg-white p-2 rounded-xl shadow-xl"
//             >
//               <QRCode
//                 value="https://wa.me/254743573380"
//                 size={100}
//                 bgColor="#ffffff"
//                 fgColor="#0f172a"
//               />
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Social Icons */}
//         <motion.div variants={itemVariants} className="flex justify-center gap-5 pt-4">
//           {socialLinks.map(({ icon: Icon, href, label }, i) => (
//             <motion.a
//               key={i}
//               href={href}
//               aria-label={label}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0f172a] shadow-md hover:bg-gray-200 transition-all"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Copyright */}
//         <motion.div variants={itemVariants} className="border-t border-white/20 pt-4 text-center">
//           <p className="text-xs text-gray-300 tracking-wide">
//             © {currentYear} Hesbon Angwenyi. All rights reserved.
//           </p>
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;








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
// import { motion } from "framer-motion";

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();
//   const backgroundImage =
//     "https://i.pinimg.com/736x/ef/76/7f/ef767fe63fb05594484651217b98a0aa.jpg";

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

//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const scrollToSection = (id: string) => {
//     if (id === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     const section = document.getElementById(id);
//     if (!section) return;

//     const yOffset = -80;
//     const y =
//       section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-[#0f172a] text-white py-10 font-sans overflow-hidden">
      
//       {/* Background Image + Dark Overlay */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute inset-0 z-0"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </motion.div>

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-4 space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left items-start">

//           {/* Brand */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="relative w-20 h-20 mb-3 hover:scale-110 transition-transform active:scale-95"
//             >
//               <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
//               <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/40">
//                 <img
//                   src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
//                   alt="Hesbon Angwenyi Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </button>
//             <p className="text-sm font-semibold max-w-[200px] text-gray-200">
//               Full-Stack & DevOps Intern passionate about building scalable web applications.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="hover:text-gray-300 transition-all"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Services
//             </h3>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Full-Stack Development</li>
//               <li>Cloud Deployment</li>
//               <li>Web Development</li>
//               <li>Backend Development</li>
//               <li>CRM Development & Integration</li>
//             </ul>
//           </motion.div>

//           {/* Location */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Location
//             </h3>
//             <div className="space-y-3 text-sm text-gray-200">
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaMapMarkerAlt className="text-gray-300" />
//                 Nairobi, Kenya
//               </p>
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaPhoneAlt className="text-gray-300" />
//                 <a href="tel:+254743573380" className="hover:text-white">
//                   +254 743 573 380
//                 </a>
//               </p>
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaEnvelope className="text-gray-300" />
//                 <a href="mailto:hesbonmanyinsa96@gmail.com" className="hover:text-white">
//                   hesbonmanyinsa96@gmail.com
//                 </a>
//               </p>
//             </div>
//           </motion.div>

//           {/* QR Code (Static - No Glow) */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end">
//             <p className="font-semibold text-sm mb-2 text-gray-200">
//               Scan to WhatsApp
//             </p>
//             <div className="bg-white p-3 rounded-2xl shadow-xl">
//               <QRCode
//                 value="https://wa.me/254743573380"
//                 size={150}
//                 bgColor="#ffffff"
//                 fgColor="#0f172a"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Social Icons */}
//         <motion.div variants={itemVariants} className="flex justify-center gap-5 pt-4">
//           {socialLinks.map(({ icon: Icon, href, label }, i) => (
//             <motion.a
//               key={i}
//               href={href}
//               aria-label={label}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0f172a] shadow-md hover:bg-gray-200 transition-all"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Copyright */}
//         <motion.div variants={itemVariants} className="border-t border-white/20 pt-4 text-center">
//           <p className="text-xs text-gray-300 tracking-wide">
//             © {currentYear} Hesbon Angwenyi. All rights reserved.
//           </p>
//         </motion.div>

//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;






















// import React from "react";
// import {
//   FaLinkedin,
//   FaGithub,
//   FaEnvelope,
//   FaTwitter,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaWhatsapp,
// } from "react-icons/fa";
// import QRCode from "react-qr-code";
// import { motion } from "framer-motion";

// const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();
//   const backgroundImage =
//     "https://i.pinimg.com/1200x/51/65/35/516535ef10bc1f6028b46929407ef2c2.jpg";

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

//   const containerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const scrollToSection = (id: string) => {
//     if (id === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       return;
//     }

//     const section = document.getElementById(id);
//     if (!section) return;

//     const yOffset = -80;
//     const y =
//       section.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-[#0f172a] text-white py-10 font-sans overflow-hidden">
      
//       {/* Background Image + Dark Overlay */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 2, ease: "easeOut" }}
//         className="absolute inset-0 z-0"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </motion.div>

//       {/* Main Content */}
//       <motion.div
//         className="relative z-10 max-w-7xl mx-auto px-4 space-y-8"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left items-start">

//           {/* Brand */}
//           <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
//             <button
//               onClick={() => scrollToSection("home")}
//               className="relative w-20 h-20 mb-3 hover:scale-110 transition-transform active:scale-95"
//             >
//               <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
//               <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/40">
//                 <img
//                   src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
//                   alt="Hesbon Angwenyi Logo"
//                   className="w-full h-full rounded-full object-cover"
//                 />
//               </div>
//             </button>
//             <p className="text-sm font-semibold max-w-[200px] text-gray-200">
//               Full-Stack & DevOps Intern passionate about building scalable web applications.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm">
//               {quickLinks.map((link) => (
//                 <li key={link.id}>
//                   <button
//                     onClick={() => scrollToSection(link.id)}
//                     className="hover:text-gray-300 transition-all"
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Services */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Services
//             </h3>
//             <ul className="space-y-2 text-sm text-gray-200">
//               <li>Full-Stack Development</li>
//               <li>Cloud Deployment</li>
//               <li>Web Development</li>
//               <li>Backend Development</li>
//               <li>CRM Development & Integration</li>
//             </ul>
//           </motion.div>

//           {/* Location */}
//           <motion.div variants={itemVariants}>
//             <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
//               Location
//             </h3>
//             <div className="space-y-3 text-sm text-gray-200">
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaMapMarkerAlt className="text-gray-300" />
//                 <a
//                   href="https://www.google.com/maps/place/Nairobi,+Kenya"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white"
//                 >
//                   Nairobi, Kenya
//                 </a>
//               </p>
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaPhoneAlt className="text-gray-300" />
//                 <a href="tel:+254743573380" className="hover:text-white">
//                   +254 743 573 380
//                 </a>
//               </p>
//               <p className="flex items-center gap-2 justify-center md:justify-start">
//                 <FaEnvelope className="text-gray-300" />
//                 <a href="mailto:hesbonmanyinsa96@gmail.com" className="hover:text-white">
//                   hesbonmanyinsa96@gmail.com
//                 </a>
//               </p>
//             </div>
//           </motion.div>

//           {/* QR Code with black WhatsApp icon safely */}
//           <motion.div
//             variants={itemVariants}
//             className="flex flex-col items-center justify-center text-center"
//           >
//             <p className="font-semibold text-sm mb-3 text-gray-200 w-full text-center">
//               Scan to WhatsApp
//             </p>
//             <div className="relative bg-white p-3 rounded-2xl shadow-xl">
//               <QRCode
//                 value="https://wa.me/254743573380"
//                 size={150}
//                 bgColor="#ffffff"
//                 fgColor="#0f172a"
//                 level="H" // High error correction
//               />
//               {/* Centered WhatsApp Icon (black color) */}
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
//                 <FaWhatsapp className="text-black w-5 h-5" />
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Social Icons */}
//         <motion.div variants={itemVariants} className="flex justify-center gap-5 pt-4">
//           {socialLinks.map(({ icon: Icon, href, label }, i) => (
//             <motion.a
//               key={i}
//               href={href}
//               aria-label={label}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -5, scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0f172a] shadow-md hover:bg-gray-200 transition-all"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </motion.div>

//         {/* Copyright */}
//         <motion.div variants={itemVariants} className="border-t border-white/20 pt-4 text-center">
//           <p className="text-xs text-gray-300 tracking-wide">
//             © {currentYear} Hesbon Angwenyi. All rights reserved.
//           </p>
//         </motion.div>

//       </motion.div>
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
  FaWhatsapp,
} from "react-icons/fa";
import QRCode from "react-qr-code";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const backgroundImage =
    "https://i.pinimg.com/1200x/51/65/35/516535ef10bc1f6028b46929407ef2c2.jpg";

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

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0f172a] text-white py-10 font-sans overflow-hidden">
      {/* Background Image + Dark Overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left items-start">
          {/* Brand */}
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <button
              onClick={() => scrollToSection("home")}
              className="relative w-20 h-20 mb-3 hover:scale-110 transition-transform active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
              <div className="absolute inset-0 rounded-full bg-white overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white/40">
                <img
                  src="https://i.postimg.cc/CKGr3Z0V/hesbon-angwenyi-logo-(2).jpg"
                  alt="Hesbon Angwenyi Logo"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </button>
            <p className="text-sm font-semibold max-w-[200px] text-gray-200">
              Full-Stack & DevOps Intern passionate about building scalable web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-gray-300 transition-all"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Full-Stack Development</li>
              <li>Cloud Deployment</li>
              <li>Web Development</li>
              <li>Backend Development</li>
              <li>CRM Development & Integration</li>
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants}>
            <h3 className="text-md font-bold mb-3 border-b border-white/30 pb-1 inline-block">
              Location
            </h3>
            <div className="space-y-3 text-sm text-gray-200">
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt className="text-gray-300" />
                <a
                  href="https://www.google.com/maps/place/Nairobi,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Nairobi, Kenya
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhoneAlt className="text-gray-300" />
                <a href="tel:+254743573380" className="hover:text-white">
                  +254 743 573 380
                </a>
              </p>
              <p className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope className="text-gray-300" />
                <a href="mailto:hesbonmanyinsa96@gmail.com" className="hover:text-white">
                  hesbonmanyinsa96@gmail.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* QR Code with black WhatsApp icon and continuous rotation */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="font-semibold text-sm mb-3 text-gray-200 w-full text-center">
              Scan to WhatsApp
            </p>
            <div className="relative bg-white p-3 rounded-2xl shadow-xl">
              <QRCode
                value="https://wa.me/254743573380"
                size={150}
                bgColor="#ffffff"
                fgColor="#0f172a"
                level="H"
              />
              {/* Centered WhatsApp Icon (black color, continuous rotation) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <FaWhatsapp className="text-black w-5 h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Icons with continuous rotation */}
        <div className="flex justify-center gap-5 pt-4">
          {socialLinks.map(({ icon: Icon, href, label }, i) => (
            <a
              key={i}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#0f172a] shadow-md hover:bg-gray-200 transition-all"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 flex items-center justify-center"
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <motion.div variants={itemVariants} className="border-t border-white/20 pt-4 text-center">
          <p className="text-xs text-gray-300 tracking-wide">
            © {currentYear} Hesbon Angwenyi. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;