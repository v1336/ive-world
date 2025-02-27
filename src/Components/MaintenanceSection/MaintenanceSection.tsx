import React from "react";
import styles from "./MaintenanceSection.module.css";
import settings from "../../Images/settings.png";

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
          <a
            href="https://v-1336.ru/services/obsluzhivanie-i-remont"
            target={"_blank"}
          >
            <button className={styles.requestButton}>
              {"Подробная информация"}
            </button>
          </a>
        </div>
        <div className={styles.emptySection}></div>
        <div className={styles.concaveSection}>
          <div className={styles.rightConcaveSection}></div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={settings} className={styles.backgroundImage} />
      </div>
    </div>
  );
};

export default MaintenanceSection;
