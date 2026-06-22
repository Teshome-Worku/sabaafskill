"use client";

import * as React from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { Language } from "@/types"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'om' ? 'en' : 'om')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors focus:outline-none"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase tracking-widest">{language === 'om' ? 'Oromoo' : 'English'}</span>
    </button>
  )
}
