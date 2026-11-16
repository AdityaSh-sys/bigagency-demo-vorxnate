import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 p-[2px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center font-syne font-extrabold text-lg text-white">
              VX
            </div>
          </div>
          <span className="font-syne text-2xl font-extrabold tracking-tight text-white">
            VOR<span className="text-gradient">X</span>NATE
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#services" className="text-slate-300 hover:text-purple-400 transition-colors">Capabilities</a>
          <a href="#work" className="text-slate-300 hover:text-purple-400 transition-colors">Case Studies</a>
          <a href="#results" className="text-slate-300 hover:text-purple-400 transition-colors">Impact</a>
          <a href="#testimonials" className="text-slate-300 hover:text-purple-400 transition-colors">Reviews</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="relative group px-6 py-2.5 rounded-full font-bold text-sm overflow-hidden p-[1px]">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
            <span className="relative px-6 py-2.5 bg-[#030712] rounded-full flex items-center gap-2 group-hover:bg-transparent transition-all duration-300">
              Start Campaign
              <svg className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-white p-2 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenu ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6"
          >
            <div className="flex flex-col gap-4 font-semibold text-lg">
              <a href="#services" onClick={() => setMobileMenu(false)} className="text-slate-300 hover:text-purple-400">Capabilities</a>
              <a href="#work" onClick={() => setMobileMenu(false)} className="text-slate-300 hover:text-purple-400">Case Studies</a>
              <a href="#results" onClick={() => setMobileMenu(false)} className="text-slate-300 hover:text-purple-400">Impact</a>
              <a href="#contact" onClick={() => setMobileMenu(false)} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-3 rounded-xl font-bold">Start Campaign</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;