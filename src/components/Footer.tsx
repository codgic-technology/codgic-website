import React from 'react';
import { ArrowUp, Github, Twitter, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'refund' | 'contact') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-brand-black border-t border-white/[0.04] py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Top Segment */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/[0.03] pb-10 mb-10">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 bg-gradient-to-tr from-brand-blue to-brand-purple rounded-lg flex items-center justify-center font-display font-black text-xs text-white">
                C
              </div>
              <span className="font-display font-extrabold text-sm tracking-wider text-white">
                CODGIC SYSTEMS
              </span>
            </div>
            <p className="mt-2 text-xs text-gray-500 font-sans max-w-xs">
              Formulating speed-tested software blueprints and elite reactive applications.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { icon: <Twitter className="h-4 w-4" />, href: '#', label: 'Twitter' },
              { icon: <Linkedin className="h-4 w-4" />, href: '#', label: 'LinkedIn' },
              { icon: <Github className="h-4 w-4" />, href: '#', label: 'GitHub' },
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                className="h-8 w-8 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.06] transition-all cursor-pointer"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Segment */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 font-mono text-[10px] text-gray-500 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex flex-col gap-1">
              <span>© 2026 CODGIC TECHNOLOGY SERVICES. ALL RIGHTS SECURED.</span>
              <span className="text-gray-600 flex items-center gap-1">
                Hand-coded with premium visual care <Heart className="h-3 w-3 inline text-red-500" />
              </span>
            </div>
            
            {/* Legal Document Fast-links list */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 sm:border-l border-white/[0.06] sm:pl-6 text-gray-400">
              <button 
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-brand-blue hover:underline transition-colors uppercase tracking-wider cursor-pointer"
              >
                Privacy
              </button>
              <button 
                onClick={() => onOpenLegal('terms')}
                className="hover:text-brand-purple hover:underline transition-colors uppercase tracking-wider cursor-pointer"
              >
                Terms
              </button>
              <button 
                onClick={() => onOpenLegal('refund')}
                className="hover:text-brand-blue hover:underline transition-colors uppercase tracking-wider cursor-pointer"
              >
                Refunds
              </button>
              <button 
                onClick={() => onOpenLegal('contact')}
                className="hover:text-brand-purple hover:underline transition-colors uppercase tracking-wider cursor-pointer"
              >
                Legal Compliance
              </button>
            </div>
          </div>

          {/* Back up option */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white hover:underline cursor-pointer group self-end xl:self-auto"
          >
            <span>BACK TO CORE HEIGHTS</span>
            <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
