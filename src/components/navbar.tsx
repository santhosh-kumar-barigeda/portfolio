'use client';

import { useState, useEffect } from 'react';

import { Button } from './ui/button';
import { ToggleTheme } from '@/components/shared/theme-toggle';
import { NavLinks } from '@/components/nav-links';
import { Logo } from '@/components/logo';

interface Props {
  showLinks?: boolean;
}

export const Navbar = ({ showLinks = true }: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 z-20 w-full ${isScrolled ? 'border-b bg-background/50  backdrop-blur-md' : ''} transition duration-300`}>
      <div className='w-full max-w-6xl mx-auto px-4 py-4'>
        <div className='flex items-center justify-between gap-2'>
          <Logo />

          {showLinks && <NavLinks />}

          <div className='flex items-center gap-2'>
            <ToggleTheme />
            {showLinks && (
              <Button variant='special' size='sm' className='rounded-2xl h-7'>
                <a href='#contact'>Contact</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
