import React from 'react';
import styles from './MaintenanceSection.module.css';

interface MaintenanceSectionProps {
  style?: React.CSSProperties;
}

const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ style }) => {
  return (
    <div className={styles.container} style={style}>
      <div className={styles.content}>
        <h2 className={styles.title}>Обслуживание и ремонт</h2>
        <p className={styles.description}>
          Наша компания ставит перед собой приоритетную задачу — гарантировать бесперебойную работу оборудования и систем на объектах наших клиентов.
        </p>
      </div>
      <button className={styles.button}>
        Подробная информация
      </button>
    </div>
  );
};

MaintenanceSection.defaultProps = {
  style: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '316px',
    height: 'auto',
  },
};

export default MaintenanceSection;

