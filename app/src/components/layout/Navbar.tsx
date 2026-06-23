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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: { om: 'Garaa', en: 'Home' }, href: '/' },
    { name: { om: "Waa'ee", en: 'About' }, href: '/about' },
    { name: { om: 'Barnoota', en: 'Courses' }, href: '/courses' },
    { name: { om: "Milkaa'inaa", en: 'Testimonials' }, href: '/testimonials' },
    { name: { om: 'Suuraalee', en: 'Gallery' }, href: '/gallery' },
    { name: { om: 'Quunnamtii', en: 'Contact' }, href: '/contact' },
  ];

  return (
    <>
      {/* ─── Sticky Navbar Bar — height NEVER changes, only bg transitions ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
          isScrolled
            ? 'bg-[#080C16] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-md shrink-0">
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

          {/* Mobile: Language Switcher + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none flex items-center justify-center min-h-[44px] min-w-[44px]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Slide-Out Drawer (completely separate from header, never clips it) ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dimmed backdrop — tap to close */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel slides in from the right */}
        <aside
          className={`absolute top-0 right-0 bottom-0 w-4/5 max-w-[300px] bg-[#0B1120] border-l border-white/10 flex flex-col pt-24 px-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-heading font-semibold py-3 px-4 rounded-xl transition-colors ${
                  pathname === link.href
                    ? 'text-primary bg-primary/10'
                    : 'text-white hover:text-primary hover:bg-white/5'
                }`}
              >
                {t(link.name)}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10">
            <Button asChild size="lg" className="w-full rounded-full shadow-[0_0_20px_rgba(26,107,240,0.3)]">
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                {t({ om: "Galmaa'i Amma", en: "Register Now" })}
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </>
  );
}
