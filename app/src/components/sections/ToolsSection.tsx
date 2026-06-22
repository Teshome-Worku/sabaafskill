"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

// Logos as SVG/text representations for tools taught at Sabaaf Skill
const tools = [
  { name: 'Adobe Premiere Pro', abbr: 'Pr', color: '#9999FF' },
  { name: 'Adobe Photoshop', abbr: 'Ps', color: '#31A8FF' },
  { name: 'Adobe Lightroom', abbr: 'Lr', color: '#31A8FF' },
  { name: 'DaVinci Resolve', abbr: 'DV', color: '#FF6B35' },
  { name: 'CapCut', abbr: 'CC', color: '#000000' },
  { name: 'Canva', abbr: 'Ca', color: '#00C4CC' },
];

const brands = [
  { name: 'Adobe', color: '#FF0000' },
  { name: 'DSLR', color: '#888' },
  { name: 'Canon', color: '#CC0000' },
  { name: 'DaVinci', color: '#FF6B35' },
  { name: 'CapCut', color: '#4ECDC4' },
  { name: 'Lightroom', color: '#31A8FF' },
];

export function ToolsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-background border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
            {language === 'om' ? 'Meeshaalee Barsiifaman' : 'Industry-Standard Tools We Teach'}
          </p>
        </div>

        {/* Tool Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-3 bg-secondary/60 border border-white/5 rounded-xl px-5 py-3 hover:border-white/20 transition-colors group cursor-default"
            >
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ backgroundColor: tool.color === '#000000' ? '#111' : `${tool.color}25`, border: `1px solid ${tool.color}40` }}
              >
                <span style={{ color: tool.color }}>{tool.abbr}</span>
              </div>
              <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Infinite scrolling brand marquee */}
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
            className="flex shrink-0 gap-12 items-center"
          >
            {[...brands, ...brands].map((brand, i) => (
              <span key={i} className="text-2xl font-heading font-bold shrink-0" style={{ color: brand.color + '60' }}>
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
