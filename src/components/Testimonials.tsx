import { useRef, useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ArrowLeft, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Helper to update arrow visibilities based on scroll offset
  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      // Allow slight threshold for safety
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScrollPosition);
      // Run once on load to establish state
      checkScrollPosition();
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="feedback" className="py-24 relative bg-brand-dark overflow-hidden border-t border-white/[0.02]">
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-brand-purple/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header segment */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3 bg-white/[0.02] border border-white/[0.05] w-fit px-3 py-1 rounded-full backdrop-blur-md">
              <span className="h-1.5 w-1.5 bg-brand-blue rounded-full animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-brand-blue uppercase font-bold">CLIENT SATISFACTION</span>
              <span className="h-1.5 w-1.5 bg-brand-purple rounded-full" />
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              The Echoes of <span className="gradient-text-blue-purple">Success & Satisfaction.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed max-w-lg">
              We partner with forward-thinking leaders, founders, and technical teams to ship exceptional user coordinates. Read why our clients rate us 5.0 stars.
            </p>
          </div>

          {/* Scrolling UI Controllers */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`h-11 w-11 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-brand-card border-white/[0.1] text-white hover:bg-white/[0.05] hover:scale-105 active:scale-95'
                  : 'bg-brand-card/20 border-white/[0.03] text-gray-600 cursor-not-allowed'
              }`}
              title="Scroll Left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`h-11 w-11 rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-brand-card border-white/[0.1] text-white hover:bg-white/[0.05] hover:scale-105 active:scale-95'
                  : 'bg-brand-card/20 border-white/[0.03] text-gray-600 cursor-not-allowed'
              }`}
              title="Scroll Right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Card Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-1 scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/[0.05] hover:scrollbar-thumb-white/[0.1] -mx-4 sm:-mx-6 md:mx-0 select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Support standard scrollbars hidden but fully scrollable */}
          <style dangerouslySetInnerHTML={{__html: `
            #feedback [ref="scrollRef"]::-webkit-scrollbar {
              display: none;
            }
          `}} />

          {TESTIMONIALS.map((current, index) => (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[400px] bg-brand-card/40 border border-white/[0.05] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-blue/30 active:scale-[0.99] transition-all relative overflow-hidden backdrop-blur-md group shadow-xl"
            >
              {/* Soft decorative visual light bloom behind */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-brand-blue/5 rounded-full blur-2xl group-hover:bg-brand-blue/10 transition-colors duration-500" />
              
              <Quote className="absolute top-6 right-6 h-12 w-12 text-white/[0.02] group-hover:text-white/[0.04] transition-all duration-300" />

              <div>
                {/* Visual Header of Card: Rating Stars & Sparkle */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Sparkles className="h-3.5 w-3.5 text-brand-purple/40 group-hover:text-brand-purple transition-colors" />
                </div>

                {/* Substantive client quotation text */}
                <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed mb-6 block text-left group-hover:text-white transition-colors">
                  "{current.quote}"
                </p>
              </div>

              {/* Verified Badge & User credentials Footer alignment */}
              <div className="border-t border-white/[0.04] pt-5 mt-auto flex flex-col gap-4 text-left">
                {/* Active verified project completed strip */}
                <div className="flex items-center gap-1.5 bg-brand-blue/[0.03] border border-brand-blue/15 py-1 px-2.5 rounded-lg w-fit">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[9px] font-mono font-medium text-gray-400 uppercase tracking-wider truncate max-w-[200px] sm:max-w-xs">
                    Verified system: {current.projectCompleted}
                  </span>
                </div>

                {/* Profile credentials */}
                <div className="flex items-center gap-3">
                  <img
                    src={current.avatarUrl}
                    alt={current.name}
                    referrerPolicy="no-referrer"
                    className="h-11 w-11 rounded-xl border border-white/[0.08] object-cover filter brightness-95"
                  />
                  <div>
                    <h4 className="font-display font-black text-xs text-white uppercase tracking-wider">
                      {current.name}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-500 uppercase mt-0.5 tracking-wider">
                      {current.role} at <span className="text-brand-purple font-semibold">{current.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe instruction tooltip indicator on mobile screens */}
        <div className="flex justify-center items-center gap-1.5 mt-2 text-[10px] font-mono text-gray-500 tracking-wider">
          <span>← SWIPE OR DRAG TRACK TO EXPLORE ALL →</span>
        </div>

      </div>
    </section>
  );
}

