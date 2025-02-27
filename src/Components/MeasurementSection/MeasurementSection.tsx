import React from "react";
import styles from "./MeasurementSection.module.css";

const MeasurementSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{"Проверка средств измерений"}</h1>
          <p className={styles.description}>
            {
              "Метрологическая служба нашей компании осуществляет поверку различных средств измерений, обеспечивая высокую точность и надёжность."
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
          <a
            href="https://v-1336.ru/services/poverka-sredstv-izmereniy"
            target={"_blank"}
          >
            <button className={styles.requestButton}>
              {"Подробная информация"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MeasurementSection;
