import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Our Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              WE DON'T FOLLOW <br /> TRENDS. WE <span className="text-orange-500 italic">SET THEM.</span>
            </h3>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-medium">
              VorXnate was founded on a single premise: Digital advertising is broken. Most agencies focus on noise; we focus on resonance.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-4xl font-black text-white block mb-1">$400M+</span>
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Managed Spend</span>
              </div>
              <div>
                <span className="text-4xl font-black text-white block mb-1">12:1</span>
                <span className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Average ROAS</span>
              </div>
            </div>

            <button className="text-orange-500 text-xs font-black uppercase tracking-widest border-b border-orange-500/30 pb-2 hover:border-orange-500 transition-all">
              Learn our methodology
            </button>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] bg-[#121212] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000" 
                alt="Tech office" 
                className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
            
            {/* Floating UI card as seen in professional modern agency sites */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-morphism p-6 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#121212] bg-zinc-800" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold">Trusted by 500+</p>
                  <p className="text-[10px] text-zinc-500">Global Enterprises</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
