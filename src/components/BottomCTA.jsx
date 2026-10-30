import React from 'react';
import { ArrowRight } from 'lucide-react';

const BottomCTA = () => {
  // Update these paths to where you store your images
  const images = {
    light: '/assets/cta-bg-light.png',
    dark: '/assets/cta-bg-dark.jpeg'
  };

  return (
    <div className="w-full flex flex-col items-center justify-start pt-24 border-t border-surface overflow-hidden">
      
      {/* Top Section: Content & CTA */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          Where you win <br />
          the Attention Game
        </h2>
        
        <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl">
          Join thousands of creators & brands using AB. Corp. to grow engagement, build connections, & monetize their following
        </p>
        
        <button className="group relative flex items-center gap-2 px-8 py-3 bg-transparent border border-surface text-primary rounded-full text-sm font-medium hover:border-muted transition-all overflow-hidden mb-8">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
          <span className="relative z-10">Start for free</span>
          <ArrowRight size={16} className="relative z-10" />
          
          <div className="absolute -inset-0.5 rounded-full border border-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <p className="text-sm font-mono text-muted flex items-center gap-2">
          Made with <span className="text-red-500">♥</span> in India
        </p>
      </div>

      {/* Bottom Section: Inline Image Showcase */}
      <div className="w-full max-w-6xl mx-auto md:px-12 flex justify-center relative">
        
        {/* Subtle background glow effect behind the image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <img 
          src={images.light} 
          alt="AB Corp Interface Light" 
          className="relative z-10 w-full h-auto object-cover rounded-2xl md:rounded-[2rem] border border-surface shadow-2xl dark:hidden"
        />
        <img 
          src={images.dark} 
          alt="AB Corp Interface Dark" 
          className="relative z-10 w-full h-auto object-cover rounded-2xl md:rounded-[2rem] border border-surface shadow-2xl hidden dark:block"
        />
      </div>
      
    </div>
  );
};

export default BottomCTA;