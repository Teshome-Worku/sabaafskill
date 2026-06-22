import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse photos from Sabaaf Skill Academy — graduation ceremonies, classroom sessions, and student activities in Nekemte, Oromia.',
  openGraph: {
    title: 'Student Gallery — Sabaaf Skill',
    description: 'Graduation ceremonies, classrooms, and activities at Sabaaf Skill Digital Creative Academy.',
    images: [{ url: '/images/graduation/photo_1_2026-06-22_10-41-33.jpg', width: 1200, height: 630, alt: 'Sabaaf Skill Graduation Gallery' }],
  },
};

export { default } from './_page';
