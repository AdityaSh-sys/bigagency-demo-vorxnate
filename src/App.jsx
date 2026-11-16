import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-vorx min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;