import React from 'react';
import Section from './section';
import { Button } from './ui/button';

const About = () => {
  return (
    <Section id="about" className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
      <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">Introduction</h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
        I am a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Next.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </p>
      <Button size="lg">Download CV</Button>
    </Section>
  );
};

export default About;
