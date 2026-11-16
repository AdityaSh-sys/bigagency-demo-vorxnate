import React from 'react';
import { Megaphone, BarChart3, Palette, Globe, Target, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Digital Advertising',
    description: 'Precision-targeted campaigns across Google, Meta, and emerging platforms to maximize ROI.',
    icon: Megaphone,
  },
  {
    title: 'Brand Strategy',
    description: 'Deep-dive analysis to define your unique voice and position in competitive markets.',
    icon: Target,
  },
  {
    title: 'Creative Content',
    description: 'High-impact visual and written content that captures attention and drives action.',
    icon: Palette,
  },
  {
    title: 'Performance Data',
    description: 'Real-time analytics and reporting to optimize every dollar spent on your marketing.',
    icon: BarChart3,
  },
  {
    title: 'Global Outreach',
    description: 'Multi-regional campaigns tailored to local cultures while maintaining global brand consistency.',
    icon: Globe,
  },
  {
    title: 'AI Marketing',
    description: 'Leveraging cutting-edge AI tools for automation and hyper-personalized customer journeys.',
    icon: Cpu,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive suite of advertising services designed to scale your business in the digital age.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
