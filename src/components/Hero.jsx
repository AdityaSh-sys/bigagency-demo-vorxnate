import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-44 pb-28 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Glow Effects */}
      <div className="glow-bg top-10 left-1/4 -translate-x-1/2"></div>
      <div className="glow-bg bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
          Next-Gen Brand Acceleration Agency
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-syne text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-8"
        >
          WE TURN HIGH-PERFORMANCE <br className="hidden sm:inline" />
          BRANDS INTO <span className="text-gradient">CULTURE.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg sm:text-2xl max-w-3xl mx-auto leading-relaxed mb-12"
        >
          VorXnate combines algorithmic precision media buying with cinematic creative production to unlock hyper-growth for industry leaders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-5 max-w-md mx-auto"
        >
          <a href="#contact" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 font-bold text-white shadow-xl shadow-purple-900/40 hover:shadow-purple-600/60 hover:scale-[1.02] transition-all text-center">
            Launch Growth Engine
          </a>
          <a href="#work" className="px-8 py-4 rounded-2xl glass-card font-semibold text-slate-200 hover:bg-white/10 transition-all text-center border border-white/10">
            Explore Case Studies
          </a>
        </motion.div>

        {/* Client Logos / Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-8">Trusted by Industry Pioneers</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="font-syne font-bold text-2xl tracking-tighter text-slate-300">AURA</span>
            <span className="font-syne font-bold text-2xl tracking-tighter text-slate-300">NEXUS</span>
            <span className="font-syne font-bold text-2xl tracking-tighter text-slate-300">HYPERION</span>
            <span className="font-syne font-bold text-2xl tracking-tighter text-slate-300">VELOCITY</span>
            <span className="font-syne font-bold text-2xl tracking-tighter text-slate-300">VORTEX</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;