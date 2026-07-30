import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechStack from './components/TechStack';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero / Home Section */}
      <HeroSection />

      {/* About Section (Spline 3D Orb) */}
      <AboutSection />

      {/* Tech Stack / Capabilities (Dribbble Interactive Animations) */}
      <TechStack />

      {/* Pricing Plans */}
      <PricingSection />

      {/* Interactive Contact Form */}
      <ContactSection />
    </div>
  );
}

export default App;
