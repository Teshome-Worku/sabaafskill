import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register Now',
  description: 'Register for a digital skills course at Sabaaf Skill Academy. Fill in your name, phone, city and chosen course — we will contact you shortly.',
  openGraph: {
    title: 'Register for a Course — Sabaaf Skill',
    description: 'Start your digital creative journey today. Register for Photography, Video Editing, Photo Editing, or Cinematography.',
    images: [{ url: '/images/graduation/photo_1_2026-06-22_10-41-33.jpg', width: 1200, height: 630, alt: 'Sabaaf Skill Graduation' }],
  },
};

export { default } from './_page';
