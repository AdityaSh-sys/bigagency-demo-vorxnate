import React from 'react';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#080808]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-xl tracking-tighter">VORXNATE</span>
          </div>

          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
          </div>

          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            © 2024 VORXNATE ADVERTISING • SYSTEM_ID: BA_OS_1.0
          </div>
        </div>
      </div>
    </footer>
  );
}
