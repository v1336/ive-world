import React from "react";
import styles from "./MeasurementSection.module.css";

const MeasurementSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Проверка средств измерений</h2>
        <p className={styles.description}>
          Метрологическая служба нашей компании осуществляет поверку различных
          средств измерений, обеспечивая высокую точность и надёжность.
        </p>
      </div>
      <button
        className={styles.button}
        onClick={() => console.log("More info clicked")}
      >
        Подробная информация
      </button>
    </div>
  );
};

export default MeasurementSection;
