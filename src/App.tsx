import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductionLifecycle } from './components/ProductionLifecycle';
import { SolutionPillars } from './components/SolutionPillars';
import { BlueprintBuilder } from './components/BlueprintBuilder';
import { DevOpsPipeline } from './components/DevOpsPipeline';
import { PuppetExperience } from './components/PuppetExperience';
import { KubernetesExperience } from './components/KubernetesExperience';
import { SecurityLayer } from './components/SecurityLayer';
import { CloudArchitecture } from './components/CloudArchitecture';
import { ObservabilityDashboard } from './components/ObservabilityDashboard';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { ProjectIntake } from './components/ProjectIntake';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { EasterEggTerminal } from './components/EasterEggTerminal';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Global key listener for ~ or Ctrl+K or Escape to trigger CLI terminal easter egg
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~' || (e.ctrlKey && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen]);

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#18181B] flex flex-col font-sans selection:bg-[#2563EB]/15 selection:text-[#18181B]">
      {/* 1. NAVBAR */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      <main className="flex-1">
        {/* 2 & 3. HERO & PRODUCTION ARCHITECTURE VISUAL */}
        <Hero />

        {/* 4. THE PRODUCTION LAYER (Lifecycle) */}
        <ProductionLifecycle />

        {/* 5. THREE CORE SOLUTIONS */}
        <SolutionPillars />

        {/* 6. PRODUCTION BLUEPRINT (Interactive Product Experience) */}
        <BlueprintBuilder />

        {/* 7. DEVOPS AUTOMATION (Pipeline) */}
        <DevOpsPipeline />

        {/* 8. PUPPET + KUBERNETES EXPERIENCES */}
        <PuppetExperience />
        <KubernetesExperience />

        {/* 9. SECURITY (Security across lifecycle) */}
        <SecurityLayer />

        {/* 10. CLOUD (Multi-cloud Architecture) */}
        <CloudArchitecture />

        {/* 11. OBSERVABILITY */}
        <ObservabilityDashboard />

        {/* 12. OUR WORK (3 real editorial case studies) */}
        <CaseStudies />

        {/* 13. HOW WE WORK (4-stage methodology) */}
        <Process />

        {/* 14. PROJECT INTAKE & PRICING PHILOSOPHY */}
        <ProjectIntake />

        {/* 15. FINAL CTA */}
        <FinalCTA />
      </main>

      {/* 16. FOOTER */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Bonus Round Easter Egg Terminal Modal */}
      <EasterEggTerminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </div>
  );
}

export default App;
