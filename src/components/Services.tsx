import { useState } from 'react';
import { SERVICES } from '../data';
import { 
  Code, 
  Smartphone, 
  Video,
  Check, 
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return <Code className="h-6 w-6 text-brand-blue" />;
      case 'Smartphone':
        return <Smartphone className="h-6 w-6 text-emerald-400" />;
      case 'Video':
        return <Video className="h-6 w-6 text-brand-purple" />;
      default:
        return <Sparkles className="h-6 w-6 text-brand-indigo" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-24 relative bg-brand-dark overflow-hidden border-t border-white/[0.02]">
      {/* Background Radial Ambiance */}
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3 bg-white/[0.02] border border-white/[0.05] w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <span className="h-1.5 w-1.5 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-brand-blue uppercase">SERVICES</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            An Architectural Matrix or <br />
            <span className="gradient-text-blue-purple">Full-Stack Digital Execution.</span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            We operate at the convergence of fast visual experience, native mobile architecture, and high-conversion post-production. Communicate directly with Aarav Patel to construct your vision.
          </p>
        </div>

        {/* Matrix Grid of Services - 3 columns on desktop for 3 main services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, index) => {
            const isExpanded = expandedId === srv.id;
            return (
              <motion.div
                layout="position"
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`glass-panel backdrop-blur-xl rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative select-none flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-brand-indigo/35 bg-brand-card/90 shadow-2xl' 
                    : 'border-white/[0.04] bg-brand-card/40 hover:border-white/[0.12] hover:bg-brand-card/75 shadow-lg'
                }`}
              >
                {/* Glowing subtle outline on hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-t-full" />

                <div>
                  {/* Card Title Header Row */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shadow-inner flex-shrink-0">
                        {getIcon(srv.iconName)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">{srv.category}</span>
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-white mt-0.5">{srv.title}</h3>
                      </div>
                    </div>
                    
                    {/* Expanded clicker node */}
                    <button
                      onClick={() => toggleExpand(srv.id)}
                      className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all cursor-pointer flex-shrink-0 ${
                        isExpanded 
                          ? 'bg-brand-blue/15 border-brand-blue/40 text-brand-blue' 
                          : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.05]'
                      }`}
                      aria-label={isExpanded ? "Collapse service details" : "Expand service details"}
                    >
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 transform rotate-180 transition-transform" />
                      ) : (
                        <ChevronRight className="h-4 w-4 transition-transform" />
                      )}
                    </button>
                  </div>

                  {/* Brief description always visible */}
                  <p className="mt-4 text-gray-400 font-sans text-xs sm:text-xs leading-relaxed min-h-[50px]">
                    {srv.shortDescription}
                  </p>

                  {/* Tech Quick Badges always visible */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {srv.techStack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-[9px] font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learn More Trigger / Bottom Section */}
                <div className="mt-6 pt-4 border-t border-white/[0.02] flex flex-col">
                  <button
                    onClick={() => toggleExpand(srv.id)}
                    className="text-xs font-mono font-bold tracking-wider text-brand-blue hover:text-white flex items-center gap-1.5 transition-colors w-fit group cursor-pointer"
                  >
                    <span>{isExpanded ? 'SEE LESS DELIVERABLES' : 'LEARN MORE'}</span>
                    <ArrowRight className={`h-3 w-3 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>

                  {/* Detailed Spec Drawer with AnimatePresence */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden mt-4"
                      >
                        <h4 className="font-display font-bold text-[10px] uppercase tracking-wider text-gray-300 mb-2 mt-2">
                          Blueprint Deliverables:
                        </h4>

                        {/* Benefits check list */}
                        <div className="space-y-2 mb-4">
                          {srv.benefits.map((benefit, bIndex) => (
                            <div key={bIndex} className="flex items-start gap-2">
                              <div className="h-4 w-4 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <Check className="h-2.5 w-2.5 text-brand-blue" />
                              </div>
                              <span className="text-[10px] sm:text-xs text-gray-400 font-sans leading-relaxed">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>

                        <p className="text-[11px] text-gray-500 font-sans italic pt-2 border-t border-white/[0.03]">
                          {srv.detailedDescription}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
