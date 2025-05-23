import React from "react";
import styles from "./ServiceSection.module.css";
// import nashstore from "../../Images/NASHStore.png";
import appstore from "../../Images/AppStore.png";
import rustore from "../../Images/RUStore.png";

const ServiceSection: React.FC = () => {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceHeader}>
          <h2 className={styles.serviceTitle}>{"IVE50Service"}</h2>
          <p className={styles.serviceDescription}>
            {
              "Наше простое и удобное приложение для работы с программно-аппаратным комплексом ИВЭ-50"
            }
          </p>
        </div>

        <div className={styles.downloadSection}>
          <p className={styles.downloadTitle}>{"Доступно для скачивания в:"}</p>
          <a
            href="https://www.rustore.ru/catalog/app/com.ivelabs.ive50"
            target={"_blank"}
            style={{ width: "100%" }}
          >
            <button className={styles.requestButton}>
              <img
                src={rustore}
                alt="Ru Store"
                style={{ height: "56px", marginTop: "-12px" }}
              />
            </button>
          </a>
          <a
            href="https://apps.apple.com/ru/app/ive-50/id6737914396"
            target={"_blank"}
            style={{ width: "100%" }}
          >
            <button className={styles.requestButton}>
              <img
                src={appstore}
                alt="Play Store"
                style={{ height: "56px", marginTop: "-12px" }}
              />
            </button>
          </a>
          {/* <button className={styles.requestButton}>
            <img
              src={nashstore}
              alt="App Store"
              style={{ height: "56px", marginTop: "-12px" }}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
