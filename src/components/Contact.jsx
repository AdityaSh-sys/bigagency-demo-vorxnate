import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Create Something Iconic.</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to take your brand to the next level? Get in touch with our team of specialists today.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <p className="text-lg font-semibold">info@vorxnate.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <p className="text-lg font-semibold">+91 95608 74123</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
