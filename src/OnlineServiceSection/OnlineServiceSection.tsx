import React from 'react';
import styles from './OnlineServiceSection.module.css';

interface OnlineServiceSectionProps {
  style?: React.CSSProperties;
}

const OnlineServiceSection: React.FC<OnlineServiceSectionProps> = ({ style }) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Услуга онлайн</h2>
        <p className={styles.description}>
          Оставьте свой запрос на сайте www.ivelabs.ru, и наш специалист свяжется с вами в кратчайшие сроки!
        </p>
      </div>
      <button 
        className={styles.requestButton}
        onClick={() => console.log('Request button clicked')}
      >
        Оставить запрос
      </button>
    </div>
  );
};

OnlineServiceSection.defaultProps = {
  style: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '315px',
    height: 'auto',
  },
};

export default OnlineServiceSection;

