import React from 'react';
import styles from './About.module.scss';
import mainPhoto from '../../../assets/images/bigMainPhoto.jpg';
import {SoftwareIcons, EducationList, LabelList, AboutText} from '../../common';
import { useLocalization } from '../../../contexts/LocalizationContext';

const About: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div className={styles.about}>
      <section className={styles.aboutContainer}>
        <div className={styles.photoContainer}>
        <img className={styles.photo} src={mainPhoto} alt="Artem Photo" />
        </div>

        <AboutText />
      </section>
      <LabelList>{t.about.skills}</LabelList>
      <SoftwareIcons />
      <EducationList />
    </div>
  );
};

export default About;
