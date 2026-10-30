import React from 'react';
import { ArrowRight } from 'lucide-react';

const BottomCTA = () => {
  const bgImages = {
    light: '/assets/cta-bg-light.png',
    dark: '/assets/cta-bg-dark.png'
  };

  return (
    <div className="mt-32 relative w-full min-h-[600px] flex flex-col items-center justify-start pt-24 pb-16 px-6 overflow-hidden border-t border-surface">
      
      {/* Background Images: Removed opacity-80 to restore full brightness */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <img 
          src={bgImages.light} 
          alt="AB Corp Background Light" 
          className="w-full h-full object-cover object-bottom dark:hidden"
        />
        <img 
          src={bgImages.dark} 
          alt="AB Corp Background Dark" 
          className="w-full h-full object-cover object-bottom hidden dark:block"
        />
        
        {/* Adjusted Gradients: Now they only fade the top and bottom 10rem (40 units) to blend with the page, leaving the center untouched */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6">
          Where you win <br />
          the Attention Game
        </h2>
        
        <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl">
          Join thousands of creators & brands using AB. Corp. to grow engagement, build connections, & monetize their following
        </p>
        
        <button className="group relative flex items-center gap-2 px-8 py-3 bg-transparent border border-surface text-primary rounded-full text-sm font-medium hover:border-muted transition-all overflow-hidden mb-8 text-black">
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors bg-white text-black" />
          <span className="relative z-10 text-black">Start for free</span>
          <ArrowRight size={16} className="relative z-10 text-black" />
          
          <div className="absolute -inset-0.5 rounded-full border border-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <p className="text-sm font-mono text-muted flex items-center gap-2">
          Made with <span className="text-red-500">♥</span> in India
        </p>
      </div>
    </div>
  );
};

export default BottomCTA;