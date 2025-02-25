import React from "react";
import styles from "./OnlineService.module.css";

const OnlineService: React.FC = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>{"Услуга онлайн"}</h1>
        <p className={styles.description}>
          {
            "Оставьте свой запрос на сайте www.ivelabs.ru, и наш специалист свяжется с вами в кратчайшие сроки!"
          }
        </p>
      </div>
      <div className={styles.bottomSection}>
        {/* <div className={styles.groupImage}></div> */}
        <button
          className={styles.requestButton}
          onClick={() => console.log("Request button clicked")}
        >
          {"Оставить запрос"}
        </button>
      </div>
    </div>
  );
};

export default OnlineService;
