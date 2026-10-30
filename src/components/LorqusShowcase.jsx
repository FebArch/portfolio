import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const LorqusShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Replace with your actual Lorqus terminal/engine screenshots
  const slides = [
    '/assets/lorqus-1.png',
    '/assets/lorqus-2.png',
    '/assets/lorqus-3.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side (Desktop) / Bottom (Mobile): Auto-Sliding Carousel */}
        <div className="order-2 lg:order-1 relative w-full aspect-[4/3] md:aspect-video lg:aspect-square xl:aspect-[4/3] rounded-2xl overflow-hidden border border-surface bg-surface/20 shadow-2xl">
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0 relative">
                <div className="absolute inset-0 bg-surface/40 flex items-center justify-center text-muted font-mono text-sm">
                  {`Lorqus Console ${index + 1}`}
                </div>
                <img 
                  src={slide} 
                  alt={`Lorqus Engine Interface ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-primary w-6' : 'bg-primary/30 hover:bg-primary/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side (Desktop) / Top (Mobile): Content & Typography */}
        <div className="order-1 lg:order-2 flex flex-col items-start">
          <span className="text-sm font-mono text-muted mb-6 tracking-widest uppercase">
            Open Source Intelligence
          </span>
          
          <img 
            src="/assets/lorqus-logo.png" 
            alt="Lorqus Logo" 
            className="h-10 md:h-12 w-auto mb-6 rounded" 
          />
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
            Lorqus. <br />
            Low-resource inference.
          </h2>
          
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
            A bare-metal artificial intelligence inference engine engineered from scratch in C/C++. Optimized for extreme memory efficiency through direct pointer arithmetic and custom binary weight parsing.
          </p>
          
          <div className="flex items-center gap-4 mb-16">
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-primary text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <FiGithub size={18} strokeWidth={2.5} />
              Source Code
              <ExternalLink size={16} strokeWidth={2} />
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 bg-transparent border border-surface text-primary px-6 py-3 rounded-full text-sm font-medium hover:border-muted transition-colors"
            >
              Read Docs
            </a>
          </div>

          <div className="flex gap-12 text-left">
            <div>
              <p className="text-xl font-bold text-primary mb-1">C/C++</p>
              <p className="text-xs text-muted font-mono">Architecture</p>
            </div>
            <div>
              <p className="text-xl font-bold text-primary mb-1">Zero</p>
              <p className="text-xs text-muted font-mono">Dependencies</p>
            </div>
            <div>
              <p className="text-xl font-bold text-primary mb-1">Bare-metal</p>
              <p className="text-xs text-muted font-mono">Optimization</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LorqusShowcase;