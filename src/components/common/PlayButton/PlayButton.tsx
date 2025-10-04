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
        href={gameUrl || '#'} 
        target={gameUrl ? '_blank' : undefined}
        rel={gameUrl ? 'noopener noreferrer' : undefined}
        onClick={e => !gameUrl && e.preventDefault()}
      >
        Play Game
      </a>
    </div>
  );
};

export default PlayButton;
