"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/data/content';

export function RegistrationCTASection() {
  const { language } = useLanguage();
  const c = content[language].registrationCta;

  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-background border border-primary/20 rounded-3xl p-10 md:p-16 text-center shadow-[0_0_50px_rgba(26,107,240,0.15)]"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            {c.title}
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            {c.text}
          </p>
          
          <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg shadow-[0_0_20px_rgba(26,107,240,0.4)]">
            <Link href="/register">
              {c.button}
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
