"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard } from '@/components/ui/StatCard';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { stats } from '@/data/stats';

export function StatsSection() {
  const { language } = useLanguage();
  
  return (
    <section className="py-20 bg-background relative z-10 -mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title={content[language].stats.title}
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
