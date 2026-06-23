"use client";

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function StickyContactButton() {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col gap-3 items-end">
      {/* Telegram Button */}
      <a
        href="https://t.me/Sabaafnekemte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on Telegram"
        className="group flex items-center gap-3 bg-[#2AABEE] hover:bg-[#229ED9] text-white rounded-full px-4 py-3 shadow-[0_4px_20px_rgba(42,171,238,0.5)] hover:shadow-[0_4px_30px_rgba(42,171,238,0.7)] transition-all duration-300"
      >
        <span className="text-sm font-semibold hidden group-hover:block max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
          {language === 'om' ? 'Telegram Nu Quunnamaa' : 'Message on Telegram'}
        </span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </a>

      {/* Phone Button */}
      <a
        href="tel:0919574214"
        aria-label="Call us"
        className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-white rounded-full px-4 py-3 shadow-[0_4px_20px_rgba(26,107,240,0.5)] hover:shadow-[0_4px_30px_rgba(26,107,240,0.7)] transition-all duration-300"
      >
        <span className="text-sm font-semibold hidden group-hover:block max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300">
          {language === 'om' ? 'Nuuf Bilbilaa' : 'Call Us'}
        </span>
        <Phone className="w-6 h-6 shrink-0" />
      </a>
    </div>
  );
}
