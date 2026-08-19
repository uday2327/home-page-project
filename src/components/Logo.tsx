import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-7 h-7", showText = true }) => {
  return (
    <div className="flex items-center gap-2.5 group cursor-pointer select-none">
      {/* Abstract 3-layer architecture icon with orchestrating node */}
      <div className={`relative flex items-center justify-center rounded-lg bg-[#18181B] text-[#FAF9F5] shadow-xs transition-transform duration-200 group-hover:scale-105 ${className}`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Top Layer */}
          <path d="M4 7h16" />
          {/* Middle Layer */}
          <path d="M4 12h16" opacity="0.8" />
          {/* Bottom Layer with Active Target */}
          <path d="M4 17h10" opacity="0.6" />
          <circle cx="18" cy="17" r="1.8" fill="#2563EB" stroke="#2563EB" />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-semibold text-sm tracking-tight text-[#18181B] font-mono leading-none">
            CLOUDFORGE
          </span>
          <span className="text-[10px] text-[#71717A] tracking-wider uppercase font-medium mt-0.5">
            Cloud & Platform Engineering
          </span>
        </div>
      )}
    </div>
  );
};
