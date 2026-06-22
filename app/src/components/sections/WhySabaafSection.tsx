"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhyCard } from '@/components/ui/WhyCard';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { whyCards } from '@/data/whyCards';

export function WhySabaafSection() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-card/50 border-t border-b border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title={content[language].whySection.title}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyCards.map((card, index) => (
            <WhyCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
