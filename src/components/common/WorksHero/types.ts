// Локальные типы для компонента WorksHero

export interface VideoConfig {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export interface WorksHeroProps {
  src: string;
  alt?: string;
  linkTo?: string;
  logo?: string;
  video?: VideoConfig;
  title?: string;
}
