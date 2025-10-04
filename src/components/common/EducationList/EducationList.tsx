import React from "react";
import { EDUCATION_SKILLS_LIST } from "./constants";
import SectionTitle from '../SectionTitle';
import styles from './EducationList.module.scss';

const EducationList: React.FC = () => {
  return (
    <div>
      <SectionTitle className={styles.sectionTitle}>EDUCATION</SectionTitle>
      <div dangerouslySetInnerHTML={{ __html: EDUCATION_SKILLS_LIST }} />
    </div>
  );
};

export default EducationList;
