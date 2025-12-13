import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import Experience from './Experience'; 
import ProjectsSection from './ProjectsSection';
import TestimonialsSection from './TestimonialsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FloatingWhatsAppButton from './FloatingWhatsAppButton';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Experience /> {/* <-- Add Experience right after Skills */}
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton
        phoneNumber="254743573380"
        message="Hi Hesbon — I saw your portfolio and would like to connect!"
      />
    </div>
  );
};

export default AppLayout;
