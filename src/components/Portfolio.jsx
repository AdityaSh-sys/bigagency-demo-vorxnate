import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Aura Luxury Wear",
    category: "Paid Social & Omnichannel Creative",
    metrics: "+410% Revenue YoY",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Hyperion Cloud Tech",
    category: "Enterprise B2B Performance Campaign",
    metrics: "14.2x Pipeline ROAS",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Velocita Electric",
    category: "Global Product Launch",
    metrics: "$18M Pre-Orders Sealed",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  }
];

const Portfolio = () => {
  return (
    <section id="work" className="py-28 px-6 bg-[#050a18]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-3 block">PROVEN RESULTS</span>
          <h2 className="font-syne text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            FEATURED <span className="text-gradient">CASE STUDIES</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Real campaigns. Real telemetry. Exceptional returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg">
                  {project.metrics}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-2">{project.category}</span>
                  <h3 className="font-syne text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                </div>
                <button className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-purple-400 transition-colors pt-4 border-t border-white/5">
                  Read Breakdown
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;