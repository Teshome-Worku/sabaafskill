"use client";

import React from 'react';
import Image from 'next/image';
import { Quote, Star, BadgeCheck } from 'lucide-react';
import { Testimonial } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { language, t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-secondary to-background border border-white/10 rounded-3xl p-8 relative flex flex-col h-full shadow-2xl hover:shadow-[0_0_30px_rgba(26,107,240,0.15)] hover:border-primary/40 transition-all duration-500 group overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
      <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors duration-500 -rotate-12" />
      
      {/* Five Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      
      {/* Quote Statement */}
      <p className="text-white/85 leading-relaxed text-lg flex-1 italic mb-8 relative z-10 font-medium">
        "{t(testimonial.statement)}"
      </p>
      
      {/* User Info Footer */}
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5 relative z-10">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 p-0.5 group-hover:border-primary transition-colors duration-300">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src={testimonial.photo}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <h4 className="font-heading font-bold text-white text-lg tracking-tight leading-none">
              {testimonial.name}
            </h4>
            <BadgeCheck className="w-4 h-4 text-primary shrink-0" title="Verified Graduate" />
          </div>
          
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-primary">
              {testimonial.course}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              {language === 'om' ? 'Marsaa' : 'Batch'} {testimonial.batch}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
