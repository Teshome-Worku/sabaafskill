"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Award } from 'lucide-react';
import { Course } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/Button';
import { content } from '@/data/content';

interface CourseCardProps {
  course: Course;
  index: number;
}

export function CourseCard({ course, index }: CourseCardProps) {
  const { language, t } = useLanguage();
  const btnText = content[language].coursesSection.button;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col bg-gradient-to-b from-secondary to-background rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(26,107,240,0.15)] relative"
    >
      {/* Subtle glow behind card */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
      {/* Image Area */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={course.coverImage}
          alt={t(course.name)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      {/* Content Area */}
      <div className="p-8 flex-1 flex flex-col relative z-10">
        <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
          {t(course.name)}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2 mb-8 flex-1 text-sm leading-relaxed">
          {t(course.description)}
        </p>
        
        <div className="flex flex-col gap-3 text-sm text-white/70 mb-8 p-4 bg-black/20 rounded-xl border border-white/5">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-medium">{course.duration}</span>
          </div>
          {course.hasCertificate && (
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-medium">{language === 'om' ? 'Waraqaa Ragaa ni kennama' : 'Certificate Included'}</span>
            </div>
          )}
        </div>
        
        <Button asChild className="w-full">
          <Link href={`/courses/${course.slug}`}>
            {btnText}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
