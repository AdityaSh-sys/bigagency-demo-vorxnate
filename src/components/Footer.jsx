import React from 'react';
import { Rocket, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-12 md:mb-0">
            <div className="flex items-center space-x-2 mb-6">
              <Rocket className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-black text-white">Vor<span className="text-orange-500">X</span>nate</span>
            </div>
            <p className="text-gray-500 max-w-sm font-medium">The new standard in digital advertising and brand acceleration.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-20">
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Social</h4>
              <div className="space-y-4">
                <a href="#" className="flex items-center text-gray-500 hover:text-orange-500 transition-colors font-bold text-sm">
                  <Twitter className="w-4 h-4 mr-2" /> Twitter
                </a>
                <a href="#" className="flex items-center text-gray-500 hover:text-orange-500 transition-colors font-bold text-sm">
                  <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">Legal</h4>
              <div className="space-y-4 font-bold text-sm">
                <a href="#" className="block text-gray-500 hover:text-orange-500 transition-colors">Privacy</a>
                <a href="#" className="block text-gray-500 hover:text-orange-500 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-600 text-xs font-black uppercase tracking-[0.2em]">© {new Date().getFullYear()} VORXNATE ADVERTISING. ALL SYSTEMS OPERATIONAL.</p>
          <p className="text-gray-600 text-xs mt-4 md:mt-0 font-bold">POWERED BY BIGAGENCY</p>
        </div>
      </div>
    </footer>
  );
}
