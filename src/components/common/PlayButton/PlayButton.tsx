import React from 'react';
import styles from './PlayButton.module.scss';

interface PlayButtonProps {
  className?: string;
  gameUrl?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ className, gameUrl }) => {
  return (
    <div className={`${styles.playWrapper} ${className || ''}`}>
      <a
        className={styles.playButton}
        href={gameUrl ?? '#'}
        target="_blank"
        rel="noopener noreferrer"
      >
        Play Game
      </a>
    </div>
  );
};

export default PlayButton;
