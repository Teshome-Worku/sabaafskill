"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: { om: 'Garaa', en: 'Home' }, href: '/' },
    { name: { om: "Waa'ee", en: 'About' }, href: '/about' },
    { name: { om: 'Barnoota', en: 'Courses' }, href: '/courses' },
    { name: { om: 'Milkaa\'inaa', en: 'Testimonials' }, href: '/testimonials' },
    { name: { om: 'Suuraalee', en: 'Gallery' }, href: '/gallery' },
    { name: { om: 'Quunnamtii', en: 'Contact' }, href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 relative z-10">
          <div className="relative w-10 h-10 overflow-hidden rounded-md">
            <Image 
              src="/images/logo/sabaafskilllogo.jpg" 
              alt="Sabaaf Skill Logo" 
              fill
              className="object-cover"
            />
          </div>
          <span className="font-heading font-bold text-xl hidden sm:block tracking-tight text-white">
            SABAAF SKILL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {t(link.name)}
            </Link>
          ))}
          <LanguageSwitcher />
          <Button asChild className="rounded-full px-6 shadow-[0_0_15px_rgba(26,107,240,0.3)]">
            <Link href="/register">
              {t({ om: "Galmaa'i Amma", en: "Register Now" })}
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden relative z-10">
          <LanguageSwitcher />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-3 -mr-2 focus:outline-none flex items-center justify-center min-h-[44px] min-w-[44px]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div 
          className={`fixed inset-0 bg-background z-40 transition-transform duration-300 flex flex-col pt-24 px-6 md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-xl font-heading font-semibold py-2 border-b border-white/10 ${
                  pathname === link.href ? 'text-primary' : 'text-foreground'
                }`}
              >
                {t(link.name)}
              </Link>
            ))}
            <div className="pt-6">
              <Button asChild size="lg" className="w-full rounded-full">
                <Link href="/register">
                  {t({ om: "Galmaa'i Amma", en: "Register Now" })}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
