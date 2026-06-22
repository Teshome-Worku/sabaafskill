"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';
import { CheckCircle } from 'lucide-react';

export function RegistrationCTASection() {
  const { language } = useLanguage();
  const c = content[language].registrationCta;

  const guarantees = [
    { om: 'Bilbilaan isin quunnamna', en: 'We will call you to confirm' },
    { om: 'Shaakala hojii irratti hundaa\'e', en: 'Hands-on practical learning' },
    { om: 'Waraqaa Ragaa ni kennama', en: 'Certificate upon completion' },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Full bleed background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/graduation/photo_2_2026-06-22_10-41-33.jpg"
          alt="Sabaaf Skill Graduation"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-card/90 to-background/80 backdrop-blur-xl border border-primary/20 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_60px_rgba(26,107,240,0.2)]"
        >
          {/* Pulsing dot badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {language === 'om' ? 'Galmeen Amma Banaa Jira' : 'Enrollment Now Open'}
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5 tracking-tight">
            {c.title}
          </h2>

          <p className="text-xl text-white/75 mb-8 max-w-2xl mx-auto leading-relaxed">
            {c.text}
          </p>

          {/* Guarantee list */}
          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm text-white/70">
            {guarantees.map((g, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{language === 'om' ? g.om : g.en}</span>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="rounded-full h-14 px-12 text-lg shadow-[0_0_25px_rgba(26,107,240,0.5)]">
            <Link href="/register">
              {c.button}
            </Link>
          </Button>

          <p className="text-xs text-white/30 mt-5">
            {language === 'om' ? 'Mindaa duraan hin kaffalamtu. Bilbilaan isin quunnamna.' : 'No upfront payment. We contact you by phone.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
