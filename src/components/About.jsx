import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
              alt="Creative team" 
              className="relative rounded-[40px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-orange-500 p-8 rounded-3xl shadow-2xl">
              <span className="text-5xl font-black text-white block">12+</span>
              <span className="text-white font-bold uppercase tracking-widest text-xs">Years of Mastery</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Our DNA</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              WHERE STRATEGY <br />MEETS ARTISTRY.
            </h3>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed font-medium">
              We don't just run ads; we engineer experiences. VorXnate was born out of the necessity for a data-first approach that never compromises on soul.
            </p>
            <div className="space-y-6">
              {[
                'Radical transparency in reporting.',
                'Cross-channel optimization as standard.',
                'Proprietary creative intelligence tools.'
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  <span className="text-white font-bold">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
