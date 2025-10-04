import React from 'react';
import { useParams } from 'react-router-dom';
import { WORKS_CARDS } from '../Works/constants';
import LabelList from '../../common/LabelList';
import PlayButton from '../../common/PlayButton';
import styles from './WorkDetails.module.scss';

const WorkDetails: React.FC = () => {
  const { id } = useParams();
  const work = WORKS_CARDS.find(w => w.id === id);

  if (!work) return <div className={styles.page}>Work not found</div>;

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.media}> 
          {work.videoUrl ? (
            <iframe
              className={styles.video}
              src={work.videoUrl}
              title={work.cardName || work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <img className={styles.image} src={work.image} alt={work.title} />
          )}

          {work.params && (
            <ul className={styles.params}>
              {work.params.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{work.cardName || work.title}</h1>
          {work.labels && <LabelList size="small">{work.labels}</LabelList>}
          {work.description && <p className={styles.description}>{work.description}</p>}
        </div>
      </div>
      {work.gameUrl && <PlayButton gameUrl={work.gameUrl} />}
    </div>
  );
};

export default WorkDetails;
