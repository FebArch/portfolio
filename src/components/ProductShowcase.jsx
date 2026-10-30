import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // You will replace these with your actual Mulchurry screenshots
  const slides = [
    '/assets/mulchurry-1.png',
    '/assets/mulchurry-2.png',
    '/assets/mulchurry-3.png',
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full py-10 border-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Content & Typography */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-mono text-muted mb-6 tracking-widest uppercase">
            Flagship Software
          </span>
          
          {/* --- NEW LOGO ADDED HERE --- */}
          <img 
            src="/assets/mulchurry-logo.png" 
            alt="Mulchurry Logo" 
            className="h-10 md:h-12 w-auto mb-6" 
          />
          {/* --------------------------- */}
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
            Mulchurry. <br />
            Order management.
          </h2>
          
          <p className="text-lg text-muted leading-relaxed mb-8 max-w-md">
            A purpose-built digital ecosystem for bespoke tailoring. Streamline coat and blazer orders, track measurements, and manage workshop pipelines through a single unified interface.
          </p>
          
          <div className="flex items-center gap-4 mb-16">
            <a 
              href="#" 
              className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Live Demo <ExternalLink size={16} />
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 bg-transparent border border-surface text-primary px-6 py-3 rounded-full text-sm font-medium hover:border-muted transition-colors"
            >
              View Architecture
            </a>
          </div>

          {/* Stats Section matching the x.ai layout */}
          <div className="flex gap-12 text-left">
            <div>
              <p className="text-xl font-bold text-primary mb-1">Full-Stack</p>
              <p className="text-xs text-muted font-mono">Architecture</p>
            </div>
            <div>
              <p className="text-xl font-bold text-primary mb-1">PostgreSQL</p>
              <p className="text-xs text-muted font-mono">Database</p>
            </div>
            <div>
              <p className="text-xl font-bold text-primary mb-1">Real-time</p>
              <p className="text-xs text-muted font-mono">Sync</p>
            </div>
          </div>
        </div>

        {/* Right Side: Auto-Sliding Carousel */}
        <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-square xl:aspect-[4/3] rounded-2xl overflow-hidden border border-surface bg-surface/20 shadow-2xl">
          
          {/* Slider Track */}
          <div 
            className="flex h-full w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0 relative">
                {/* Fallback background block in case image is missing */}
                <div className="absolute inset-0 bg-surface/40 flex items-center justify-center text-muted font-mono text-sm">
                  {`Slide ${index + 1}`}
                </div>
                <img 
                  src={slide} 
                  alt={`Mulchurry Interface ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              </div>
            ))}
          </div>

          {/* Carousel Navigation Dots */}
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
      </div>
    </div>
  );
};

export default ProductShowcase;