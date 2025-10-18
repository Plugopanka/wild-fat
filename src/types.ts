// Общие типы для всего приложения

export type Language = 'en' | 'ru';

// Типы для локализации
export interface LocalizationTexts {
  // Header
  header: {
    works: string;
    about: string;
    downloadCv: string;
  };
  
  // CardDetails
  cardDetails: {
    additionalMaterials: string;
    cardNotFound: string;
    noImage: string;
  };
  
  // WorkDetails
  workDetails: {
    workNotFound: string;
  };
  
  // About page
  about: {
    title: string;
    description: string[];
    skills: string[];
    contactText: string;
    contactTextEnd: string;
  };
  
  // Works page
  works: {
    title: string;
    currentProjects: string;
    personalProjects: string;
    recentProjects: string;
  };

  // Current Projects
  currentProjects: Array<{
    id: string;
    title: string;
    backgroundImage: string;
    logo?: string;
  }>;

  // Recent Projects
  recentProjects: Array<{
    id: string;
    title: string;
    backgroundImage: string;
    logo?: string;
  }>;
  
  // EducationList
  education: {
    title: string;
    items: Array<{
      period: string;
      institution: string;
      degree: string;
    }>;
  };
  
  // Works Cards
  worksCards: Array<{
    id: string;
    title: string;
    cardName: string;
    labels: string[];
    description: string;
    params: string[];
  }>;
  
  // Card Details
  cardDetailsData: Array<{
    id: string;
    articles: Array<{
      title: string;
      text: string[];
      gif?: string;
    }>;
  }>;

  // Competence Details
  competenceDetails: {
    competenceNotFound: string;
  };

  // Competences
  competences: Array<{
    id: string;
    title: string;
    name: string;
    labels: string[];
    description: string;
    params: string[];
    backgroundImage?: string;
  }>;
}

// Типы для контекста локализации
export interface LocalizationContextType {
  t: LocalizationTexts;
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
}
