import React from "react";
import styles from "./ServiceSection.module.css";

const ServiceSection: React.FC = () => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceHeader}>
          <h2 className={styles.serviceTitle}>IVE50Service</h2>
          <p className={styles.serviceDescription}>
            Наше простое и удобное приложение для работы с программно-аппаратным
            комплексом ИВЭ-50
          </p>
        </div>

        <div className={styles.downloadSection}>
          <p className={styles.downloadTitle}>Доступно для скачивания в:</p>
          <button className={styles.downloadButton}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z71RwN7fh_NXd_dK/frame-1.png"
              alt="App Store"
            />
          </button>
          <button className={styles.downloadButton}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z71RwN7fh_NXd_dK/frame-2.png"
              alt="Play Store"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
