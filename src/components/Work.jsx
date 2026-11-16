import React from 'react';

const Work = () => {
  return (
    <section className="py-24 bg-vorx">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Featured Impact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-gray-800">
            <img src="https://images.unsplash.com/photo-1493421416290-99a87242ad2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition duration-700" alt="Work 1" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-10 flex flex-col justify-end">
              <span className="text-sm font-bold text-purple-400 mb-2 uppercase tracking-widest">Fintech</span>
              <h3 className="text-3xl font-bold">Global Launch for Z-Bank</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl aspect-video bg-gray-800">
            <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition duration-700" alt="Work 2" />
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