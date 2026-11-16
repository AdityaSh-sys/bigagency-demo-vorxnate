import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 relative bg-gradient-to-b from-[#030712] via-[#090014] to-[#030712]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-3 block">READY TO DOMINATE?</span>
          <h2 className="font-syne text-5xl sm:text-7xl font-extrabold tracking-tight mb-6">
            LET'S BUILD YOUR <span className="text-gradient">EMPIRE</span>.
          </h2>
          <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto">
            We partner with ambitious brands generating $1M+ ARR looking to scale aggressively.
          </p>

          {submitted ? (
            <div className="glass-card p-12 rounded-3xl text-center border-purple-500/50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
              <h3 className="font-syne text-3xl font-bold text-white mb-2">Strategy Audit Requested</h3>
              <p className="text-slate-300">Our growth lead will contact your team within 12 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 sm:p-12 rounded-3xl space-y-6 text-left border-white/10 shadow-2xl">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Your Name</label>
                  <input required type="text" placeholder="Sarah Jenkins" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Work Email</label>
                  <input required type="email" placeholder="sarah@brand.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Monthly Ad Spend</label>
                  <select className="w-full bg-[#0d1322] border border-white/10 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-purple-500 transition-colors">
                    <option>$25k - $50k / month</option>
                    <option>$50k - $150k / month</option>
                    <option>$150k+ / month</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Brand Website</label>
                  <input required type="url" placeholder="https://yourbrand.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Primary Goal</label>
                <textarea rows="3" placeholder="Tell us about your target ROI and scaling blockers..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"></textarea>
              </div>
              <button type="submit" className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 font-bold text-white text-lg tracking-wide hover:opacity-95 transition-all shadow-xl shadow-purple-900/40">
                Apply for Growth Strategy Audit
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;