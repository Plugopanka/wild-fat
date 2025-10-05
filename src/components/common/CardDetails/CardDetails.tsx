import React from 'react';
import { useLocalization } from '../../../contexts/LocalizationContext';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './CardDetails.module.scss';

interface CardDetailsProps {
  cardId: string;
}

const CardDetails: React.FC<CardDetailsProps> = ({ cardId }) => {
  const { t } = useLocalization();
  const cardDetails = t.cardDetailsData.find(card => card.id === cardId);

  if (!cardDetails) {
    return <div className={styles.notFound}>{t.cardDetails.cardNotFound}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.articlesContainer}>
        {cardDetails.articles.map((article, index) => {
          const { ref, hasIntersected } = useIntersectionObserver();
          const isEven = index % 2 === 0;
          
          return (
            <div 
              key={index} 
              ref={ref as React.RefObject<HTMLDivElement>}
              className={`${styles.article} ${isEven ? styles.articleWithBackground : styles.articleWithoutBackground} ${
                hasIntersected ? styles.articleVisible : styles.articleHidden
              } ${isEven ? styles.slideFromRight : styles.slideFromLeft}`}
            >
              <div className={styles.articleContent}>
                {isEven ? (
                  // Четные статьи: GIF слева, текст справа
                  <>
                    <div className={styles.gifSection}>
                      <div className={styles.emptySpace}></div>
                    </div>
                    <div className={styles.textSection}>
                      <h4 className={styles.articleTitle}>{article.title}</h4>
                      <p className={styles.articleText}>{article.text}</p>
                    </div>
                  </>
                ) : (
                  // Нечетные статьи: текст слева, GIF справа
                  <>
                    <div className={styles.textSection}>
                      <h4 className={styles.articleTitle}>{article.title}</h4>
                      <p className={styles.articleText}>{article.text}</p>
                    </div>
                    <div className={styles.gifSection}>
                      <div className={styles.emptySpace}></div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardDetails;
