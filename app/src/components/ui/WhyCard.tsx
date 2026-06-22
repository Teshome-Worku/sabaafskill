"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Languages, TrendingUp, Bot, MonitorPlay, UserCheck } from 'lucide-react';
import { WhyCardType } from '@/types';
import { useLanguage } from '@/hooks/useLanguage';

interface WhyCardProps {
  card: WhyCardType;
  index: number;
}

export function WhyCard({ card, index }: WhyCardProps) {
  const { t } = useLanguage();
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'languages': return <Languages className="w-6 h-6 text-white" />;
      case 'trendingUp': return <TrendingUp className="w-6 h-6 text-white" />;
      case 'bot': return <Bot className="w-6 h-6 text-white" />;
      case 'monitorPlay': return <MonitorPlay className="w-6 h-6 text-white" />;
      case 'userCheck': return <UserCheck className="w-6 h-6 text-white" />;
      default: return <UserCheck className="w-6 h-6 text-white" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 shadow-xl"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={card.image}
          alt={t(card.title)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/40 group-hover:via-card/80 transition-all duration-500" />
      </div>
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[300px]">
        <div className="w-12 h-12 rounded-xl bg-primary mb-6 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:-translate-y-2 transition-transform duration-300">
          {getIcon(card.icon)}
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {t(card.title)}
        </h3>
        
        <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
          {t(card.description)}
        </p>
      </div>
    </motion.div>
  );
}
