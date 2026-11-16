import React from 'react';

const Work = () => {
  return (
    <section id="work" className="py-24 bg-vorx">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Featured Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop" 
              className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition duration-700" 
              alt="Global Campaign" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x675/1a1a1a/ffffff?text=Global+Campaign'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
              <span className="text-sm font-bold text-purple-400 mb-2 uppercase tracking-widest">Fintech</span>
              <h3 className="text-3xl font-bold">Global Launch for Z-Bank</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-gray-800">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition duration-700" 
              alt="Luxury Campaign" 
              onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x675/1a1a1a/ffffff?text=Aura+Campaign'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
              <span className="text-sm font-bold text-pink-400 mb-2 uppercase tracking-widest">Luxury</span>
              <h3 className="text-3xl font-bold">The Aura Campaign</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;