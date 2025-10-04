import React from "react";
import {Link} from 'react-router-dom';
import styles from './Header.module.scss';
import mainLogo from '../../../assets/icons/mainLogo.svg';
import {HEADER_LINKS} from './constants';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.leftLinks}>
          {HEADER_LINKS.map((link, index) => (
            <Link key={index} to={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
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
            <p className={styles.buttonText}>download cv</p>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
