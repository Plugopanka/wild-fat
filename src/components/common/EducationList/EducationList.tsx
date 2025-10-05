import React from "react";
import { EDUCATION_SKILLS_LIST } from "./constants";
import SectionTitle from '../SectionTitle';
import { useLocalization } from '../../../contexts/LocalizationContext';
import styles from './EducationList.module.scss';

const EducationList: React.FC = () => {
  const { t } = useLocalization();

  return (
    <div>
      <SectionTitle className={styles.sectionTitle}>{t.education.title.toUpperCase()}</SectionTitle>
      <div dangerouslySetInnerHTML={{ __html: EDUCATION_SKILLS_LIST }} />
    </div>
  );
};

export default EducationList;
