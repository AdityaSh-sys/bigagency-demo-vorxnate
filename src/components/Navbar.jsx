import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-vorx/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold tracking-tighter italic">
          VOR<span className="text-purple-500">X</span>NATE
        </div>
        <div className="hidden md:flex space-x-10 font-semibold tracking-wide">
          <a href="#" className="hover:text-purple-400 transition">Strategy</a>
          <a href="#" className="hover:text-purple-400 transition">Creative</a>
          <a href="#" className="hover:text-purple-400 transition">Case Studies</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-full font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition">
          Work with us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;