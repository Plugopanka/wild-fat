import React from 'react';
import { useLocalization } from '../../../contexts/LocalizationContext';
import { AboutSegment } from '../../../types';
import styles from './AboutText.module.scss';

const AboutText: React.FC = () => {
  const { t } = useLocalization();

  return (
    <ul className={styles.aboutList}>
      {t.about.description.map((segments, index) => (
        <li key={index}>
          <p className={styles.infoText}>
            {segments.map((seg: AboutSegment, i: number) =>
              'url' in seg ? (
                <a key={i} href={seg.url} target="_blank" rel="noopener noreferrer">
                  {seg.text}
                </a>
              ) : (
                <React.Fragment key={i}>{seg.text}</React.Fragment>
              )
            )}
          </p>
        </li>
      ))}
      <li>
        <p className={styles.infoText}>
          <a href={`mailto:artem.vod@gmail.com`}>artem.vod@gmail.com</a>
        </p>
      </li>
    </ul>
  );
};

export default AboutText;
