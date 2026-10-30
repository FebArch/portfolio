import React from 'react';
import { ArrowRight } from 'lucide-react';

const BentoCard = ({ title, mediaType, src, colSpan, className }) => {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-surface bg-surface/10 group min-h-[300px] md:min-h-[400px] ${colSpan} ${className}`}>
      
      {/* Media Layer */}
      {mediaType === 'video' ? (
        <video 
          src={src} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
        />
      ) : (
        <img 
          src={src} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
        />
      )}
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
      
      {/* Content Layer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex justify-between items-end">
        <h3 className="text-xl md:text-2xl font-medium text-white">{title}</h3>
        
        {/* Explore hover effect matching x.ai */}
        <span className="flex items-center gap-1 text-sm font-medium text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 cursor-pointer">
          Explore <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">

        {/* Row 1 */}
        <BentoCard 
          title="Code" 
          mediaType="image" 
          src="/assets/code.png" 
          colSpan="md:col-span-2 lg:col-span-2" 
        />
        <BentoCard 
          title="Design" 
          mediaType="image" 
          src="/assets/design.jpg" 
          colSpan="md:col-span-1 lg:col-span-2" 
        />
        <BentoCard 
          title="AI" 
          mediaType="image" 
          src="/assets/ai.jpg" 
          colSpan="md:col-span-1 lg:col-span-1" 
        />
        

        
        {/* Row 2 */}
        <BentoCard 
          title="Wear" 
          mediaType="image" 
          src="/assets/mafia.jpg" 
          colSpan="md:col-span-3 lg:col-span-3" 
        />
        <BentoCard 
          title="Measure" 
          mediaType="image" 
          src="/assets/cutting.jpg" 
          colSpan="md:col-span-1 lg:col-span-2" 
        />
      </div>
    </div>
  );
};

export default BentoGrid;