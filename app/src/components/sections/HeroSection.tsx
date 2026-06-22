"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export function HeroSection() {
  const { language, t } = useLanguage();
  const c = content[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/heroimage.jpg"
          alt="Sabaaf Skill Academy Graduation"
          fill
          priority
          className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        {/* Animated Premium Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 animate-[pulse_10s_ease-in-out_infinite_delay-2s]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 relative mb-8 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(26,107,240,0.5)]">
            <Image
              src="/images/logo/sabaafskilllogo.jpg"
              alt="Sabaaf Skill Logo"
              fill
              className="object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 leading-tight text-balance">
            {c.headline}
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 text-balance leading-relaxed">
            {c.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-lg shadow-[0_0_20px_rgba(26,107,240,0.4)]">
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
        </motion.div>
      </div>
    </section>
  );
}
