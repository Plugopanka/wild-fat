import React from 'react';
import styles from './About.module.scss';
import mainPhoto from '../../../assets/images/bigMainPhoto.jpg';
import {ABOUTPAGE_TEXT, SKILLS_LABELS} from './constants';
import {SoftwareIcons, EducationList, LabelList} from '../../common';

const About: React.FC = () => {
  return (
    <div className={styles.about}>
      <section className={styles.aboutContainer}>
        <div className={styles.photoContainer}>
        <img className={styles.photo} src={mainPhoto} alt="Artem Photo" />
        </div>

        <ul>
          {ABOUTPAGE_TEXT.map((item, index) => (
            <li key={index}>
              <p className={styles.infoText}>{item}</p>
            </li>
          ))}
          <li>
            <p className={styles.infoText}>
              You may email me{' '}
              <a href={`mailto:artem.vod@gmail.com`}>artem.vod@gmail.com</a> or
              contact via social network.
            </p>
          </li>
        </ul>
      </section>
      <LabelList>{SKILLS_LABELS}</LabelList>
      <SoftwareIcons />
      <EducationList />
    </div>
  );
};

export default About;
