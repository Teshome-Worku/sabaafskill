"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export function FounderSection() {
  const { language } = useLanguage();
  const c = content[language].founder;

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Founder Image Area */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative w-full max-w-md lg:max-w-none mx-auto"
          >
            <div className="absolute top-0 right-10 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[80px] -z-10 -translate-y-10" />
            
            <div className="relative aspect-[3/4] w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl z-10 group">
              <Image
                src="/images/founder/Founder.jpg"
                alt="Iso Tiya - Founder of Sabaaf Skill"
                fill
                className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">Iso Tiya</h3>
                </div>
                <p className="text-primary font-medium tracking-wide">
                  {language === 'om' ? 'Hundeessaa fi Daarektara' : 'Founder & Director'}
                </p>
              </div>
            </div>
            
            {/* Decorative Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:-right-10 bg-card border border-white/10 p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-[200px] backdrop-blur-xl"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-medium text-white leading-tight">
                {language === 'om' ? 'Dargaggootaaf Carraa Uumuu' : 'Empowering Youth'}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Founder Story Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight mb-4">
                {c.title}
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p className="text-xl leading-relaxed text-white/90 font-medium">
                "{c.text}"
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
              <div>
                <h4 className="text-white font-heading font-bold mb-2">Vision</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'om' 
                    ? 'Dargaggoota Oromoo ogummaa dijitaalaa ammayyaatiin ijaaruu.'
                    : 'To empower Oromo youth with practical digital skills.'}
                </p>
              </div>
              <div>
                <h4 className="text-white font-heading font-bold mb-2">Mission</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {language === 'om' 
                    ? 'Barnoota hojii irratti xiyyeeffate Afaan Oromootiin kennuu.'
                    : 'Providing job-oriented education in Afaan Oromoo.'}
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
