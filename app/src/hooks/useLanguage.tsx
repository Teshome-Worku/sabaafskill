"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types/index';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: any) => string; // basic translation helper
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('om'); // Default Afaan Oromoo

  useEffect(() => {
    // Load preference from local storage if available
    const savedLang = localStorage.getItem('sabaaf-lang') as Language;
    if (savedLang && (savedLang === 'om' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('sabaaf-lang', lang);
  };

  // Very basic translation helper that gets the value based on current language
  // Assuming the object passed looks like { om: "...", en: "..." }
  const t = (obj: any): string => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['om'] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
