import React from 'react';
import Section from './section';
import Image from 'next/image';
import heroImage from '@/lib/placeholder-images.json';

const Hero = () => {
  return (
    <Section id="hero" className="relative w-full h-screen mx-auto flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left pt-24 md:pt-0 gap-8">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-80 h-40" style={{ background: 'linear-gradient(to bottom, hsl(var(--primary)), transparent)' }}/>
          </div>

          <div className="animate-in fade-in-0 slide-in-from-top-12 duration-1000 mt-16 md:mt-0">
            <h1 className="font-headline text-5xl md:text-6xl font-bold mt-16">
              Hi, I'm <span className="text-primary">Charles</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl max-w-xl">
              I develop captivating user interfaces, web applications, and everything in between.
            </p>
          </div>
        </div>
        
        <div className="relative w-full h-full min-h-[300px] md:min-h-0 flex items-center justify-center">
            <Image 
              src="/charles.png"
              alt="Charles Muthui image" 
              width={heroImage.heroCard.width} 
              height={heroImage.heroCard.height} 
              data-ai-hint={heroImage.heroCard.hint}
              className="max-w-[80%] h-auto md:max-w-full"
            />
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
