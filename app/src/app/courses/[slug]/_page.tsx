"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, GraduationCap, CheckCircle2, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { Course } from '@/types';

interface Props {
  course: Course;
}

export default function CoursePageClient({ course }: Props) {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Back Button */}
        <Link 
          href="/courses" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          {language === 'om' ? 'Gara Barnootaatti Deebi\'i' : 'Back to Courses'}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={course.coverImage}
                alt={course.name.en}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                {language === 'om' ? course.name.om : course.name.en}
              </h1>
              <p className="text-lg text-white/70 leading-relaxed">
                {language === 'om' ? course.description.om : course.description.en}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary/50 border border-white/5 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-white/90">
                  {course.duration}
                </span>
              </div>
              {course.hasCertificate && (
                <div className="flex items-center gap-2 bg-secondary/50 border border-white/5 rounded-full px-4 py-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-white/90">
                    {language === 'om' ? 'Waraqaa Ragaa ni kennama' : 'Certificate Included'}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">
                {language === 'om' ? 'Maal Baratta?' : 'What you will learn'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(language === 'om' ? course.learningOutcomes.om : course.learningOutcomes.en).map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">
                {language === 'om' ? 'Meekshaalee (Tools)' : 'Tools Covered'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, idx) => (
                  <span key={idx} className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 text-lg">
                <Link href={`/register?course=${encodeURIComponent(course.name.en)}`}>
                  {language === 'om' ? "Galmaa'i Amma" : 'Register for this Course'}
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
