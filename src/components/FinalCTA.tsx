import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#FAF9F5] border-t border-[#18181B]/8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        
        {/* Subtle Accent Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181B]/5 border border-[#18181B]/10 text-[#18181B] text-xs font-mono tracking-wider uppercase font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          PRODUCTION READINESS
        </div>

        {/* Section 29 Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#18181B] leading-tight max-w-2xl mx-auto">
          Your application is ready.<br />Is your infrastructure?
        </h2>

        {/* Supporting Copy */}
        <p className="mt-5 text-base sm:text-lg text-[#52525B] max-w-xl mx-auto leading-relaxed">
          Let's design the path to secure, scalable production.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#blueprint-builder"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-semibold bg-[#18181B] text-[#FAF9F5] rounded-full hover:bg-[#27272A] active:scale-[0.98] transition-all shadow-xs group"
          >
            <span>Design my production stack</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#A1A1AA] transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <a
            href="#project-intake"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 text-xs font-mono font-semibold bg-white text-[#18181B] border border-[#18181B]/12 rounded-full hover:bg-[#FAF9F5] hover:border-[#18181B]/20 active:scale-[0.98] transition-all shadow-2xs"
          >
            <span>Start a project</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#71717A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
