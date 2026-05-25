import React from 'react';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
  const combinedClassName = `${styles.sectionTitle} ${className || ''}`.trim();

  return <h2 className={combinedClassName}>{children}</h2>;
};

export default SectionTitle;
