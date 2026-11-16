import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10 bg-[#02050e] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="font-syne text-2xl font-extrabold text-white tracking-tight mb-2">
            VOR<span className="text-gradient">X</span>NATE
          </div>
          <p className="text-slate-500">© {new Date().getFullYear()} VorXnate Advertising Intelligence Group. All rights reserved.</p>
        </div>
        <div className="flex gap-8 font-semibold">
          <a href="#services" className="hover:text-purple-400 transition">Capabilities</a>
          <a href="#work" className="hover:text-purple-400 transition">Case Studies</a>
          <a href="#contact" className="hover:text-purple-400 transition">Audit</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;