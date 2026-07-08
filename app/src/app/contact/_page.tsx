"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Share2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useLanguage } from '@/hooks/useLanguage';

export default function ContactPageClient() {
  const { language } = useLanguage();

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            title={language === 'om' ? 'Quunnamtii' : 'Contact Us'}
            subtitle={
              language === 'om'
                ? 'Gaaffii ykn yaada yoo qabaattan nu quunnamaa.'
                : 'Get in touch with us if you have any questions or feedback.'
            }
            className="mb-16 mt-10"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-6">
            {[
              {
                delay: 0.1,
                icon: <MapPin className="w-6 h-6 text-primary" />,
                title: { om: 'Teessoo', en: 'Location' },
                content: (
                  <p className="text-muted-foreground leading-relaxed">
                    Nekemte, Oromiyaa<br />
                    Around Museum First Circle
                  </p>
                )
              },
              {
                delay: 0.2,
                icon: <Phone className="w-6 h-6 text-primary" />,
                title: { om: 'Bilbila', en: 'Phone' },
                content: (
                  <a href="tel:0919574214" className="text-muted-foreground hover:text-primary transition-colors">
                    0919 57 42 14
                  </a>
                )
              },
              {
                delay: 0.3,
                icon: <Share2 className="w-6 h-6 text-primary" />,
                title: { om: 'Miidiyaa Hawaasaa', en: 'Social Media' },
                content: (
                  <div className="flex flex-col gap-2">
                    <a href="https://t.me/Sabaafnekemte" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" title="Open Sabaaf Skill on Telegram">
                      <MessageCircle className="w-4 h-4" /> Telegram: @Sabaafnekemte
                    </a>
                    <a href="https://tiktok.com/@sabaaf_skill" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors" title="Open Sabaaf Skill on TikTok">
                      <span className="font-bold text-base w-4 text-center">t</span> TikTok: @sabaaf_skill
                    </a>
                  </div>
                )
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                className="bg-card border border-white/5 p-8 rounded-2xl flex items-start gap-4 shadow-lg hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {language === 'om' ? item.title.om : item.title.en}
                  </h3>
                  {item.content}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:w-2/3 h-[500px] lg:h-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31557.519098933226!2d36.53676885376518!3d9.083818617838612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1653158c352a1ba3%3A0x6b2e1e075cbfb8b4!2sNekemte!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of Sabaaf Skill"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
