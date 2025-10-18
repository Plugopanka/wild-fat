import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './WorksHero.module.scss';
import { WorksHeroProps } from './types';
import { useLocalization } from '../../../contexts/LocalizationContext';

const WorksHero: React.FC<WorksHeroProps> = ({ 
  src, 
  alt = 'Current project', 
  linkTo, 
  logo, 
  video
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentLanguage } = useLocalization();
  
  const moreText = currentLanguage === 'en' ? 'more' : 'подробнее';

  useEffect(() => {
    if (videoRef.current && video) {
      if (isHovered) {
        if (isVideoLoaded) {
          videoRef.current.play().catch(console.error);
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered, video, isVideoLoaded]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  const content = (
    <div 
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.mediaContainer}>
        <img
          className={styles.image}
          src={src}
          alt={alt}
          loading="lazy"
        />
        
        {video && (
          <video 
            ref={videoRef}
            className={styles.video}
            loop={video.loop ?? true}
            muted={video.muted ?? true}
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoaded}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        )}
        
        {logo && (
          <div className={styles.logo}>
            <img src={logo} alt="Project logo" />
          </div>
        )}
        
        <div className={styles.moreText}>
          {moreText}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.hero}>
      {linkTo ? (
        <Link to={linkTo}>
          {content}
        </Link>
      ) : (
        <a href="https://mundfish.com/ru" target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )}
    </div>
  );
};

export default WorksHero;