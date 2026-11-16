import React, { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-vorx/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter italic">
          <a href="#">VOR<span className="text-purple-500">X</span>NATE</a>
        </div>
        <div className="hidden md:flex space-x-10 font-semibold tracking-wide">
          <a href="#services" className="hover:text-purple-400 transition">Strategy</a>
          <a href="#work" className="hover:text-purple-400 transition">Creative</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>
        <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition">
          Work with us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;