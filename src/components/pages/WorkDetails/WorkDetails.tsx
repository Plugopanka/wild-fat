import React from 'react';
import { useParams } from 'react-router-dom';
import LabelList from '../../common/LabelList';
import PlayButton from '../../common/PlayButton';
import CardDetails from '../../common/CardDetails';
import { useLocalization } from '../../../contexts/LocalizationContext';
import styles from './WorkDetails.module.scss';

const WorkDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useLocalization();
  
  // Маппинг изображений и дополнительных данных
  const cardImages: Record<string, string> = {
    'Caldera': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631f972574477d53d6375cad_ScreenShot00016.png',
    'Ground-From-Under-The-Feet': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631fa8f72fd029a03c0df386_ScreenShot00003.png',
    'Phone-Rage': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/61e873180b37a881ff27aa2a_photo_2021-01-07_01-29-21.jpg',
    'Helicopter-HUD': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/62292e9579912485fd76b398_Screenshot%202022-03-10%20at%2001.41%201.png',
    'Eggs-Delivery': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6841f42de90df96d695e7_eggs_delivery_main_menu.jpg',
    'Before-I-Disappear': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6885d2b193fd9c457bc06_Frame%2012.jpg',
    'Darkest-Path': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ecd266bb0f99e9454cbdf57_DP.jpg',
    'death-mortal-conference': 'https://uploads-ssl.webflow.com/5e42aee008053d8670f84473/5e42e3db7b97a9493b67ad72_Final_map_city%203.png',
    'Dum-Spiro-Spero': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5e42e4027b97a98a7367ad8d_Final_map_city%202.png'
  };

  const videoUrls: Record<string, string> = {
    'Ground-From-Under-The-Feet': 'https://player.vimeo.com/video/749764372?title=0&byline=0&portrait=0',
    'Phone-Rage': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'Helicopter-HUD': 'https://player.vimeo.com/video/686860777?title=0&byline=0&portrait=0',
    'Eggs-Delivery': 'https://player.vimeo.com/video/421536617?title=0&byline=0&portrait=0',
    'Before-I-Disappear': 'https://player.vimeo.com/video/422828622?title=0&byline=0&portrait=0',
    'Darkest-Path': 'https://player.vimeo.com/video/423376585?title=0&byline=0&portrait=0',
    'death-mortal-conference': 'https://player.vimeo.com/video/362755415?title=0&byline=0&portrait=0',
    'Dum-Spiro-Spero': 'https://player.vimeo.com/video/392308816?title=0&byline=0&portrait=0'
  };

  const gameUrls: Record<string, string> = {
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
      {gameUrls[work.id] && <PlayButton gameUrl={gameUrls[work.id]} />}
      <CardDetails cardId={work.id} />
    </div>
  );
};

export default WorkDetails;
