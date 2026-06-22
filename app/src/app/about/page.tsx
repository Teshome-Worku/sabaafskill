import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Sabaaf Skill Digital Creative Academy — founded in Nekemte, Oromia to empower Oromo youth with practical digital skills in Video Editing, Photography, and Cinematography.',
  openGraph: {
    title: 'About Sabaaf Skill Academy',
    description: 'Founded to empower Oromo youth with modern digital skills. Learn in Afaan Oromoo.',
    images: [{ url: '/images/founder/Founder.jpg', width: 1200, height: 630, alt: 'Sabaaf Skill Founder' }],
  },
};

export { default } from './_page';
