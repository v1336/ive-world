import React from "react";
import styles from "./MaintenanceSection.module.css";

const MaintenanceSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Обслуживание и ремонт</h2>
        <p className={styles.description}>
          Наша компания ставит перед собой приоритетную задачу — гарантировать
          бесперебойную работу оборудования и систем на объектах наших клиентов.
        </p>
      </div>
      <button className={styles.button}>Подробная информация</button>
    </div>
  );
};

export default MaintenanceSection;
