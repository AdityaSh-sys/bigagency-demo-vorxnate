import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/5 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-orange-400 px-4 py-2 rounded-full text-sm font-bold mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span className="uppercase tracking-widest text-[10px]">Pioneering Digital Excellence</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
        >
          AMPLIFY YOUR <br />
          <span className="text-orange-500">LEGACY.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          We bridge the gap between creative vision and performance metrics. VorXnate is your strategic partner in global brand dominance.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:row justify-center gap-6"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-orange-500 text-white rounded-2xl font-black flex items-center justify-center transition-all group"
          >
            LAUNCH PROJECT
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black hover:bg-white/10 transition-all"
          >
            VIEW SHOWREEL
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
