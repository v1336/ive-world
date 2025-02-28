import React from "react";
import styles from "./OnlineServiceSection.module.css";
import sim from "../../Images/sim.png";
import left from "../../Images/left.png";

const OnlineService: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{"Услуга онлайн"}</h1>
          <p className={styles.description}>
            {
              "Напишите свой запрос на почту sale@ivelabs.ru, и наш специалист свяжется с вами в кратчайшие сроки!"
            }
          </p>
        </div>
      </div>
      <div className={styles.footSection}>
        <div className={styles.emptySection}></div>
        <div className={styles.concaveSection}>
          <img src={left} className={styles.concaveImage} />
        </div>
        <div className={styles.bottomSection}>
          <button
            className={styles.requestButton}
            onClick={() => (window.location.href = "mailto:sale@ivelabs.ru")}
          >
            {"Оставить запрос"}
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={sim} className={styles.backgroundImage} />
      </div>
    </div>
  );
};

export default OnlineService;
