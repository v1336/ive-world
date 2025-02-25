import React from "react";
import styles from "./ServiceSection.module.css";

const ServiceSection: React.FC = () => {
  return (
    <div className={styles.serviceSection}>
      <div className="service-content">
        <div className="service-header">
          <h2 className="service-title">IVE50Service</h2>
          <p className="service-description">
            Наше простое и удобное приложение для работы с программно-аппаратным
            комплексом ИВЭ-50
          </p>
        </div>

        <div className="download-section">
          <p className="download-title">Доступно для скачивания в:</p>
          <button className="download-button app-store">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z71RwN7fh_NXd_dK/frame-1.png"
              alt="App Store"
            />
          </button>
          <button className="download-button play-store">
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
