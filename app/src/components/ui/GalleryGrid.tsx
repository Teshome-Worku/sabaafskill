"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { GalleryImage } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { language } = useLanguage();

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  const filters = [
    { id: 'all', label: { om: 'Hunda', en: 'All' } },
    { id: 'graduation', label: { om: 'Eebba', en: 'Graduation' } },
    { id: 'classroom', label: { om: 'Dareewwan', en: 'Classroom' } },
    { id: 'testimonial', label: { om: 'Barattoota', en: 'Testimonials' } },
  ];

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f.id
                ? 'bg-primary text-white shadow-[0_0_15px_rgba(26,107,240,0.4)]'
                : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-white'
            }`}
          >
            {language === 'om' ? f.label.om : f.label.en}
          </button>
        ))}
      </div>

      {/* CSS Columns Masonry Layout */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
      >
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={`${image.src}-${index}`}
              className="relative rounded-2xl overflow-hidden border border-white/5 group shadow-lg cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800} // providing dimensions helps next/image calculate aspect ratio
                height={800}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 mix-blend-overlay flex items-center justify-center">
                <ZoomIn className="w-10 h-10 text-white drop-shadow-md scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] aspect-auto flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1920}
                height={1080}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
