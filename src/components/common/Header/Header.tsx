import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import mainLogo from '../../../assets/icons/mainLogo.svg';
// import linkedinLogo from '../../../assets/icons/linked.svg';
import LinkedInIcon from '../LinkedInIcon';
import menuIcon from '../../../assets/icons/menu.svg';
import { useLocalization } from '../../../contexts/LocalizationContext';

const Header: React.FC = () => {
  const { t } = useLocalization();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300); // Длительность анимации
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftLinks}>
          <Link to="/works" className={styles.link}>
            {t.header.works}
          </Link>
          <Link to="/about" className={styles.link}>
            {t.header.about}
          </Link>
        </div>

        <div className={styles.logoContainer}>
          <img src={mainLogo} alt="Name Logo" className={styles.logo} />
        </div>

        <div className={styles.rightButtons}>
          <a
            className={styles.iconButton}
            target="_blank"
            href="https://www.linkedin.com/in/artemvodolazhsky/"
          >
            <LinkedInIcon />
          </a>
          <a
            className={styles.button}
            href="https://drive.google.com/uc?export=download&id=1isdGjzb0UeR6O1gN8OpBdR58Pv0AXiWk"
            download
            rel="noopener noreferrer"
          >
            <p className={styles.buttonText}>{t.header.downloadCv}</p>
          </a>
        </div>

        {/* Burger menu button for mobile */}
        <button className={styles.burgerButton} onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" className={styles.burgerIcon} />
        </button>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className={`${styles.mobileMenu} ${styles.open} ${isClosing ? styles.closing : ''}`}>
            <Link to="/works" className={styles.mobileLink} onClick={toggleMenu}>
              {t.header.works}
            </Link>
            <Link to="/about" className={styles.mobileLink} onClick={toggleMenu}>
              {t.header.about}
            </Link>
            <a
              className={styles.mobileLink}
              target="_blank"
              href="https://www.linkedin.com/in/artemvodolazhsky/"
              onClick={toggleMenu}
            >
              LinkedIn
            </a>
            <a
              className={styles.mobileLink}
              href="https://drive.google.com/uc?export=download&id=1isdGjzb0UeR6O1gN8OpBdR58Pv0AXiWk"
              download
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              {t.header.downloadCv}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
