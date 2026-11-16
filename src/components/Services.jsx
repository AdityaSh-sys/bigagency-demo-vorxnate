import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Layers, BarChart, Users, Cpu } from 'lucide-react';

const solutions = [
  { icon: Zap, title: "Rapid Deployment", text: "Campaigns that go from concept to live in under 48 hours." },
  { icon: Target, title: "Precision Targeting", text: "LIDAR-style audience mapping for zero-waste spend." },
  { icon: Layers, title: "Full-Stack Creative", text: "End-to-end visual production optimized for every platform." },
  { icon: BarChart, title: "Neural Analytics", text: "AI-driven insights that predict consumer behavior." },
  { icon: Users, title: "Community Growth", text: "Turning passive observers into fanatical brand advocates." },
  { icon: Cpu, title: "AdTech Core", text: "Proprietary bidding algorithms for maximum ROI." },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#0c0c0c]">
      <div className="container-custom">
        <div className="mb-20">
          <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Core Solutions</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter">THE VORXNATE EDGE<span className="text-orange-500">.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-6 relative">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-all duration-500">
                  <item.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div className="absolute -inset-2 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-tight">{item.title}</h4>
              <p className="text-zinc-500 leading-relaxed text-sm font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
