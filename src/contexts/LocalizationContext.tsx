import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LOCALIZATION, getCurrentLanguage, setLanguage } from '../utils/localization';
import { Language, LocalizationContextType } from '../types';

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguageState] = useState<Language>(getCurrentLanguage());

  const changeLanguage = (language: Language) => {
    setLanguage(language);
    setCurrentLanguageState(language);
  };

  const t = LOCALIZATION[currentLanguage];

  return (
    <LocalizationContext.Provider value={{ t, currentLanguage, changeLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
