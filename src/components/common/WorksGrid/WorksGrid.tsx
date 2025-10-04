import React from 'react';
import styles from './WorksGrid.module.scss';

interface WorksGridProps {
  children: React.ReactNode;
}

const WorksGrid: React.FC<WorksGridProps> = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default WorksGrid;
