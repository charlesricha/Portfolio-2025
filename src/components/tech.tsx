import React from 'react';
import { technologies } from '@/lib/constants';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Tech = () => {
  return (
    <div className="py-16 sm:py-24">
      <div className="flex flex-row flex-wrap justify-center gap-6">
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
    </div>
  );
};

export default Tech;
