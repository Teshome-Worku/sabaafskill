"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, ThumbsUp } from 'lucide-react';
import { Stat } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';
import { AnimatedCounter } from './AnimatedCounter';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export function StatCard({ stat, index }: StatCardProps) {
  const { t } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'graduationCap': return <GraduationCap className="w-8 h-8 text-primary" />;
      case 'users': return <Users className="w-8 h-8 text-primary" />;
      case 'bookOpen': return <BookOpen className="w-8 h-8 text-primary" />;
      case 'thumbsUp': return <ThumbsUp className="w-8 h-8 text-primary" />;
      default: return <Users className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
        {getIcon(stat.icon)}
      </div>
      
      <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 flex items-center justify-center">
        <AnimatedCounter value={stat.value} />
        <span>{stat.suffix}</span>
      </div>
      
      <p className="text-muted-foreground font-medium">
        {t(stat.label)}
      </p>
    </motion.div>
  );
}
