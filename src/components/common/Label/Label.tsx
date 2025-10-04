import React from 'react';
import styles from './Label.module.scss';
import {LabelProps} from './types';

 const Label: React.FC<LabelProps> = ({children, size = 'default'}) => {
   const sizeClass = size === 'small' ? styles.small : '';
   return (
     <span className={`${styles.label} ${sizeClass}`}>
       <span className={styles.labelText}>{children}</span>
     </span>
   );
 };

export default Label;
