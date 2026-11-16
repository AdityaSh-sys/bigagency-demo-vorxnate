import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-vorx to-purple-950/30">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-5xl font-bold mb-8 italic">READY TO DOMINATE?</h2>
        <p className="text-gray-300 text-xl mb-12">We only partner with brands that are ready for aggressive growth. If that's you, let's talk.</p>
        <form className="space-y-6">
          <input type="text" placeholder="Brand Name" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-purple-500 transition" />
          <input type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-purple-500 transition" />
          <textarea placeholder="Tell us your goals" rows="4" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-purple-500 transition"></textarea>
          <button className="w-full bg-white text-black py-5 rounded-2xl font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300">
            Initiate Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;