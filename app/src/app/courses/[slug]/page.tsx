import { Metadata } from 'next';
import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import CoursePageClient from './_page';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    return {
      title: 'Course Not Found',
    };
  }

  return {
    title: `${course.name.en} Course | Sabaaf Skill`,
    description: course.description.en,
    openGraph: {
      title: `${course.name.en} | Sabaaf Skill Academy`,
      description: course.description.en,
      images: [{ url: course.coverImage }],
    },
  };
}

export default async function CoursePage({ params }: Props) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return <CoursePageClient course={course} />;
}
