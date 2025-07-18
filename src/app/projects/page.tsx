import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/constants';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <Card className="flex flex-col h-full animate-in fade-in-0 zoom-in-95 duration-500">
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
  );
};

const AllProjectsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-7xl mx-auto px-6 sm:px-16 py-16 sm:py-24">
        <div className="flex items-center mb-12">
          <Button asChild variant="ghost">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4 text-center">All Projects</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
          Here is a collection of all my projects, showcasing my skills in various technologies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AllProjectsPage;
