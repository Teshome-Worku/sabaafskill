"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { galleryImages } from '@/data/galleryImages';

export function GraduationSection() {
  const { language } = useLanguage();
  const c = content[language].graduationShowcase;
  
  // Get only graduation photos, limit to 6 for the homepage gallery preview
  const graduationPhotos = galleryImages
    .filter(img => img.category === 'graduation')
    .slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-card/30 border-y border-white/5 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeader 
          title={c.title}
          subtitle={c.subtitle}
          className="mb-16"
        />
        
        {/* Large Featured Image */}
        <div className="mb-6 relative rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[24/9] shadow-2xl border border-white/10 group">
          <Image
            src="/images/graduation/photo_1_2026-06-22_10-41-33.jpg"
            alt="Sabaaf Skill Graduation Banner"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-3">
              {language === 'om' ? '✦ Marsaa 3ffaa' : '✦ 3rd Graduation Batch'}
            </div>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-2">
              {language === 'om' ? 'Ogummaa Kee, Futura Kee' : 'Your Skill, Your Future'}
            </h3>
            <p className="text-white/70 max-w-xl text-lg">
              {language === 'om' ? 'Eebba barattoota keenya marsaa 3ffaa.' : 'Celebrating our 3rd batch of digital creators.'}
            </p>
          </div>
        </div>

        {/* Masonry-style Grid for other photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {graduationPhotos.slice(1, 5).map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden border border-white/5 shadow-lg group ${
                index === 0 || index === 3 ? 'aspect-[4/5] md:aspect-square' : 'aspect-square'
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-full border-primary/50 text-white hover:bg-primary/20 hover:text-white px-8">
            <Link href="/gallery">
              {c.button}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
