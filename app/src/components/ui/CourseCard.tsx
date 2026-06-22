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
      className="group flex flex-col bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-colors shadow-lg"
    >
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
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-heading font-bold text-white mb-3">
          {t(course.name)}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2 mb-6 flex-1">
          {t(course.description)}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-white/60 mb-6">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>{course.duration}</span>
          </div>
          {course.hasCertificate && (
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-primary" />
              <span>{language === 'om' ? 'Waraqaa Ragaa' : 'Certificate'}</span>
            </div>
          )}
        </div>
        
        <Button asChild className="w-full shadow-lg group-hover:shadow-primary/25 transition-all">
          <Link href={`/courses/${course.slug}`}>
            {btnText}
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
