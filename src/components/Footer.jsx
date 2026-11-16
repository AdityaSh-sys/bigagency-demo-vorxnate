import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500">
        <div className="text-xl font-bold text-white tracking-tighter">VORXNATE</div>
        <div className="flex space-x-12 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">LinkedIn</a>
        </div>
        <div className="text-sm">© 2026 VORXNATE ADVERTISING GROUP.</div>
      </div>
    </footer>
  );
};

export default Footer;