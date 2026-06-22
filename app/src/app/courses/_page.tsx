"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CourseCard } from '@/components/ui/CourseCard';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { courses } from '@/data/courses';

export default function CoursesPageClient() {
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
            title={content[language].coursesSection.title}
            subtitle={
              language === 'om' 
                ? 'Ogummaa ammayyaa barachuun gara hojiitti ce\'i.' 
                : 'Transition to a career by learning modern skills.'
            }
            className="mb-16 mt-10"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
