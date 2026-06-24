import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Services', href: '#services' },
    { label: 'Mobile Apps', href: '#play-store-apps' },
    { label: 'About Aarav', href: '#about' },
    { label: 'Inquiry Terminal', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky navbar
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
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out py-4 px-4 sm:px-6 md:px-12 ${
          scrolled ? 'bg-brand-black/85 backdrop-blur-md border-b border-white/5 shadow-2xl py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-2 group-hover:scale-105 transition-transform"
          >
            <div className="h-9 w-9 bg-gradient-to-tr from-brand-blue via-brand-indigo to-brand-purple rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden">
              <span className="font-display font-black text-lg text-white">C</span>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg tracking-wider text-white flex items-center gap-1">
                CODGIC <span className="h-1.5 w-1.5 bg-brand-purple rounded-full animate-pulse-glow" />
              </span>
              <span className="text-[10px] font-mono text-gray-500 tracking-widest mt-[-2px]">TECH CREATIVE</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center gap-8 bg-white/[0.02] border border-white/[0.04] px-6 py-2 rounded-full backdrop-blur-sm">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans font-medium text-xs tracking-wide text-gray-400 hover:text-white transition-colors relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-brand-blue group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group font-display font-medium text-xs tracking-wider bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue hover:to-brand-indigo text-white px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand-blue/10 flex items-center gap-1.5 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Initiate Project
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-white/5 p-6 flex flex-col gap-6 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans font-medium text-base text-gray-300 hover:text-brand-blue py-2 border-b border-white/[0.02]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center font-display font-medium text-sm tracking-wider bg-brand-blue hover:bg-brand-indigo text-white py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              Initiate Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
