import React from 'react';
import { skills } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Section from './section';

const Skills = () => {
  return (
    <Section id="skills" className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
      <h2 className="text-3xl md:text-5xl font-bold font-headline mb-12 text-center">
        My Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.name} className="text-center transition-transform transform hover:-translate-y-2">
            <CardHeader>
              <skillCategory.icon className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle className="font-headline">{skillCategory.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {skillCategory.technologies.map((tech) => (
                  <li key={tech} className="text-muted-foreground">{tech}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
