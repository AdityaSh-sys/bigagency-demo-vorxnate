import React from 'react';

const services = [
  { title: "Performance Ad Ops", desc: "Hyper-targeted campaigns focused on conversion and scale.", color: "purple" },
  { title: "Content Engine", desc: "Virality-optimized assets for social and streaming platforms.", color: "pink" },
  { title: "Strategic Branding", desc: "Forging indestructible identities in a crowded market.", color: "indigo" },
  { title: "Influencer Fusion", desc: "Connecting brands with high-authority digital voices.", color: "blue" }
];

const Services = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Arsenal</h2>
            <p className="text-gray-400 text-xl max-w-xl">Multi-channel excellence driven by the latest in marketing tech.</p>
          </div>
          <button className="text-purple-400 font-bold text-lg border-b-2 border-purple-400 pb-1">View all capabilities</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl group hover:border-purple-500/50 transition duration-500">
              <div className={`w-12 h-1 w-12 bg-purple-600 mb-8 group-hover:w-full transition-all duration-500`}></div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;