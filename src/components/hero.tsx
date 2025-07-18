import React from 'react';
import Section from './section';

const Hero = () => {
  return (
    <Section id="hero" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-primary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" style={{ background: 'linear-gradient(to bottom, hsl(var(--primary)), transparent)' }}/>
        </div>

        <div className="animate-in fade-in-0 slide-in-from-top-12 duration-1000">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold">
            Hi, I'm <span className="text-primary">Charles</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl max-w-3xl">
            I develop captivating user interfaces, web applications, and everything in between.
          </p>
        </div>
      </div>

      {/* The user can add their 3D object component here */}

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
