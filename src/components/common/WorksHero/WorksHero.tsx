import React from 'react';
import styles from './WorksHero.module.scss';

interface WorksHeroProps {
  src: string;
  alt?: string;
}

const WorksHero: React.FC<WorksHeroProps> = ({ src, alt = 'Current project' }) => {
  return (
    <div className={styles.hero}>
      <a href="https://mundfish.com/ru" target="_blank" rel="noopener noreferrer">
        <img className={styles.image} src={src} alt={alt} loading="lazy" />
      </a>
    </div>
  );
};

export default WorksHero;
