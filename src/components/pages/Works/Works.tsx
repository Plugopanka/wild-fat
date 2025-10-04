import React from 'react';
import WorksGrid from '../../common/WorksGrid';
import WorkCard from '../../common/WorkCard';
import { WORKS_CARDS } from './constants';
import SectionTitle from '../../common/SectionTitle';
import styles from './Works.module.scss';
import WorksHero from '../../common/WorksHero';

const Works: React.FC = () => {
  return (
    <div className={styles.page}>
      <SectionTitle className={styles.title}>CURRENT PROJECT</SectionTitle>
      <WorksHero src="https://cdn.prod.website-files.com/5e42aee008053d8670f84473/631fac9e7e50a7b2b5b9366f_1673765062-1_1390x600.jpg" />

      <SectionTitle className={styles.title}>PERSONAL PROJECTS</SectionTitle>
      <WorksGrid>
        {WORKS_CARDS.map(card => (
          <WorkCard key={card.id} id={card.id} title={card.title} image={card.image} />
        ))}
      </WorksGrid>
    </div>
  );
};

export default Works;
