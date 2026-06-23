"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { testimonials } from '@/data/testimonials';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

import { useAnimationControls } from 'framer-motion';

export function StudentSuccessSection() {
  const { language } = useLanguage();
  const controls = useAnimationControls();
  
  // Duplicate array for seamless infinite marquee scroll
  const marqueeTestimonials = [...testimonials, ...testimonials];

  const pause = () => controls.stop();
  const resume = () => controls.start({
    x: [null, "-50%"],
    transition: { duration: 40, ease: "linear", repeat: Infinity },
  });
  
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <SectionHeader 
          title={content[language].studentSuccess.title}
          subtitle={content[language].studentSuccess.subtitle}
        />
      </div>
        
      {/* Infinite Marquee Container */}
      <div
        className="relative flex overflow-hidden group"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
      >
        {/* Left/Right Edge Masks for smooth fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={controls}
          initial={{ x: "0%" }}
          onViewportEnter={() => resume()}
          className="flex gap-6 w-max px-4"
        >
          {marqueeTestimonials.map((testimonial, idx) => (
            <div key={`${testimonial.id}-${idx}`} className="w-[350px] md:w-[450px] shrink-0">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 mt-16 flex justify-center">
        <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 text-white hover:bg-primary/10 hover:border-primary/50 transition-all">
          <Link href="/testimonials">
            {language === 'om' ? 'Yaada Barattootaa Hunda Ilaali' : 'View All Testimonials'}
          </Link>
        </Button>
      </div>
    </section>
  );
}

// Ensure alias TestimonialsSection points to the same or split if needed.
// According to blueprint, Section 6 is "Student Transformation" and Section 7 is "Testimonials".
// But the content mapped them together into studentSuccess strings. We'll export this as both or adapt.
export { StudentSuccessSection as TestimonialsSection };
