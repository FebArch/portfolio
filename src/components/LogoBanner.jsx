import React from 'react';

const LogoBanner = () => {
  // Array to manage your logos easily
  const logos = [
    { 
      name: 'Trustpilot', 
      src: '/assets/saheb.png', 
      // Set to true if the logo has black text that needs to turn white in dark mode
      needsInvert: false 
    },
    { 
      name: 'Meta Tech Provider', 
      src: '/assets/abhinay.png', 
      needsInvert: true // The word "Meta" is black, so it must invert in dark mode
    },
    { 
      name: 'G2', 
      src: '/assets/g2.png', 
      needsInvert: false 
    },
    { 
      name: 'DPIIT Startup India', 
      src: '/assets/dpiit-startup.png', 
      needsInvert: true // The black text will invert to white in dark mode
    },
  ];

  return (
    <div className="w-full py-16 border-t border-surface">
      <div className="flex flex-col items-center">
        <span className="text-xs font-mono text-muted mb-10 tracking-widest uppercase text-center">
          Trusted & Recognized By
        </span>
        
        <div className="w-full flex flex-wrap justify-center md:justify-between items-center gap-12 md:gap-8 lg:gap-12 px-4 md:px-0">
          {logos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.name} 
              className={`
                h-10 md:h-12 w-auto object-contain 
                grayscale opacity-70 hover:grayscale-0 hover:opacity-100 
                transition-all duration-300
                ${logo.needsInvert ? 'dark:invert' : ''}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBanner;