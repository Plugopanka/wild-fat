import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './WorksHero.module.scss';
import { WorksHeroProps } from './types';

const WorksHero: React.FC<WorksHeroProps> = ({ 
  src, 
  alt = 'Current project', 
  linkTo, 
  logo, 
  video
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Предзагрузка видео при монтировании компонента
  useEffect(() => {
    if (video) {
      setShouldLoadVideo(true);
    }
  }, [video]);

  // Устанавливаем высокий приоритет загрузки видео через DOM-атрибут,
  // чтобы избежать проблем с типизацией @types/react 18.2 (fetchPriority отсутствует в JSX-типах)
  useEffect(() => {
    if (videoRef.current && shouldLoadVideo) {
      videoRef.current.setAttribute('fetchpriority', 'high');
    }
  }, [shouldLoadVideo]);

  // Управление воспроизведением видео
  useEffect(() => {
    if (videoRef.current && video && isVideoLoaded) {
      if (isHovered) {
        videoRef.current.play().catch(console.error);
      } else {
        videoRef.current.pause();
        if (videoRef.current.currentTime > 0) {
          videoRef.current.currentTime = 0;
        }
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
        
        {video && shouldLoadVideo && (
          <video 
            ref={videoRef}
            className={styles.video}
            loop={video.loop ?? true}
            muted={video.muted ?? true}
            playsInline
            preload="auto" // Изменено с metadata на auto для предзагрузки
            onLoadedData={handleVideoLoaded}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        )}
        
        {logo && (
          <div className={styles.logo}>
            <img src={logo} alt="Project logo" loading="lazy" />
          </div>
        )}
        
        <div className={styles.moreText}>
          more
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
