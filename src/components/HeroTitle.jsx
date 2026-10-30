import React, { useState, useEffect } from 'react';

const HeroTitle = () => {
  // You can easily add, remove, or change words in this array
  const actionWords = ["build.", "envision.", "launch.", "design.", "create."];
  
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade out
      setFade(false);
      
      // Wait for the opacity transition to finish, then swap the word and fade back in
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % actionWords.length);
        setFade(true);
      }, 500); // This 500ms matches the Tailwind duration-500 class below
      
    }, 5000); // 5 seconds total cycle

    return () => clearInterval(interval);
  }, [actionWords.length]);

  return (
    <div className="mt-32 mx-auto max-w-3xl flex flex-col items-center justify-center pb-16 px-6 text-center font-[Aladin]">
      <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] md:leading-[1.15]">
        Precision engineering and bespoke <br className="hidden md:block" />
        fashioning for everything you{' '}
        <span 
          className={`inline-block transition-opacity duration-500 ease-in-out underline decoration-muted underline-offset-[8px] md:underline-offset-[12px] ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {actionWords[index]}
        </span>
      </h1>
      
      <p className="mt-8 text-lg md:text-xl text-muted font-mono max-w-2xl mx-auto">
        Your friendly neighbour-hood engineer & designer
      </p>
    </div>
  );
};

export default HeroTitle;