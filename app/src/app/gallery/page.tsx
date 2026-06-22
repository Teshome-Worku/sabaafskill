"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { useLanguage } from '@/hooks/useLanguage';
import { galleryImages } from '@/data/galleryImages';

export default function GalleryPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader 
            title={language === 'om' ? 'Suuraalee' : 'Gallery'}
            subtitle={
              language === 'om' 
                ? 'Sochii fi milkaa\'ina barattoota keenyaa daawwadhaa.' 
                : 'Explore the activities and successes of our students.'
            }
            className="mb-12 mt-10"
          />
        </motion.div>
        
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
