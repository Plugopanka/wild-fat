import React from 'react';
import { useLocalization } from '../../../contexts/LocalizationContext';
import styles from './AboutText.module.scss';

const AboutText: React.FC = () => {
  const { t } = useLocalization();

  return (
    <ul className={styles.aboutList}>
      {t.about.description.map((item, index) => (
        <li key={index}>
          <p className={styles.infoText}>{item}</p>
        </li>
      ))}
      <li>
        <p className={styles.infoText}>
          {t.about.contactText}{' '}
          <a href={`mailto:artem.vod@gmail.com`}>artem.vod@gmail.com</a> {t.about.contactTextEnd}
        </p>
      </li>
    </ul>
  );
};

export default AboutText;
