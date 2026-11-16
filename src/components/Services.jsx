import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: "🎯",
    title: "Performance Ad Scaling",
    desc: "AI-optimized paid acquisition across Meta, TikTok, Google, and Connected TV with real-time attribution matrixing."
  },
  {
    icon: "🎬",
    title: "Cinematic Content Production",
    desc: "In-house creative studio engineering viral short-form hooks, high-converting UGC, and high-production commercials."
  },
  {
    icon: "🧠",
    title: "Brand Intelligence & Strategy",
    desc: "Positioning architecture that reframes your product, establishes authority, and locks out category competitors."
  },
  {
    icon: "⚡",
    title: "Conversion Engine Optimization",
    desc: "Bespoke landing page architecture and high-velocity CRO split testing to maximize yield on every paid visitor."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-3 block">CORE CAPABILITIES</span>
            <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight">
              PRECISION MEDIA. <br />
              <span className="text-gradient">UNSTOPPABLE CREATIVE.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-base leading-relaxed">
            We eliminate guessing. Every strategy is built on real-time data telemetry and psychological trigger points.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-10 rounded-3xl relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="font-syne text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-base">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;