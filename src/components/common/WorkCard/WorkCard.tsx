import React from 'react';
import styles from './WorkCard.module.scss';
import { Link } from 'react-router-dom';

interface WorkCardProps {
  id: string;
  title: string;
  image: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ id, title, image }) => {
  return (
    <Link to={`/works/${id}`} className={styles.card}>
      <img className={styles.image} src={image} alt={title} loading="lazy" />
      <div className={styles.caption}>{title}</div>
    </Link>
  );
};

export default WorkCard;
