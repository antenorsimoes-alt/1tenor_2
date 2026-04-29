"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, Translation } from '@/lib/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Começamos com o inglês como padrão inicial para a renderização do servidor
  const [language, setLanguageState] = useState<Language>('en'); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 1. Tenta pegar do localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang === 'pt' || savedLang === 'en') {
      setLanguageState(savedLang);
    } else {
      // 2. Se não tiver no localStorage, lê o idioma do navegador
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('pt')) {
        setLanguageState('pt');
      } else {
        setLanguageState('en');
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  // CORREÇÃO AQUI: O Provider agora envolve a aplicação o tempo todo.
  // Escondemos o conteúdo via CSS apenas nos primeiros milissegundos até descobrirmos 
  // o idioma do cliente para evitar que o usuário veja a troca rápida (flicker) de EN para PT.
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};