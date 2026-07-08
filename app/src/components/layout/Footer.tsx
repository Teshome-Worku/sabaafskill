"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Send, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Custom Telegram icon using SVG since Lucide's send is not exact
  const TelegramIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-18.6 7.143c-1.12.428-1.11.916-.205 1.194l4.773 1.492 1.106 3.498c.11.35.326.478.682.478.334 0 .484-.15.67-.33l2.25-2.19 4.678 3.454c.857.472 1.472.23 1.684-.794l3.05-14.364c.29-1.218-.456-1.765-1.066-1.554L21.2 2.433z"></path>
    </svg>
  );

  return (
    <footer className="bg-card text-card-foreground border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center md:text-left">

          {/* Brand Col */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-md">
                <Image
                  src="/images/logo/sabaafskilllogo.jpg"
                  alt="Sabaaf Skill Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                SABAAF SKILL
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mt-4">
              {t({
                om: "Dargaggoota Oromoo ogummaa dijitaalaa ammayyaa qaban uumuun gabaa hojii dijitaalaa keessatti akka dorgoman taasisuu.",
                en: "Empowering Oromo youth with practical digital skills to compete in the modern digital economy."
              })}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-lg mb-4">{t({ om: "Liinkii Saffisaa", en: "Quick Links" })}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">{t({ om: "Garaa", en: "Home" })}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t({ om: "Waa'ee Keenya", en: "About Us" })}</Link></li>
              <li><Link href="/courses" className="hover:text-primary transition-colors">{t({ om: "Barnoota", en: "Courses" })}</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">{t({ om: "Suuraalee", en: "Gallery" })}</Link></li>
              <li><Link href="/register" className="hover:text-primary transition-colors">{t({ om: "Galmaa'i", en: "Register" })}</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-lg mb-4">{t({ om: "Nu Quunnamaa", en: "Contact Us" })}</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Nekemte, Oromiyaa<br />Around Museum First Circle</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:0919574214" className="hover:text-primary transition-colors">0919 57 42 14</a>
              </li>
            </ul>
          </div>

          {/* Social Col */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-heading font-bold text-lg mb-4">{t({ om: "Nu Hordofaa", en: "Follow Us" })}</h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://t.me/Sabaafnekemte" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground" aria-label="Telegram" title="Follow Sabaaf Skill on Telegram">
                <TelegramIcon className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@sabaaf_skill" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground" aria-label="TikTok" title="Follow Sabaaf Skill on TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582630617181&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-muted-foreground" aria-label="Facebook" title="Follow Sabaaf Skill on Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground text-center md:text-left">
          <p>{content[language].footer.copyright} {currentYear}. {t({ om: "Mirgi hunduu seeraan eegamaadha.", en: "All rights reserved." })}</p>

        </div>
      </div>
    </footer>
  );
}
