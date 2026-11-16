import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100 rounded-3xl -rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
              alt="Team collaborating" 
              className="relative rounded-3xl shadow-lg object-cover h-[500px] w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Driven by Data, Fueled by Creativity.</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At VorXnate, we believe that advertising is more than just noise. It's about creating meaningful connections between brands and people.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in the intersection of technology and art, our team of experts works tirelessly to ensure your brand stands out in an increasingly crowded marketplace.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-blue-600 mb-1">95%</h4>
                <p className="text-gray-600 font-medium">Client Retention</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-600 mb-1">500+</h4>
                <p className="text-gray-600 font-medium">Campaigns Launched</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
