import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "VorXnate transformed our ad economy completely. Within 90 days, our ROAS jumped from 1.8x to 5.2x while scaling spend by 300%.",
    author: "Elena Rostova",
    role: "CMO, Aura Luxury Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their creative team moves faster than any agency I've ever worked with. The video ad creatives literally dominated our vertical.",
    author: "Marcus Sterling",
    role: "Founder, Hyperion Cloud",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-3 block">TESTIMONIALS</span>
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold">WHAT LEADERS SAY</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-10 rounded-3xl relative"
            >
              <div className="text-purple-500 text-5xl mb-6">“</div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-purple-500/30" />
                <div>
                  <h4 className="font-syne font-bold text-white text-lg">{t.author}</h4>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;