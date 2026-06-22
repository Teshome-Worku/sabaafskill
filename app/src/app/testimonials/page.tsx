import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Testimonials',
  description: 'Read verified success stories from Sabaaf Skill graduates. Real students share how digital skills transformed their careers and lives.',
  openGraph: {
    title: 'Student Testimonials — Sabaaf Skill',
    description: 'Verified success stories from Sabaaf Skill graduates. See how digital skills changed their lives.',
    images: [{ url: '/images/hero/heroimage.jpg', width: 1200, height: 630, alt: 'Sabaaf Skill Student Success' }],
  },
};

export { default } from './_page';
