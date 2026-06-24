import { ArrowDown, ArrowRight, Code2, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
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
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden tech-grid-bg">
      {/* Absolute Decorative Glow Spots */}
      <div className="absolute top-[20%] left-[10%] w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[200px] sm:w-[450px] h-[200px] sm:h-[450px] bg-brand-purple/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Headline Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="text-[11px] font-mono tracking-widest text-gray-300 uppercase">
              BUILDING FUTURE-PROOF DIGITAL BLUEPRINTS
            </span>
          </motion.div>

          {/* Main Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
          >
            Powering Your <br />
            <span className="gradient-text-blue-purple drop-shadow-2xl">Digital Growth</span> <br />
            With Elite Software.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-400 font-sans max-w-xl leading-relaxed"
          >
            We are Codgic. We design and compile stunning web systems, scalable mobile apps, and high-conversion video assets to amplify user loyalty, accelerate digital growth, and anchor your market performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="w-full sm:w-auto group font-display font-semibold text-xs tracking-wider bg-white text-brand-black px-7 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl shadow-white/5 cursor-pointer"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-brand-black" />
            </button>
            <button
              onClick={() => handleScrollToSection('#services')}
              className="w-full sm:w-auto font-display font-semibold text-xs tracking-wider border border-white/10 hover:border-white/30 text-white px-7 py-4 rounded-xl transition-all hover:bg-white/[0.04] flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Quick Core Standards Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 pt-10 border-t border-white/[0.04] grid grid-cols-3 gap-6 sm:gap-10 w-full"
          >
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">100%</div>
              <div className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-1">Code Quality Rank</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">4.9★</div>
              <div className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-1">Mean Client Rating</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">99.4%</div>
              <div className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-1">Uptime Resilience</div>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Developer Art Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          {/* Custom Cartoon Developer Boy with Glowing Laptop */}
          <div className="relative w-full max-w-[430px] aspect-[4/5] rounded-3xl pb-6 pt-1 flex items-center justify-center overflow-hidden">
            {/* Ambient Background Light Gradients & Radar Rings */}
            <div className="absolute inset-x-0 bottom-12 h-64 bg-brand-blue/15 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-brand-purple/20 rounded-full blur-[60px] pointer-events-none" />
            
            {/* Tech network glowing radar circles in bg */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-brand-blue/20 animate-spin-slow" />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-dotted border-brand-purple/25 animate-spin" style={{ animationDuration: '40s' }} />
              <div className="absolute w-[120px] h-[120px] rounded-full border border-white/5" />
            </div>

            {/* Glowing floating code tags around the boy */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute top-[12%] left-[8%] bg-brand-blue/10 border border-brand-blue/20 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20 text-[10px] font-mono text-brand-blue uppercase tracking-wider"
            >
              <Code2 className="h-3 w-3 text-brand-blue" />
              <span>&lt;Coder /&gt;</span>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute top-[16%] right-[6%] bg-brand-purple/10 border border-brand-purple/20 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20 text-[10px] font-mono text-brand-purple uppercase tracking-wider"
            >
              <Terminal className="h-3 w-3 text-brand-purple" />
              <span>const dev = []</span>
            </motion.div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute bottom-[18%] left-[4%] bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 z-20 text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider"
            >
              <Sparkles className="h-3 w-3 text-emerald-400" />
              <span>COMPUTING</span>
            </motion.div>

            {/* Main Interactive Floating Character Board */}
            <motion.div
              animate={{ y: [-6, 6, -6], rotateZ: [-1, 1, -1] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative w-full z-10 flex flex-col items-center justify-center cursor-pointer"
            >
              {/* The Coder Character Vector SVG */}
              <svg 
                viewBox="0 0 500 500" 
                className="w-full h-auto drop-shadow-[0_10px_35px_rgba(30,144,255,0.15)] max-w-[340px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Defs for glossy linear and radial gradients */}
                <defs>
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1b4b" />
                    <stop offset="60%" stopColor="#312e81" />
                    <stop offset="100%" stopColor="#4338ca" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fca5a5" />
                    <stop offset="100%" stopColor="#fecaca" />
                  </linearGradient>
                  <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#18181b" />
                    <stop offset="40%" stopColor="#27272a" />
                    <stop offset="100%" stopColor="#09090b" />
                  </linearGradient>
                  <linearGradient id="glassLegGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.02" />
                  </linearGradient>
                  <linearGradient id="glowGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.65" />
                  </linearGradient>
                  <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Pedestal Shadow and Glow Circle */}
                <ellipse cx="250" cy="455" rx="140" ry="25" fill="url(#pedestalGlow)" />
                <ellipse cx="250" cy="450" rx="120" ry="15" fill="#18181b" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="2" />
                <ellipse cx="250" cy="450" rx="100" ry="10" fill="#27272a" stroke="#60a5fa" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="5,5" />

                {/* --- Body Group & Hoodie --- */}
                {/* Legs sitting cross-legged */}
                <path d="M120,430 C120,410 160,370 250,370 C340,370 380,410 380,430 C380,445 350,455 250,455 C150,455 120,445 120,430 Z" fill="url(#hoodieGrad)" stroke="#ffffff" strokeOpacity="0.04" />
                
                {/* Cool sneakers sticking out */}
                {/* Left shoe */}
                <path d="M100,425 C90,425 80,435 85,445 C90,450 115,445 120,438 C120,430 110,425 100,425 Z" fill="#3b82f6" />
                <path d="M85,440 L105,440" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                {/* Right shoe */}
                <path d="M400,425 C410,425 420,435 415,445 C410,450 385,445 380,438 C380,430 390,425 400,425 Z" fill="#a78bfa" />
                <path d="M415,440 L395,440" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

                {/* Torso */}
                <path d="M165,300 L335,300 L345,380 L155,380 Z" fill="url(#hoodieGrad)" />
                <path d="M210,300 L250,345 L290,300" fill="none" stroke="#3b82f6" strokeWidth="3" opacity="0.4" />

                {/* --- Arms Typing --- */}
                {/* Left Arm sleeve */}
                <path d="M165,300 Q140,335 185,355 Q210,365 220,355" fill="none" stroke="url(#hoodieGrad)" strokeWidth="28" strokeLinecap="round" />
                {/* Left hand details */}
                <circle cx="218" cy="355" r="10" fill="url(#skinGrad)" />

                {/* Right Arm sleeve */}
                <path d="M335,300 Q360,335 315,355 Q290,365 280,355" fill="none" stroke="url(#hoodieGrad)" strokeWidth="28" strokeLinecap="round" />
                {/* Right hand details */}
                <circle cx="282" cy="355" r="10" fill="url(#skinGrad)" />

                {/* --- Head Group --- */}
                {/* Neck */}
                <rect x="235" y="240" width="30" height="30" fill="url(#skinGrad)" rx="10" />

                {/* Cute face silhouette */}
                <circle cx="250" cy="190" r="60" fill="url(#skinGrad)" />

                {/* Expressive Hair - stylish anime style coder boy with bangs */}
                <path d="M185,180 C180,130 210,120 250,110 C300,105 320,130 315,180 C325,170 320,140 300,125 C280,110 260,115 240,118 C220,115 195,125 185,180 Z" fill="url(#hairGrad)" />
                {/* Hair Spikes and Bangs details */}
                <path d="M185,180 Q192,192 195,175 Q210,210 215,182 Q230,225 240,185 Q260,220 270,182 Q290,210 295,172 Q310,190 315,178" fill="none" stroke="url(#hairGrad)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M230,115 Q260,80 295,100 Q260,95 240,112" fill="url(#hairGrad)" opacity="0.8" />

                {/* Stylish round glasses reflecting glowing screens */}
                {/* Bridge */}
                <path d="M232,185 L268,185" stroke="#1e1822" strokeWidth="3" />
                {/* Left Rim */}
                <circle cx="218" cy="185" r="18" fill="none" stroke="#60a5fa" strokeWidth="4" />
                <path d="M205,177 Q220,172 232,185" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
                {/* Right Rim */}
                <circle cx="282" cy="185" r="18" fill="none" stroke="#60a5fa" strokeWidth="4" />
                <path d="M269,177 Q284,172 296,185" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

                {/* Cute minimal smile and blush */}
                <path d="M244,215 Q250,222 256,215" fill="none" stroke="#a73a3a" strokeWidth="3" strokeLinecap="round" />
                {/* Soft Blush on cheeks */}
                <ellipse cx="198" cy="202" rx="7" ry="4" fill="#ef4444" opacity="0.3" />
                <ellipse cx="302" cy="202" rx="7" ry="4" fill="#ef4444" opacity="0.3" />

                {/* Cute ears */}
                <circle cx="188" cy="195" r="8" fill="url(#skinGrad)" />
                <circle cx="312" cy="195" r="8" fill="url(#skinGrad)" />

                {/* --- The Laptop (glowing tech tool) --- */}
                {/* Screen Glow Cone upward projection */}
                <polygon points="170,360 330,360 410,210 90,210" fill="url(#glowGrad)" />

                {/* Base of laptop */}
                <polygon points="190,360 310,360 330,380 170,380" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                <polygon points="197,363 303,363 318,377 182,377" fill="#18181b" />
                {/* Glowing keyboard details */}
                <line x1="205" y1="367" x2="295" y2="367" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3,3" opacity="0.9" />
                <line x1="195" y1="372" x2="305" y2="372" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4,2" opacity="0.9" />

                {/* Open Screen Lid angled up */}
                <polygon points="194,360 306,360 325,295 175,295" fill="#3f3f46" stroke="#52525b" strokeWidth="2" />
                <polygon points="199,357 301,357 317,301 183,301" fill="#09090b" />
                {/* Code on screen glow lines */}
                <line x1="190" y1="310" x2="250" y2="310" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
                <line x1="190" y1="320" x2="310" y2="320" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />
                <line x1="190" y1="330" x2="280" y2="330" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
                <line x1="190" y1="340" x2="230" y2="340" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
                <line x1="190" y1="350" x2="295" y2="350" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" />

                {/* High tech visual logo badge back of the laptop lid representing Codgic "C" */}
                <ellipse cx="250" cy="272" rx="10" ry="10" fill="#a78bfa" opacity="0.15" />
                <text x="247" y="275" fill="#a78bfa" fontSize="9" fontWeight="950" className="font-mono">C</text>
              </svg>

              {/* Floating tech bits inside the movement boundary */}
              <div className="absolute top-[35%] left-[2%] w-2 h-2 rounded-full bg-brand-blue animate-ping" />
              <div className="absolute top-[60%] right-[3%] w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" style={{ animationDelay: '1s' }} />
            </motion.div>

            {/* Platform Base text below the cartoon character */}
            <div className="absolute bottom-1 bg-white/[0.02] border border-white/[0.04] py-2 px-6 rounded-2xl flex items-center gap-3 shadow-lg backdrop-blur-md max-w-[280px]">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-[10px] font-mono tracking-wider font-semibold text-gray-400">CODGIC ARCHITECT ON-LINE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down arrow anchor */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white cursor-pointer select-none transition-colors"
           onClick={() => handleScrollToSection('#services')}>
        <span className="text-[9px] font-mono tracking-widest uppercase">Inspect Portfolio Matrix</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
