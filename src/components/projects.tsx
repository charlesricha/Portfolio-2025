"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/constants';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Section from './section';
import { gsap } from 'gsap';

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { y: -10, scale: 1.03, duration: 0.3, ease: 'power1.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { y: 0, scale: 1, duration: 0.3, ease: 'power1.out' });
  };

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card className="flex flex-col h-full">
        <CardHeader>
          <div className="relative w-full h-[230px] rounded-t-lg overflow-hidden">
            <Image src={project.image} alt={project.name} layout="fill" objectFit="cover" data-ai-hint="application screenshot" />
          </div>
          <CardTitle className="mt-4 text-xl font-bold font-headline">{project.name}</CardTitle>
          <CardDescription className="mt-2 text-foreground/80 h-24 overflow-hidden">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag.name} variant="secondary">{tag.name}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" size="icon" asChild>
            <a href={project.source_code_link} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="default" size="icon" asChild>
            <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" className="animate-in fade-in-0 slide-in-from-bottom-12 duration-1000">
      <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
        My Projects
      </h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/projects">
            View All Projects
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default Projects;
