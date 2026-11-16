import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Innovating the Future of Advertising</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
          Amplify Your Brand <br />
          <span className="text-blue-600">Beyond Boundaries</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          VorXnate combines data-driven strategy with creative excellence to deliver advertising campaigns that don't just reach audiences—they resonate.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center hover:bg-gray-800 transition-all group">
            Launch Campaign
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl font-bold hover:border-gray-300 transition-all">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
