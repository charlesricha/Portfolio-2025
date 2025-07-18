'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { navLinks } from '@/lib/constants';
import { Button } from './ui/button';
import { Menu, X, Code } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-4 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-16">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Code className="w-8 h-8 text-primary" />
          <p className="text-lg font-bold cursor-pointer font-headline">
            Charles
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  active === link.id ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <ul className="list-none flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <SheetTrigger asChild>
                      <a
                        href={`#${link.id}`}
                         className={`text-lg font-medium transition-colors hover:text-primary ${
                          active === link.id ? 'text-primary' : 'text-foreground/80'
                        }`}
                      >
                        {link.title}
                      </a>
                    </SheetTrigger>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
