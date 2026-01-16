'use client';

import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Moon, Sun } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'GALLERY', href: '/home' },
    { label: 'BLOG', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="miyu."
      navLinks={navLinks}
      mainText="Tôi tin rằng cái đẹp không chỉ để nhìn, mà còn để cảm nhận..."
      readMoreLink="#"
      imageSrc="/assets/hoathien.png"
      imageAlt="A portrait of a person in a black turtleneck, in profile."
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
      socialLinks={socialLinks}
      locationText="Cao Thi Hoa Thom, Vietnam"
      themeToggle={
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-foreground/5 transition-all"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-foreground/80 hover:text-foreground transition-colors" />
          ) : (
            <Moon className="h-5 w-5 text-foreground/80 hover:text-foreground transition-colors" />
          )}
        </button>
      }
    />
  );
};

export default HeroSection;
