import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Contact</h2>
            <h3 className="text-5xl font-black tracking-tighter mb-8 leading-[0.9]">READY TO <br />ASCEND?</h3>
            <p className="text-zinc-400 font-medium mb-12">
              Join the ranks of market leaders. Our team typically responds to new inquiries within 4 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm font-bold">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-orange-500">
                  <Mail className="w-4 h-4" />
                </div>
                growth@vorxnate.com
              </div>
              <div className="flex items-center gap-4 text-sm font-bold">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-orange-500">
                  <Globe className="w-4 h-4" />
                </div>
                Headquarters: Singapore & NYC
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-morphism p-8 md:p-12 rounded-[40px] relative">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Identity</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-orange-500 focus:outline-none transition-all text-sm font-bold" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Gateway</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-orange-500 focus:outline-none transition-all text-sm font-bold" placeholder="name@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Project Mission</label>
                  <textarea rows="3" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-orange-500 focus:outline-none transition-all text-sm font-bold resize-none" placeholder="Describe your objectives..."></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl flex items-center justify-center gap-4 hover:bg-orange-500 hover:text-white transition-all"
                >
                  INITIATE SIGNAL <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
