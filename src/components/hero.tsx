import React from 'react';
import Section from './section';

const Hero = () => {
  return (
    <Section id="hero" className="relative w-full h-screen mx-auto flex items-center pt-32 sm:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-row items-start gap-5">
           <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-80 h-40" style={{ background: 'linear-gradient(to bottom, hsl(var(--primary)), transparent)' }}/>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-top-12 duration-1000">
            <h1 className="font-headline text-5xl md:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Charles</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl max-w-xl">
              I develop captivating user interfaces, web applications, and everything in between.
            </p>
          </div>
        </div>
        
        {/* Placeholder for your 3D object component */}
        <div className="relative w-full h-full min-h-[300px] md:min-h-0 flex items-center justify-center">
            {/* You can add your 3D object component here */}
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-primary flex justify-center items-start p-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce mb-1" style={{animationDuration: '1.5s', animationIterationCount: 'infinite'}} />
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Hero;
