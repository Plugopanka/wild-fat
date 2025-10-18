import React from 'react';
import WorksGrid from '../../common/WorksGrid';
import WorkCard from '../../common/WorkCard';
import SectionTitle from '../../common/SectionTitle';
import { useLocalization } from '../../../contexts/LocalizationContext';
import styles from './Works.module.scss';
import WorksHero from '../../common/WorksHero/WorksHero';
import { cardImages, videoConfig } from './constants';

const Works: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className={styles.page}>
      <SectionTitle className={styles.title}>{t.works.currentProjects}</SectionTitle>
      <div className={styles.currentProjectsGrid}>
        {t.currentProjects.map((project) => (
          <WorksHero
            key={project.id}
            src={project.backgroundImage}
            alt={project.title}
            linkTo={`/competence/${project.id}`}
            logo={project.logo}
            video={videoConfig}
          />
        ))}
      </div>

      <SectionTitle className={styles.title}>{t.works.recentProjects}</SectionTitle>
      <div className={styles.recentProjectsGrid}>
        {t.recentProjects.map((project) => (
          <WorksHero
            key={project.id}
            src={project.backgroundImage}
            alt={project.title}
            linkTo={`/competence/${project.id}`}
            logo={project.logo}
            video={videoConfig}
          />
        ))}
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
