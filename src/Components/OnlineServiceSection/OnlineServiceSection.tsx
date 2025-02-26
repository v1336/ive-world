import React from "react";
import styles from "./OnlineServiceSection.module.css";

const OnlineService: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{"Услуга онлайн"}</h1>
          <p className={styles.description}>
            {
              "Оставьте свой запрос на сайте www.ivelabs.ru, и наш специалист свяжется с вами в кратчайшие сроки!"
            }
          </p>
        </div>
      </div>
      <div className={styles.footSection}>
        <div className={styles.emptySection}></div>
        <div className={styles.concaveSection}>
          <div className={styles.rightConcaveSection}></div>
        </div>
        <div className={styles.bottomSection}>
          <button className={styles.requestButton}>{"Оставить запрос"}</button>
        </div>
      </div>
    </div>
  );
};

export default OnlineService;
