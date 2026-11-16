import React from 'react';
import { Rocket, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Rocket className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-extrabold tracking-tight text-gray-900">Vor<span className="text-blue-600">X</span>nate</span>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm font-medium">Cookie Policy</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-500">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/company/vorxnate/home/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-all text-gray-500">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-50 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} VorXnate Advertising. All rights reserved. Powered by BigAgency.</p>
        </div>
      </div>
    </footer>
  );
}
