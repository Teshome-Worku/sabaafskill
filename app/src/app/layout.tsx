import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { RootLayoutWrapper } from "@/components/layout/RootLayoutWrapper";

// Fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sabaafskill.com'),
  title: {
    default: "Sabaaf Skill | Digital Creative Academy",
    template: "%s | Sabaaf Skill"
  },
  description: "Transform your life with modern digital skills. Learn Video Editing, Photo Editing, Cinematography, and Photography in Afaan Oromoo.",
  keywords: ["Sabaaf Skill", "Afaan Oromoo", "Digital Skills", "Video Editing", "Photography", "Nekemte", "Oromia", "Creative Academy", "Learn in Afaan Oromo"],
  authors: [{ name: "Iso Tiya" }, { name: "Sabaaf Skill Team" }],
  creator: "Sabaaf Skill",
  publisher: "Sabaaf Skill",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
    shortcut: '/icon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sabaaf Skill | Premium Digital Creative Academy",
    description: "Empowering Oromo youth with practical digital skills to compete in the modern digital economy. Learn in Afaan Oromoo.",
    url: "https://sabaafskill.com",
    siteName: "Sabaaf Skill",
    images: [
      {
        url: "/images/hero/heroimage.jpg",
        width: 1200,
        height: 630,
        alt: "Sabaaf Skill Graduation Batch",
      },
    ],
    locale: "om_ET",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabaaf Skill | Digital Creative Academy",
    description: "Transform your life with modern digital skills. Learn in Afaan Oromoo.",
    images: ["/images/hero/heroimage.jpg"],
    creator: "@sabaafskill",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Local Educational Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sabaaf Skill Academy",
    "alternateName": "Sabaaf Skill",
    "url": "https://sabaafskill.com",
    "logo": "https://sabaafskill.com/images/logo/sabaafskilllogo.jpg",
    "description": "A premium digital creative academy offering courses in Video Editing, Photo Editing, Cinematography, and Photography taught in Afaan Oromoo.",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Iso Tiya"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nekemte",
      "addressRegion": "Oromia",
      "addressCountry": "ET"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+251-919-574-214",
      "contactType": "admissions",
      "availableLanguage": ["Oromo", "English"]
    },
    "sameAs": [
      "https://t.me/Sabaafnekemte",
      "https://tiktok.com/@sabaaf_skill"
    ]
  };

  return (
    <html lang="om" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-body bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <RootLayoutWrapper>
            {children}
          </RootLayoutWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
