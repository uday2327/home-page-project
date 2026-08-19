import React from 'react';
import { ArrowRight, ChevronRight, Shield, Cpu, Cloud } from 'lucide-react';
import { ArchitectureHero } from './ArchitectureHero';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden">
      {/* Background architectural grid pattern - ultra-subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B]/5 border border-[#18181B]/10 text-[#18181B] text-xs tracking-wider uppercase font-medium">
            CLOUD & PLATFORM ENGINEERING
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#18181B] leading-[1.02]">
            Your application is only the beginning.
          </h1>
          
          {/* Supporting Copy */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#52525B] leading-relaxed max-w-2xl mx-auto font-normal">
            We build the cloud foundation, delivery automation, and guardrails your team needs to ship confidently.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#blueprint-builder"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-[#18181B] text-[#FAF9F5] rounded-full hover:bg-[#27272A] active:scale-[0.98] transition-all shadow-xs group"
            >
              <span>Design my production stack</span>
              <ArrowRight className="w-4 h-4 text-[#A1A1AA] transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 text-sm font-medium bg-white text-[#18181B] border border-[#18181B]/12 rounded-full hover:bg-[#FAF9F5] hover:border-[#18181B]/20 active:scale-[0.98] transition-all shadow-2xs"
            >
              <span>Explore capabilities</span>
              <ChevronRight className="w-4 h-4 text-[#71717A]" />
            </a>
          </div>

          {/* Architectural Pillars Micro Ticker */}
          <div className="mt-8 pt-6 border-t border-[#18181B]/6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#71717A]">
            <span className="flex items-center gap-1.5">
              <Cloud className="w-3.5 h-3.5 text-[#2563EB]" />
              Immutable Infrastructure
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
              Kubernetes Orchestration
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#2563EB]" />
              Continuous DevSecOps
            </span>
          </div>
        </div>

        <ArchitectureHero />

      </div>
    </section>
  );
};
