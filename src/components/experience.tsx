import React from 'react';
import Image from 'next/image';
import { experiences } from '@/lib/constants';
import Section from './section';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ExperienceCard = ({ experience }: { experience: (typeof experiences)[0] }) => {
  return (
    <li className="mb-10 ms-6 relative">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-4 ring-background">
        <Image src={experience.icon} alt={experience.company_name} width={40} height={40} className="rounded-full" data-ai-hint="company logo" />
      </span>
      <Card className="ml-4">
        <CardHeader>
          <CardTitle className="text-xl font-bold font-headline">{experience.title}</CardTitle>
          <p className="text-md text-muted-foreground">{experience.company_name}</p>
          <p className="text-sm text-muted-foreground">{experience.date}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 list-disc ml-5">
            {experience.points.map((point, index) => (
              <li key={`experience-point-${index}`} className="text-foreground/80">
                {point}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </li>
  );
};

const Experience = () => {
  return (
    <Section id="experience" className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
      <h2 className="text-3xl md:text-5xl font-bold font-headline mb-12 text-center">
        Work Experience
      </h2>
      <div className="relative md:w-[70%] md:mx-auto">
        <div className="absolute left-2.5 top-2 h-full w-1 bg-border -translate-x-1/2"></div>
        <ol>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </ol>
      </div>
    </Section>
  );
};

export default Experience;
