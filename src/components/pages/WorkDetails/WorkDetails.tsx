import React from 'react';
import { useParams } from 'react-router-dom';
import LabelList from '../../common/LabelList';
import PlayButton from '../../common/PlayButton';
import CardDetails from '../../common/CardDetails';
import { useLocalization } from '../../../contexts/LocalizationContext';
import { cardImages } from '../Works/constants';
import styles from './WorkDetails.module.scss';

const WorkDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useLocalization();
  
  const videoUrls: Record<string, string> = {
    'Ground-From-Under-The-Feet': 'https://player.vimeo.com/video/749764372?title=0&byline=0&portrait=0',
    'Phone-Rage': 'https://player.vimeo.com/video/687133982?title=0&byline=0&portrait=0',
    'Helicopter-HUD': 'https://player.vimeo.com/video/686860777?title=0&byline=0&portrait=0',
    'Eggs-Delivery': 'https://player.vimeo.com/video/421536617?title=0&byline=0&portrait=0',
    'Before-I-Disappear': 'https://player.vimeo.com/video/422828622?title=0&byline=0&portrait=0',
    'Darkest-Path': 'https://player.vimeo.com/video/423376585?title=0&byline=0&portrait=0',
    'death-mortal-conference': 'https://player.vimeo.com/video/362755415?title=0&byline=0&portrait=0',
    'Dum-Spiro-Spero': 'https://player.vimeo.com/video/392308816?title=0&byline=0&portrait=0'
  };

  const gameUrls: Record<string, string> = {
    'Dark-Delivery': 'https://untero.itch.io/dark-delivery',
    'Caldera': 'https://wild-fat.itch.io/caldera',
    'Ground-From-Under-The-Feet': 'https://ldjam.com/events/ludum-dare/50/fallen-platforms-but-not-today',
    'Phone-Rage': 'https://wild-fat.itch.io/phone-rage',
    'Eggs-Delivery': 'https://wild-fat.itch.io/eggs-delivery',
    'Before-I-Disappear': 'https://wild-fat.itch.io/before-i-disappear',
    'death-mortal-conference': 'https://wild-fat.itch.io/death-mortal-conference'
  };

  const work = t.worksCards.find(w => w.id === id);

  if (!work) return <div className={styles.page}>{t.workDetails.workNotFound}</div>;

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.media}> 
          {videoUrls[work.id] ? (
            <iframe
              className={styles.video}
              src={videoUrls[work.id]}
              title={work.cardName || work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <img className={styles.image} src={cardImages[work.id]} alt={work.title} />
          )}

          {work.params && (
            <ul className={styles.params}>
              {work.params.map((p, i) => (
                <li key={i} className={styles.description}>{p}</li>
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
      {gameUrls[work.id] && <PlayButton gameUrl={gameUrls[work.id]} />}
      <CardDetails cardId={work.id} />
    </div>
  );
};

export default WorkDetails;
