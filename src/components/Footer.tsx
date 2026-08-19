import React from 'react';
import { Logo } from './Logo';
import { Terminal } from 'lucide-react';

interface FooterProps {
  onOpenTerminal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#18181B]/8 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#18181B]/6">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-xs text-[#71717A] max-w-sm leading-relaxed mt-1 font-normal">
              Engineering secure, reproducible cloud foundations, automated delivery pipelines, and resilient production environments.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#52525B]">
            <a href="#solutions" className="hover:text-[#18181B] transition-colors">
              Solutions
            </a>
            <a href="#blueprint-builder" className="hover:text-[#18181B] transition-colors">
              Platform
            </a>
            <a href="#our-work" className="hover:text-[#18181B] transition-colors">
              Work
            </a>
            <a href="#how-we-work" className="hover:text-[#18181B] transition-colors">
              Approach
            </a>
            <a href="#project-intake" className="hover:text-[#18181B] transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Easter Egg Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#71717A]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} CLOUDFORGE. All rights reserved.</span>
            <span>·</span>
            <span>Acdyon Technologies Submission</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational</span>
            </div>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#FAF9F5] border border-[#18181B]/10 hover:border-[#18181B]/30 hover:text-[#18181B] transition-colors cursor-pointer"
                title="Click or press ~ to open Platform CLI"
              >
                <Terminal className="w-3 h-3 text-[#2563EB]" />
                <span>CLI Terminal [~]</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
