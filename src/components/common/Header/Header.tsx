import React from "react";
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import mainLogo from '../../../assets/icons/mainLogo.svg';
import { useLocalization } from '../../../contexts/LocalizationContext';

const Header: React.FC = () => {
  const { t, currentLanguage, changeLanguage } = useLocalization();

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
            href="https://www.linkedin.com/in/artem-vodolazhskiy-4b394174"
          >
            <img
              src="https://cdn.prod.website-files.com/5e42aee008053d8670f84473/6342d782025b9f7ad555a30f_icons8-linkedin-circled.svg"
              alt="Name Logo"
              className={styles.alogo}
            />
          </a>
          <a
            className={styles.button}
            href="https://drive.google.com/uc?export=download&id=1isdGjzb0UeR6O1gN8OpBdR58Pv0AXiWk"
            download
            rel="noopener noreferrer"
          >
            <p className={styles.buttonText}>{t.header.downloadCv}</p>
          </a>
          <div className={styles.languageSwitcher}>
            <button 
              className={`${styles.languageButton} ${currentLanguage === 'en' ? styles.active : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button 
              className={`${styles.languageButton} ${currentLanguage === 'ru' ? styles.active : ''}`}
              onClick={() => changeLanguage('ru')}
            >
              RU
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
