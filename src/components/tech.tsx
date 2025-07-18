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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center max-w-4xl mx-auto">
        {technologies.map((technology) => (
          <TooltipProvider key={technology.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="tech-card">
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
