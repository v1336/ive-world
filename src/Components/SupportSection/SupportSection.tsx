import React from "react";
import styles from "./SupportSection.module.css";

const SupportSection: React.FC = () => {
  return (
    <div className={styles.support}>
      <div className={styles.subSupport}>
        <div className={styles.telNumber}>
          <div className={styles.subTelNumber}>
            <h2 className={styles.supportTitle}>{"Техподдержка"}</h2>
            <p className={styles.supportSubtitle}>
              {"Единый номер технической поддержки:"}
            </p>
            <p className={styles.supportPhone}>{"+7 (800) 222 38 27"}</p>
          </div>
          <div className={styles.telButton}>
            <div className={styles.telButtonBackground}>
              <button
                className={styles.supportButton}
                onClick={() => (window.location.href = "tel:+78002223827")}
              >
                {"Позвонить"}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.eMail}>
          <div className={styles.subEmail}>
            <p className={styles.supportSubtitle}>{"E-mail:"}</p>
            <p className={styles.supportEmail}>{"ws@v-1336.ru"}</p>
          </div>
          <div className={styles.emailButton}>
            <div className={styles.emailButtonBackground}>
              <button
                className={styles.supportButton}
                onClick={() => (window.location.href = "mailto:ws@v-1336.ru")}
              >
                {"Написать"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
