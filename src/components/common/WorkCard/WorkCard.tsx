import React from 'react';
import styles from './WorkCard.module.scss';
import { Link } from 'react-router-dom';
import { WorkCardProps } from './types';

const WorkCard: React.FC<WorkCardProps> = ({ id, title, image}) => {
  const linkPath = `/works/${id}`;
  
  return (
    <Link to={linkPath} className={styles.card}>
      <img className={styles.image} src={image} alt={title} loading="lazy" />
      <div className={styles.caption}>{title}</div>
    </Link>
  );
};

export default WorkCard;
