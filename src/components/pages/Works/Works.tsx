import React from 'react';
import WorksGrid from '../../common/WorksGrid';
import WorkCard from '../../common/WorkCard';
import SectionTitle from '../../common/SectionTitle';
import { useLocalization } from '../../../contexts/LocalizationContext';
import styles from './Works.module.scss';
import WorksHero from '../../common/WorksHero/WorksHero';
import { cardImages, projectVideos, defaultVideoConfig } from './constants';

const Works: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className={styles.page}>
      <SectionTitle className={styles.title}>{t.works.currentProjects}</SectionTitle>
      <div className={styles.currentProjectsGrid}>
        {t.currentProjects.map((project) => {
          const videoSrc = projectVideos[project.id] || defaultVideoConfig.src;
          return (
            <WorksHero
              key={project.id}
              src={project.backgroundImage}
              alt={project.title}
              linkTo={`/competence/${project.id}`}
              logo={project.logo}
              video={{
                src: videoSrc,
                autoplay: true,
                loop: true,
                muted: true
              }}
            />
          );
        })}
      </div>

      <SectionTitle className={styles.title}>{t.works.recentProjects}</SectionTitle>
      <div className={styles.recentProjectsGrid}>
        {t.recentProjects.map((project) => {
          const videoSrc = projectVideos[project.id] || defaultVideoConfig.src;
          return (
            <WorksHero
              key={project.id}
              src={project.backgroundImage}
              alt={project.title}
              linkTo={`/competence/${project.id}`}
              logo={project.logo}
              video={{
                src: videoSrc,
                autoplay: true,
                loop: true,
                muted: true
              }}
            />
          );
        })}
      </div>

      <SectionTitle className={styles.title}>{t.works.personalProjects}</SectionTitle>
      <WorksGrid>
        {t.worksCards.map(card => (
          <WorkCard key={`personal-${card.id}`} id={card.id} title={card.title} image={cardImages[card.id]} />
        ))}
      </WorksGrid>
    </div>
  );
};

export default Works;
