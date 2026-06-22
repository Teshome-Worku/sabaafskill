"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FounderSection } from '@/components/sections/FounderSection';
import { useLanguage } from '@/hooks/useLanguage';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPageClient() {
  const { language, t } = useLanguage();

  return (
    <div className="pt-24 pb-12">
      {/* Page Header */}
      <section className="py-20 bg-card border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/classroom/photo_1_2026-06-22_11-11-37.jpg"
            alt="Academy Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-background mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              {language === 'om' ? "Waa'ee Sabaaf Skill" : 'About Sabaaf Skill'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'om' 
                ? 'Nuti Wiirtuu Leenjii qofa miti. Nuti Akkaadaamii Kalaqa Dijitaalaati.' 
                : 'We are not just a training center. We are a Digital Creative Academy.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Academy Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/classroom/photo_4_2026-06-22_11-11-37.jpg"
                  alt="Sabaaf Skill Classroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-white">
                {language === 'om' ? 'Seenaa Keenya' : 'Our Story'}
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
              
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'om' 
                    ? 'Sabaaf Skill jalqaba kan hundeeffame rakkoo guddaa tokko furuufi: dargaggoonni Afaan Oromoo dubbatan ogummaa dijitaalaa ammayyaa akka argatan taasisuuf. Barnoonni harki caalu afaanota birootiin waan kennamuuf, dargaggoonni keenya carraa kana irraa fagaatanii turan.'
                    : 'Sabaaf Skill was primarily founded to solve a major problem: ensuring that Oromo-speaking youth have access to modern digital skills. Because most education is provided in other languages, our youth were being left behind from these opportunities.'}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'om' 
                    ? "Har'a, barattoota 100 ol leenjisnee eebbisiisneerra. Barattoonni keenya ogummaa isaanii fayyadamuun hojii dhuunfaa isaanii uumanii jireenya isaanii fooyyessaa jiru."
                    : 'Today, we have trained and graduated over 100 students. Our students are using their skills to create their own businesses and improve their lives.'}
                </p>
              </div>
              
              <ul className="space-y-3 pt-4">
                {[
                  { om: "Barnoota qulqulluu fi shaakala irratti hundaa'e", en: 'High-quality, practical education' },
                  { om: 'Barsiisota muuxannoo qaban', en: 'Experienced instructors' },
                  { om: 'Naannoo barnootaa ammayyaa', en: 'Modern learning environment' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <FounderSection />
    </div>
  );
}
