import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  title: "Sabaaf Skill | Digital Creative Academy",
  description: "Transform your life with modern digital skills. Learn Video Editing, Photo Editing, Cinematography, and Photography in Afaan Oromoo.",
  keywords: ["Sabaaf Skill", "Afaan Oromoo", "Digital Skills", "Video Editing", "Photography", "Nekemte"],
  openGraph: {
    title: "Sabaaf Skill | Digital Creative Academy",
    description: "Transform your life with modern digital skills in Afaan Oromoo.",
    url: "https://sabaafskill.com",
    siteName: "Sabaaf Skill",
    images: [
      {
        url: "/images/hero/heroimage.jpg",
        width: 1200,
        height: 630,
        alt: "Sabaaf Skill Graduation",
      },
    ],
    locale: "om_ET",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="om" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} font-body bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
