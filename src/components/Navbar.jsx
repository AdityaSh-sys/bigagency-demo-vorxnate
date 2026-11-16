import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Philosophy', href: '#about' },
  { name: 'Project', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass-morphism rounded-full px-6 py-3 flex items-center gap-8 md:gap-12">
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-orange-500" />
          <span className="font-bold tracking-tighter text-lg">VORXNATE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-orange-500 text-white text-xs font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors"
        >
          CONNECT <ChevronRight className="w-3 h-3" />
        </motion.a>
      </div>
    </motion.nav>
  );
}
