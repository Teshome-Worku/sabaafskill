import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Explore Sabaaf Skill courses: Photography, Photo Editing, Video Editing, and Cinematography. Taught in Afaan Oromoo with certificates upon completion.',
  openGraph: {
    title: 'Digital Creative Courses — Sabaaf Skill',
    description: 'Photography, Photo Editing, Video Editing, and Cinematography courses taught in Afaan Oromoo. All courses include a certificate.',
    images: [{ url: '/images/classroom/photo_1_2026-06-22_11-11-37.jpg', width: 1200, height: 630, alt: 'Sabaaf Skill Classroom' }],
  },
};

export { default } from './_page';
