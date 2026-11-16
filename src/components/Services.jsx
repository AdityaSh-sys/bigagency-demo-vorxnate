import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, BarChart3, Palette, Globe, Target, Cpu } from 'lucide-react';

const services = [
  { title: 'Digital Ad Ops', desc: 'Enterprise-level ad operations with precision targeting.', icon: Megaphone },
  { title: 'Strategic Growth', desc: 'Data-backed roadmap for rapid market expansion.', icon: Target },
  { title: 'Visual Identity', desc: 'Crafting brand aesthetics that command attention.', icon: Palette },
  { title: 'Neural Metrics', desc: 'Predictive analytics to forecast campaign success.', icon: BarChart3 },
  { title: 'Global Presence', desc: 'Localization at scale across 50+ markets.', icon: Globe },
  { title: 'Automated Creative', desc: 'AI-driven asset generation for high-velocity ads.', icon: Cpu },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white">WHAT WE DO<span className="text-orange-500">.</span></h3>
          </div>
          <p className="text-gray-500 mt-6 md:mt-0 font-medium">Future-proof solutions for the next generation of brands.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#121212] p-10 rounded-[32px] border border-white/5 hover:border-orange-500/30 transition-all group"
            >
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors">
                <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 font-medium leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
