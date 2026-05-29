import React, { useState, useCallback } from 'react';
import styles from './YouTubePlayer.module.scss';

interface YouTubePlayerProps {
  youtubeUrl: string;
  title?: string;
  backgroundImage?: string; // фолбэк-изображение, если нет YouTube
}

/**
 * Извлекает YouTube video ID из URL.
 * Поддерживает форматы:
 *   https://www.youtube.com/watch?v=VIDEO_ID
 *   https://youtu.be/VIDEO_ID
 *   https://www.youtube.com/embed/VIDEO_ID
 */
const extractVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/embed\/)([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  youtubeUrl,
  title = 'YouTube video',
  backgroundImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailError, setThumbnailError] = useState(false);

  const videoId = extractVideoId(youtubeUrl);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null;

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handleThumbnailError = useCallback(() => {
    setThumbnailError(true);
  }, []);

  // Если нет валидного YouTube URL — показываем фолбэк-изображение
  if (!videoId || !thumbnailUrl) {
    if (backgroundImage) {
      return (
        <div className={styles.container}>
          <img
            className={styles.fallbackImage}
            src={backgroundImage}
            alt={title}
          />
        </div>
      );
    }
    return null;
  }

  return (
    <div className={styles.container}>
      {isPlaying ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          className={styles.thumbnailButton}
          onClick={handlePlay}
          aria-label={`Play ${title}`}
        >
          {!thumbnailError ? (
            <img
              className={styles.thumbnail}
              src={thumbnailUrl}
              alt={title}
              onError={handleThumbnailError}
            />
          ) : backgroundImage ? (
            <img
              className={styles.thumbnail}
              src={backgroundImage}
              alt={title}
            />
          ) : (
            <div className={styles.thumbnailPlaceholder}>
              {title}
            </div>
          )}

          <div className={styles.playOverlay}>
            <div className={styles.playButton}>
              <svg viewBox="0 0 68 48" width="68" height="48">
                <rect width="68" height="48" rx="8" fill="rgba(0,0,0,0.7)" />
                <polygon points="26,16 46,24 26,32" fill="white" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default YouTubePlayer;
