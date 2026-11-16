import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121212] rounded-[48px] p-8 md:p-16 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500/5 blur-[100px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
            <div>
              <h2 className="text-orange-500 font-bold uppercase tracking-[0.3em] text-sm mb-4">Contact</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8">LET'S BUILD<br /> THE FUTURE.</h3>
              <p className="text-gray-400 text-lg mb-12 font-medium">Ready to scale? Drop us a line and our partners will reach out within 24 hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Mail className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Email</p>
                    <p className="text-xl font-bold text-white">hello@vorxnate.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <Phone className="w-6 h-6 text-orange-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Call</p>
                    <p className="text-xl font-bold text-white">+91 95608 74123</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1a1a1a] p-10 rounded-[32px] border border-white/5 shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Identity</label>
                  <input type="text" className="w-full bg-[#121212] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-orange-500 focus:outline-none transition-all" placeholder="E.g. Elon Musk" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Direct Contact</label>
                  <input type="email" className="w-full bg-[#121212] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-orange-500 focus:outline-none transition-all" placeholder="name@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Brief</label>
                  <textarea rows="4" className="w-full bg-[#121212] border border-white/10 rounded-xl px-6 py-4 text-white focus:border-orange-500 focus:outline-none transition-all" placeholder="How can we help?"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-orange-500 text-white font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-all flex items-center justify-center"
                >
                  SEND SIGNAL <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
