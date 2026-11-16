import React from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <Rocket className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-extrabold tracking-tight text-gray-900">Vor<span className="text-blue-600">X</span>nate</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
