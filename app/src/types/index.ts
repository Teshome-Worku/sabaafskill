export type Language = 'om' | 'en';

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  batch: '2nd' | '3rd' | string;
  statement: {
    om: string;
    en: string;
  };
  photo: string;
}

export interface Course {
  id: string;
  slug: string;
  name: {
    om: string;
    en: string;
  };
  description: {
    om: string;
    en: string;
  };
  learningOutcomes: {
    om: string[];
    en: string[];
  };
  tools: string[];
  requirements: {
    om: string;
    en: string;
  };
  duration: string;
  hasCertificate: boolean;
  coverImage: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: {
    om: string;
    en: string;
  };
  icon: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'graduation' | 'classroom' | 'activities' | string;
}

export interface WhyCardType {
  id: number;
  icon: string;
  title: {
    om: string;
    en: string;
  };
  description: {
    om: string;
    en: string;
  };
  image: string;
}

export type RegistrationStatus = 'new' | 'contacted' | 'registered' | 'completed';

export interface Registration {
  id: string;
  fullName: string;
  phone: string;
  city: string;
  course: string;
  message: string;
  status: RegistrationStatus;
  submittedAt: string;
}
