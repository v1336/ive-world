import React from "react";
import styles from "./SupportSection.module.css";

const SupportSection: React.FC = () => {
  return (
    <div className={styles.supportSection}>
      <h2 className={styles.supportTitle}>Техподдержка</h2>
      <p className={styles.supportSubtitle}>
        Единый номер технической поддержки:
      </p>
      <p className={styles.supportPhone}>+7 (800) 222 38 27</p>

      <button
        className={styles.supportButton}
        onClick={() => (window.location.href = "tel:+78002223827")}
      >
        Позвонить
      </button>

      <p className={styles.supportEmail}>E-mail: ws@v-1336.ru</p>

      <button
        className={styles.supportButton}
        onClick={() => (window.location.href = "mailto:ws@v-1336.ru")}
      >
        Написать
      </button>
    </div>
  );
};

export default SupportSection;
