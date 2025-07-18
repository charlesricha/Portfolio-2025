import React from 'react';
import { technologies } from '@/lib/constants';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Section from './section';

const Tech = () => {
  return (
    <Section id="tech" className="py-16 sm:py-24">
       <h2 className="text-3xl md:text-5xl font-bold font-headline mb-12 text-center">
        Technologies
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-8 justify-items-center max-w-4xl mx-auto">
        {technologies.map((technology) => (
          <TooltipProvider key={technology.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-12 h-12 md:w-20 md:h-20 p-2 rounded-lg bg-card border border-transparent flex items-center justify-center transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_theme(colors.primary)]">
                  <technology.icon className="w-full h-full text-foreground" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{technology.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </Section>
  );
};

export default Tech;
