import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Platform', href: '#blueprint-builder' },
    { label: 'Work', href: '#our-work' },
    { label: 'Approach', href: '#how-we-work' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 sm:pt-4">
      <nav
        className={`mx-auto max-w-5xl rounded-full transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#FFFFFF]/90 backdrop-blur-md border-[#18181B]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-2.5 px-4 sm:px-6'
            : 'bg-[#FAF9F5]/80 backdrop-blur-sm border-[#18181B]/8 py-3 px-5 sm:px-7'
        } flex items-center justify-between`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-[#52525B] hover:text-[#18181B] transition-colors py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#18181B] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA & CLI Easter Egg button */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              title="Open Platform Terminal (Press ~)"
              className="p-1.5 text-[#71717A] hover:text-[#18181B] hover:bg-[#18181B]/5 rounded-md transition-colors font-mono text-xs flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="text-[10px] text-[#A1A1AA] border border-[#18181B]/10 px-1 py-0.2 rounded font-mono">~</span>
            </button>
          )}

          <a
            href="#project-intake"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium bg-[#18181B] text-[#FAF9F5] rounded-full hover:bg-[#27272A] active:scale-[0.98] transition-all shadow-xs"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3 h-3 text-[#A1A1AA]" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="p-1.5 text-[#52525B] hover:text-[#18181B] rounded-md"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#18181B] hover:bg-[#18181B]/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-5xl bg-[#FFFFFF] border border-[#18181B]/10 rounded-2xl p-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#18181B] py-2 px-3 rounded-lg hover:bg-[#FAF9F5] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#18181B]/5 flex flex-col gap-2">
              <a
                href="#project-intake"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-xs font-medium bg-[#18181B] text-[#FAF9F5] rounded-full"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
