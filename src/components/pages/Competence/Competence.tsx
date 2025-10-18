import React from 'react';
import { useParams } from 'react-router-dom';
import LabelList from '../../common/LabelList';
import { useLocalization } from '../../../contexts/LocalizationContext';
import styles from './Competence.module.scss';

const Competence: React.FC = () => {
  const { id } = useParams();
  const { t } = useLocalization();

  const competence = t.competences?.find(c => c.id === id);

  if (!competence) return <div className={styles.page}>{t.competenceDetails?.competenceNotFound || 'Competence not found'}</div>;

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.media}>
          <img className={styles.image} src={competence.backgroundImage} alt={competence.title} />
          
          {competence.params && (
            <ul className={styles.params}>
              {competence.params.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{competence.name || competence.title}</h1>
          {competence.labels && <LabelList size="small">{competence.labels}</LabelList>}
          {competence.description && <p className={styles.description}>{competence.description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Competence;
