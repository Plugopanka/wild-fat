import React from 'react';
import styles from './LabelList.module.scss';
import {LabelListProps} from './types';
import Label from '../Label';

const LabelList: React.FC<LabelListProps> = ({children, size = 'default'}) => {
  return (
    <ul className={styles.labelList}>
      {React.Children.map(children, child => (
        <li>
          <Label size={size}>{child}</Label>
        </li>
      ))}
    </ul>
  );
};

export default LabelList;
