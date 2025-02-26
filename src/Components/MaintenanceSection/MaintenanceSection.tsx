import React from "react";
import styles from "./MaintenanceSection.module.css";

const MaintenanceSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{"Обслуживание и ремонт"}</h1>
          <p className={styles.description}>
            {
              "Наша компания ставит перед собой приоритетную задачу — гарантировать бесперебойную работу оборудования и систем на объектах наших клиентов."
            }
          </p>
        </div>
      </div>
      <div className={styles.footSection}>
        <div className={styles.bottomSection}>
          <button className={styles.requestButton}>
            {"Подробная информация"}
          </button>
        </div>
        <div className={styles.emptySection}></div>
        <div className={styles.concaveSection}>
          <div className={styles.rightConcaveSection}></div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceSection;
