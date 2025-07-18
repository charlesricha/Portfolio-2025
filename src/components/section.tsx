import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section = ({ children, id, className }: SectionProps) => {
  return (
    <section id={id} className={cn("w-full max-w-7xl mx-auto px-6 sm:px-16 py-16 sm:py-24 relative", className)}>
      {/* This span is a hack to offset the anchor link scrolling due to the fixed navbar */}
      <span className="absolute -top-[100px]" id={id}></span>
      {children}
    </section>
  );
};

export default Section;
