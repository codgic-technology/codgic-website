import { motion } from 'motion/react';
import { Linkedin, Github, Twitter, Cpu, Globe, ArrowUpRight, Award, GraduationCap, Briefcase, Smartphone, Brain, Code } from 'lucide-react';

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 relative bg-brand-black overflow-hidden border-t border-white/[0.02]">
      {/* Absolute Decorative Glow spots */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3 bg-white/[0.02] border border-white/[0.05] w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <span className="h-1.5 w-1.5 bg-brand-purple rounded-full animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-brand-purple uppercase">LEADERSHIP</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none">
            Meet the Founder & <br />
            <span className="gradient-text-blue-purple">Lead Developer.</span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
            Discover the architect behind Codgic—delivering robust digital blueprints and performance mobile software.
          </p>
        </div>
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Left Column: Bio & Information (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in animate-duration-500">
            {/* Title & Organization Header */}
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                Manish Kanzariya
              </h3>
              <p className="text-sm font-mono text-brand-blue font-bold tracking-widest mt-1 uppercase flex items-center gap-2">
                <Cpu className="h-4 w-4 animate-spin-slow text-brand-blue" />
                Founder & Lead Developer, Codgic
              </p>
            </div>

            {/* Inspiring Professional Bio Block */}
            <div className="mt-6 space-y-4 max-w-xl">
              <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                As a developer deeply invested in digital craftsmanship, I started Codgic to bridge the gap between creative vision and surgical software engineering. We architect high-performance, responsive single-page web environments and robust mobile app clusters.
              </p>
              <p className="text-gray-400 font-sans text-sm leading-relaxed">
                By removing administrative friction, our clients collaborate directly with developers who build their structures. We deliver responsive architectures using clean, fully-typed code (TypeScript) and server-side safety layers so your products can handle immediate, heavy traffic loads from day one.
              </p>
            </div>

            {/* Developer Highlights / Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-xl">
              <div className="bg-white/[0.01] border border-white/[0.03] p-4 rounded-2xl flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Core Expertise</span>
                  <span className="text-xs text-gray-500 font-sans mt-0.5">Full-Stack React/Next.js, Dart/Flutter development, and video post-production.</span>
                </div>
              </div>

              <div className="bg-white/[0.01] border border-white/[0.03] p-4 rounded-2xl flex items-start gap-3">
                <Award className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">Engineering Focus</span>
                  <span className="text-xs text-gray-500 font-sans mt-0.5">Maximum core speed, minimal layout shifting, clean API interfaces, secure local storing.</span>
                </div>
              </div>
            </div>

            {/* Social Anchor Buttons Row */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mr-2">CONNECT DIRECTLY:</span>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com/in/manish-kanzariya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue hover:bg-brand-blue/10 transform hover:scale-110 active:scale-95 transition-all duration-300"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>

                <a 
                  href="https://github.com/manishkanzariya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white hover:bg-white/[0.06] transform hover:scale-110 active:scale-95 transition-all duration-300"
                  title="Follow on GitHub"
                >
                  <Github className="h-4.5 w-4.5" />
                </a>

                <a 
                  href="https://x.com/manishkanzariya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-purple hover:border-brand-purple hover:bg-brand-purple/10 transform hover:scale-110 active:scale-95 transition-all duration-300"
                  title="Follow on X (Twitter)"
                >
                  <Twitter className="h-4.5 w-4.5" />
                </a>
              </div>

              {/* Direct Mail Anchor */}
              <a 
                href="mailto:info@codgic.in"
                className="ml-2 inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-brand-blue hover:text-white uppercase transition-colors"
              >
                <span>info@codgic.in</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 2x2 Tech Skills/Expertise Grid (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            
            {/* Box 1: App Developer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl p-5 border border-brand-blue/15 bg-brand-card/30 hover:bg-brand-card/60 hover:border-brand-blue/35 transition-all flex flex-col justify-between h-44 overflow-hidden shadow-lg shadow-brand-blue/[0.01]"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-blue tracking-widest uppercase bg-brand-blue/5 px-2 py-0.5 rounded-md">LIVE</span>
              </div>
              <div className="mt-4">
                <h4 className="font-display font-bold text-base text-white tracking-tight group-hover:text-brand-blue transition-colors">App Developer</h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                  Crafting native iOS/Android clusters using Flutter, optimized with slick animations, offline cache, and light weights.
                </p>
              </div>
            </motion.div>

            {/* Box 2: Web Developer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="group relative rounded-2xl p-5 border border-brand-purple/15 bg-brand-card/30 hover:bg-brand-card/60 hover:border-brand-purple/35 transition-all flex flex-col justify-between h-44 overflow-hidden shadow-lg shadow-brand-purple/[0.01]"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-purple/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                  <Code className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-purple tracking-widest uppercase bg-brand-purple/5 px-2 py-0.5 rounded-md">EXPERT</span>
              </div>
              <div className="mt-4">
                <h4 className="font-display font-bold text-base text-white tracking-tight group-hover:text-brand-purple transition-colors">Web Developer</h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                  High-speed React layouts, Next.js setups, typed structures in TS, and responsive tailored aesthetics.
                </p>
              </div>
            </motion.div>

            {/* Box 3: AI / ML Expert */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="group relative rounded-2xl p-5 border border-emerald-500/15 bg-brand-card/30 hover:bg-brand-card/60 hover:border-emerald-500/35 transition-all flex flex-col justify-between h-44 overflow-hidden shadow-lg shadow-emerald-500/[0.01]"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Brain className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-widest uppercase bg-emerald-500/5 px-2 py-0.5 rounded-md">SMART</span>
              </div>
              <div className="mt-4">
                <h4 className="font-display font-bold text-base text-white tracking-tight group-hover:text-emerald-400 transition-colors">AI & ML Expert</h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                  Integrating semantic indexing, smart pipelines, AI models (Gemini SDKs), and intelligent workflows.
                </p>
              </div>
            </motion.div>

            {/* Box 4: Architecture */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="group relative rounded-2xl p-5 border border-amber-500/15 bg-brand-card/30 hover:bg-brand-card/60 hover:border-amber-500/35 transition-all flex flex-col justify-between h-44 overflow-hidden shadow-lg shadow-amber-500/[0.01]"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Globe className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 tracking-widest uppercase bg-amber-500/5 px-2 py-0.5 rounded-md">CORE</span>
              </div>
              <div className="mt-4">
                <h4 className="font-display font-bold text-base text-white tracking-tight group-hover:text-amber-400 transition-colors">Full-Stack Scale</h4>
                <p className="text-[11px] text-gray-400 mt-1 leading-normal font-sans">
                  Rigid architectures, secure databases, scalable server deployments, and zero-flicker UI systems.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
