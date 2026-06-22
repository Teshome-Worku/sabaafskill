"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { useLanguage } from '@/hooks/useLanguage';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader 
            title={language === 'om' ? 'Yaada Barattootaa' : 'Student Testimonials'}
            subtitle={
              language === 'om' 
                ? 'Dhugaa barattoonni keenya ragaa bahan dhaggeeffadhaa. Nuti waadaa qofa osoo hin taane, bu\'aa qabatamaa ni argisiifna.' 
                : 'Listen to the true testimonies of our students. We don\'t just make promises, we deliver tangible results.'
            }
            className="mb-16 mt-10"
          />
        </motion.div>
        
        {/* CSS Columns Masonry Layout for Testimonials */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
