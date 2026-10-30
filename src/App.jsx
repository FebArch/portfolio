import React from 'react';
import Navbar from './components/Navbar'; // Import the Navbar
import HeroTitle from './components/HeroTitle';
import BentoGrid from './components/BentoGrid';
import ProductShowcase from './components/ProductShowcase';
import LorqusShowcase from './components/LorqusShowcase';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

import { Mail, ExternalLink } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const App = () => {
  // ... keep your projects and skills arrays exactly as they are ...

  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-primary selection:text-background">
      
      {/* Drop the Navbar here */}
      <Navbar />

      <main className="p-6 md:p-10 max-w-7xl mx-auto">
        
        {/* Replace the old static header with the new HeroTitle */}
        <HeroTitle />

        <section className="mb-12 w-full">
          <BentoGrid />
        </section>
        <h1 className='mt-10 ext-4xl md:text-5xl tracking-tight text-primary'>Projects</h1>

        {/* New Mulchurry Showcase Section */}
        <section className="mb-32 w-full">
          <ProductShowcase />
        </section>

        {/* Lorqus: Image on Left (Zig-Zag Layout) */}
        <section className="mb-12 w-full">
          <LorqusShowcase />
        </section>

      <BottomCTA />
      <Footer />

      </main>
    </div>
  );
};

export default App;