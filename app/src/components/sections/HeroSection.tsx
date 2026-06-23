"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { ChevronDown, Users, GraduationCap } from 'lucide-react';

export function HeroSection() {
  const { language, t } = useLanguage();
  const c = content[language].hero;

  const socialProof = [
    { value: '100+', label: { om: 'Barattoota', en: 'Students Trained' } },
    { value: '3', label: { om: 'Batch Eebba', en: 'Graduation Batches' } },
    { value: '4', label: { om: 'Ogummaa', en: 'Courses Offered' } },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/heroimage.jpg"
          alt="Sabaaf Skill Academy Graduation Ceremony"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
          quality={95}
        />
        <div className="absolute inset-0 bg-black/40 md:bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 md:via-background/70 to-transparent" />

        {/* Animated Premium Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center flex-1 justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Academy Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 text-sm text-white/80"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {language === 'om' ? 'Naqamtee, Oromiyaa · Galmeen Banaadha' : 'Nekemte, Oromia · Enrollment Open'}
          </motion.div>

          {/* Logo */}
          <div className="w-20 h-20 md:w-24 md:h-24 relative mb-8 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(26,107,240,0.5)] border border-white/10">
            <Image
              src="/images/logo/sabaafskilllogo.jpg"
              alt="Sabaaf Skill Logo"
              fill
              sizes="96px"
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 leading-[1.1] text-balance">
            {c.headline}
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-2xl mb-10 text-balance leading-relaxed">
            {c.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-4">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg shadow-[0_0_25px_rgba(26,107,240,0.5)]">
              <Link href="/register">
                {c.ctaPrimary}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10">
              <Link href="/courses">
                {c.ctaSecondary}
              </Link>
            </Button>
          </div>

          {/* Friction reducer */}
          <p className="text-sm text-white/40 mb-14">
            {language === 'om' ? '✓ Bilbilaan isin quunnamna · Mindaa duraan hin kaffalamtu' : '✓ We call you · No upfront payment required'}
          </p>

          {/* Social Proof Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {socialProof.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-4xl font-heading font-bold text-white">{item.value}</span>
                <span className="text-xs text-white/50 uppercase tracking-widest font-medium">
                  {language === 'om' ? item.label.om : item.label.en}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 pb-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 uppercase tracking-widest">
          {language === 'om' ? 'Gadi Guuti' : 'Scroll Down'}
        </span>
        <ChevronDown className="w-5 h-5 text-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
}
