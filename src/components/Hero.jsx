import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 flex items-center min-h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter">
          WE BUILD <span className="text-gradient">LEGENDS</span><br/>NOT JUST ADS.
        </h1>
        <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-12">
          VorXnate is a next-generation advertising agency fusing data science with high-impact creativity to dominate the digital landscape.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-200 transition">
            See our impact
          </button>
          <button className="border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 transition">
            The Process
          </button>
        </div>
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
          <div className="text-center">50M+ AD SPEND</div>
          <div className="text-center">200+ CAMPAIGNS</div>
          <div className="text-center">15 GLOBAL AWARDS</div>
          <div className="text-center">10X AVG ROI</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;