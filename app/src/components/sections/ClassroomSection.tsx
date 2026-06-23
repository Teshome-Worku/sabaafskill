"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export function ClassroomSection() {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-card/30 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Area */}
          <div className="lg:w-5/12 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight"
            >
              {language === 'om' ? 'Haala Barnoota Keenya' : 'Our Classroom Experience'}
            </motion.h2>
            
            <div className="h-1 w-20 bg-primary rounded-full" />
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {language === 'om' 
                ? "Barnoonni keenya harki caalu shaakala irratti kan hundaa'edha. Barataan hundi kompiyuutara mataa isaa qabaatee, ogeeyyii muuxannoo qabaniin walitti dhiyeenyaan barata. Kunis ogummaa dhugaa hojii irra ooluu danda'u akka horatan isaan gargaara."
                : "Our education is highly practical and hands-on. Every student has their own dedicated computer and learns closely with experienced professionals. This ensures they acquire real, applicable skills."}
            </motion.p>
          </div>
          
          {/* Photo Mosaic */}
          <div className="w-full lg:w-7/12 grid grid-cols-2 gap-3 md:gap-4 relative mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="space-y-3 md:space-y-4 z-10 pt-6 md:pt-10"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
                <Image src="/images/classroom/photo_1_2026-06-22_11-11-37.jpg" alt="Classroom" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/10">
                <Image src="/images/classroom/photo_3_2026-06-22_11-11-37.jpg" alt="Classroom learning" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: 0.2 }}
              className="space-y-3 md:space-y-4 z-10"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl border border-white/10">
                <Image src="/images/classroom/photo_2_2026-06-22_11-11-37.jpg" alt="Student practice" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/10">
                <Image src="/images/classroom/photo_4_2026-06-22_11-11-37.jpg" alt="Teaching session" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
