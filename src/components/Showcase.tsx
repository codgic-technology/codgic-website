import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { 
  ArrowUpRight, 
  X, 
  Check, 
  Star,
  Target,
  Trophy,
  Cpu,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Showcase() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'AI & Data' | 'Product Design'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: ('All' | 'Full-Stack' | 'AI & Data' | 'Product Design')[] = [
    'All',
    'Full-Stack',
    'AI & Data',
    'Product Design'
  ];

  const filteredProjects = PROJECTS.filter(proj => {
    if (activeFilter === 'All') return true;
    return proj.category === activeFilter;
  });

  return (
    <section id="works" className="py-24 relative bg-brand-black overflow-hidden border-t border-white/[0.02]">
      {/* Absolute Neon Ambient Backdrop */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Header Block with Meta Details */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1 w-8 bg-brand-purple rounded-full" />
              <span className="text-xs font-mono tracking-widest text-brand-purple uppercase">PROOF OF WORK</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
              Projects Engineered and <br />
              <span className="gradient-text-purple-pink">Compiled with Precision.</span>
            </h2>
            <p className="mt-4 text-gray-400 font-sans text-sm leading-relaxed">
              We do not practice simulated services. Explore our real, battle-tested software launches across web customizers, headless e-commerce, and high-density telemetry dashboards.
            </p>
          </div>

          {/* Filter Pill Row */}
          <div className="flex flex-wrap gap-2 self-start md:self-end bg-white/[0.02] border border-white/[0.04] p-1.5 rounded-2xl">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide transition-all uppercase cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                className="group bg-brand-card/45 border border-white/[0.04] hover:border-white/[0.12] rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual hover background subtle gradient pulse */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-indigo/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[10px] font-mono text-gray-400 tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                      {project.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-brand-blue transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray-400 font-sans text-xs sm:text-sm leading-relaxed max-w-lg">
                    {project.shortDesc}
                  </p>

                  {/* Tag badging */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] font-mono text-gray-400">
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.04] text-[10px] font-mono text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card footer CTA node */}
                <div className="mt-8 pt-6 border-t border-white/[0.03] flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Client Partner</span>
                    <span className="text-xs font-display font-semibold text-gray-300">{project.clientName}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="h-10 px-4 rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:bg-brand-blue/15 group-hover:border-brand-blue/30 group-hover:text-brand-blue text-xs font-mono text-gray-300 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    Examine Case
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Examination Modal Backdrop with AnimatePresence */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-lg"
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="bg-brand-card border border-white/[0.08] w-full max-w-4xl rounded-3xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button Header */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 h-9 w-9 rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.06] hover:scale-105 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-4.5 w-4.5" />
                </button>

                {/* Modal Title Block */}
                <div className="max-w-2xl mb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-[10px] font-mono text-brand-blue font-medium uppercase tracking-wide">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[10px] font-mono text-gray-400 tracking-wide">
                      Timeline: {selectedProject.duration}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                    {selectedProject.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-500 block mt-1 tracking-wider">
                    PARTNER SYSTEM OVERSEE: {selectedProject.clientName.toUpperCase()}
                  </span>
                </div>

                {/* Challenge, Strategy, Result layout split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  
                  {/* Left major side details */}
                  <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Challenge Block */}
                    <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03] relative overflow-hidden">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="h-4 text-brand-purple" />
                        <h4 className="font-display font-bold text-sm text-gray-200">The Business Challenge</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    {/* Approach Block */}
                    <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/[0.03]">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="h-4 text-brand-blue" />
                        <h4 className="font-display font-bold text-sm text-gray-200">Our Engineered Strategy</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                        {selectedProject.approach}
                      </p>
                    </div>

                    {/* Results Block */}
                    <div className="p-5 rounded-2xl bg-brand-indigo/5 border border-brand-indigo/10">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-4 text-brand-indigo" />
                        <h4 className="font-display font-bold text-sm text-brand-blue">Quantifiable Outcomes</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                        {selectedProject.results}
                      </p>
                    </div>
                  </div>

                  {/* Right side static configuration parameters */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Core parameters box */}
                    <div className="bg-white/[0.02] border border-white/[0.04] p-5 rounded-2xl">
                      <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 border-b border-white/[0.03] pb-2.5 mb-3.5">
                        Project DNA
                      </h4>

                      <div className="flex flex-col gap-3.5">
                        <div>
                          <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none mb-1">Time Investment</span>
                          <span className="text-xs font-display font-semibold text-gray-200">{selectedProject.duration}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none mb-1">Client Verification</span>
                          <span className="text-xs font-display font-semibold text-gray-200 flex items-center gap-1">
                            {selectedProject.rating ? (
                              <>
                                {[...Array(selectedProject.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                                ))}
                                <span className="text-[10px] font-mono text-gray-400 ml-1">5.0 Rating</span>
                              </>
                            ) : (
                              'Verified'
                            )}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none mb-1">Deploy Integrity</span>
                          <span className="text-xs text-brand-indigo font-mono bg-brand-indigo/10 px-2 py-0.5 rounded border border-brand-indigo/20 inline-block">
                            STAGE-1 ACTIVE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Integrated Framework modules stack list */}
                    <div className="bg-white/[0.02] border border-white/[0.04] p-5 rounded-2xl">
                      <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gray-400 mb-3 block">
                        Tech Layer Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px]">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer close option */}
                <div className="pt-5 border-t border-white/[0.03] flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-display text-xs font-semibold hover:bg-white/[0.03] text-gray-400 hover:text-white px-5 py-3 rounded-xl border border-white/[0.08] transition-all cursor-pointer"
                  >
                    Conclude Review
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
