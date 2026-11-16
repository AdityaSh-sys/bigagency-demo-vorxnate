import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements based on skill file design language */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-[100px] -z-10" />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block glass-morphism px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] text-orange-400 mb-8 uppercase"
        >
          AdTech Reimagined
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-balance mb-8"
        >
          WE ENGINEER <br />
          <span className="text-orange-500 italic">DOMINANCE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed text-balance"
        >
          High-performance advertising for brands that refuse to blend in. VorXnate combines neural data with radical creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-orange-500 text-white rounded-xl font-black text-sm tracking-widest flex items-center gap-3 orange-glow hover:bg-orange-600 transition-all"
          >
            START CAMPAIGN <ArrowUpRight className="w-5 h-5" />
          </motion.button>
          
          <button className="flex items-center gap-3 text-sm font-bold text-zinc-300 hover:text-white transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
              <Play className="w-4 h-4 fill-white" />
            </div>
            VIEW PROCESS
          </button>
        </motion.div>
      </div>

      {/* Decorative vertical lines from skill file concept */}
      <div className="absolute left-12 bottom-0 w-px h-32 bg-gradient-to-t from-orange-500/50 to-transparent hidden lg:block" />
      <div className="absolute right-12 bottom-0 w-px h-32 bg-gradient-to-t from-orange-500/50 to-transparent hidden lg:block" />
    </section>
  );
}
