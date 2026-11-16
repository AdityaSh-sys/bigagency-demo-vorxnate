import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-[#121212]/90 backdrop-blur-lg z-50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-black tracking-tighter text-white">Vor<span className="text-orange-500">X</span>nate</span>
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            {['Home', 'Services', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-400 hover:text-orange-500 font-medium transition-colors text-sm uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
