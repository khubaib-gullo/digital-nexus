import React from 'react';
import BlueprintBackground from './components/BlueprintBackground';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ArchitectChat from './components/ArchitectChat';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-mono text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <BlueprintBackground />
      
      <main className="relative z-10">
        {/* Sections mapped to the scroll progress concept */}
        <HeroSection /> {/* 0-20% approx visually */}
        <ServicesSection /> {/* 20-60% */}
        <PortfolioSection /> {/* 60-75% */}
        <AboutSection /> {/* 75-90% */}
        <ContactSection /> {/* 90-100% */}
      </main>

      <ArchitectChat />
      
      {/* Footer / Copyright overlay */}
      <footer className="fixed bottom-4 left-6 z-40 text-[10px] text-cyan-900/50 pointer-events-none hidden md:block">
        DIGITAL_NEXUS_BLUEPRINT_V2.5.0 // © 2024
      </footer>
    </div>
  );
};

export default App;
