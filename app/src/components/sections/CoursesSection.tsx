"use client";

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CourseCard } from '@/components/ui/CourseCard';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { courses } from '@/data/courses';

export function CoursesSection() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title={content[language].coursesSection.title}
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
