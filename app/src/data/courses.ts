import { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'photography',
    slug: 'photography',
    name: {
      om: 'Photography',
      en: 'Photography'
    },
    description: {
      om: "Suuraa sirnaan kaasuu, qindeessuu fi hojii ogummaa keessatti fayyadamuu baratta.",
      en: "Learn how to take professional photos, compose shots properly, and apply them in professional settings."
    },
    learningOutcomes: {
      om: ["Suuraa sirnaan kaasuu", "Ifa qindeessuu", "Kaameraa fayyadamuu"],
      en: ["Professional photo capturing", "Lighting composition", "Camera operation"]
    },
    tools: ["DSLR Camera", "Mirrorless Camera"],
    requirements: {
      om: "Fedhii barachuu qabaachuu.",
      en: "A desire to learn."
    },
    duration: "2 Months",
    hasCertificate: true,
    coverImage: '/images/classroom/photo_1_2026-06-22_11-11-37.jpg'
  },
  {
    id: 'photo-editing',
    slug: 'photo-editing',
    name: {
      om: 'Photo Editing',
      en: 'Photo Editing'
    },
    description: {
      om: "Suuraa fooyyessuu, halluu sirreessuu fi hojii miidiyaa irratti fayyadamuu baratta.",
      en: "Learn to enhance photos, color correct, and apply photo editing for media projects."
    },
    learningOutcomes: {
      om: ["Suuraa fooyyessuu", "Halluu sirreessuu", "Background jijjiiruu"],
      en: ["Photo enhancement", "Color correction", "Background replacement"]
    },
    tools: ["Adobe Photoshop", "Adobe Lightroom"],
    requirements: {
      om: "Fedhii barachuu qabaachuu.",
      en: "A desire to learn."
    },
    duration: "2 Months",
    hasCertificate: true,
    coverImage: '/images/classroom/photo_2_2026-06-22_11-11-37.jpg'
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    name: {
      om: 'Video Editing',
      en: 'Video Editing'
    },
    description: {
      om: "Viidiyoo qopheessuu, muruu, sirreessuu fi viidiyoo ogummaa qabu uumuu baratta.",
      en: "Learn video production, cutting, editing, and creating professional video content."
    },
    learningOutcomes: {
      om: ["Viidiyoo muruu fi walitti fiduu", "Sagalee qindeessuu", "Color grading"],
      en: ["Video cutting and joining", "Audio synchronization", "Color grading"]
    },
    tools: ["Adobe Premiere Pro", "CapCut", "DaVinci Resolve"],
    requirements: {
      om: "Fedhii barachuu qabaachuu.",
      en: "A desire to learn."
    },
    duration: "2 Months",
    hasCertificate: true,
    coverImage: '/images/classroom/photo_3_2026-06-22_11-11-37.jpg'
  },
  {
    id: 'cinematography',
    slug: 'cinematography',
    name: {
      om: 'Cinematography',
      en: 'Cinematography'
    },
    description: {
      om: "Kaameraa fayyadamuu, ifa qindeessuu fi seenaa suuraan ibsuu baratta.",
      en: "Learn camera operation, lighting composition, and visual storytelling."
    },
    learningOutcomes: {
      om: ["Seenaa suuraan ibsuu", "Shooting angles", "Camera movements"],
      en: ["Visual storytelling", "Shooting angles", "Camera movements"]
    },
    tools: ["Professional Video Cameras", "Gimbals", "Lighting Equipment"],
    requirements: {
      om: "Fedhii barachuu qabaachuu.",
      en: "A desire to learn."
    },
    duration: "2 Months",
    hasCertificate: true,
    coverImage: '/images/classroom/photo_4_2026-06-22_11-11-37.jpg'
  }
];
