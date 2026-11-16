import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="fixed w-full z-50 px-6 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md">
    <div className="text-2xl font-black italic tracking-tighter">VOR<span className="text-pink-600">X</span>NATE</div>
    <div className="flex gap-8 font-bold text-sm tracking-widest uppercase">
      {['Strategy', 'Creative', 'Impact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-600 transition">{item}</a>)}
    </div>
    <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600 transition">INQUIRE</button>
  </nav>
);

const Hero = () => (
  <section className="min-h-screen flex items-center pt-20 px-6">
    <motion.div 
      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto text-center"
    >
      <h1 className="text-[12vw] font-black leading-none mb-10 italic uppercase">
        ADVERTISING <br/> <span className="text-pink-600">REIMAGINED</span>
      </h1>
      <p className="text-2xl text-slate-500 max-w-2xl mx-auto mb-16">Data-driven performance meets untamed creative. We don't just run ads; we shape cultural moments.</p>
      <motion.div whileHover={{ scale: 1.1 }} className="inline-block w-20 h-20 bg-pink-600 rounded-full"></motion.div>
    </motion.div>
  </section>
);

export default function App() {
  return <div className="bg-[#fafafa] text-black font-sans"><Navbar /><Hero /></div>;
}