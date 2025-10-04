import React from "react";
import styles from "./SoftwareIcons.module.scss";
import { SOFTWARE_ICONS } from "./constants";
import SectionTitle from '../SectionTitle';

const SoftwareIcons: React.FC = () => {
  return (
    <div className={styles.softwareWrapper}>
      <SectionTitle className={styles.sectionTitle}>SOFTWARE</SectionTitle>
      <div className={styles.iconsRow}>
        {SOFTWARE_ICONS.map((icon, idx) => (
          <img
            key={idx}
            src={icon.src}
            alt={icon.alt}
            height={64}
            loading="lazy"
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SoftwareIcons;
