"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { testimonials } from '@/data/testimonials';

export function StudentSuccessSection() {
  const { language } = useLanguage();
  
  // We'll show the top 3 testimonials on the homepage
  const displayTestimonials = testimonials.slice(0, 3);
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title={content[language].studentSuccess.title}
          subtitle={content[language].studentSuccess.subtitle}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ensure alias TestimonialsSection points to the same or split if needed.
// According to blueprint, Section 6 is "Student Transformation" and Section 7 is "Testimonials".
// But the content mapped them together into studentSuccess strings. We'll export this as both or adapt.
export { StudentSuccessSection as TestimonialsSection };
