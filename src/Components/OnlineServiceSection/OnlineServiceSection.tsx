import React from "react";
import styles from "./OnlineServiceSection.module.css";

const OnlineServiceSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Услуга онлайн</h2>
        <p className={styles.description}>
          Оставьте свой запрос на сайте www.ivelabs.ru, и наш специалист
          свяжется с вами в кратчайшие сроки!
        </p>
      </div>
      <button
        className={styles.requestButton}
        onClick={() => console.log("Request button clicked")}
      >
        Оставить запрос
      </button>
    </div>
  );
};

export default OnlineServiceSection;
