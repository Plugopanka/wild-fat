import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; Vodolazhsky Artem (2026)</p>
    </footer>
  );
};

export default Footer;
