import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "$120M+", label: "Client Revenue Generated" },
  { value: "4.8x", label: "Average Return on Ad Spend (ROAS)" },
  { value: "350M+", label: "Organic & Paid Ad Impressions" },
  { value: "98.2%", label: "Client Retention Rate" }
];

const Stats = () => {
  return (
    <section id="results" className="py-16 bg-[#060d1e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left border-l-2 border-purple-500/40 pl-6 py-2"
            >
              <div className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                <span className="text-gradient">{stat.value}</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;