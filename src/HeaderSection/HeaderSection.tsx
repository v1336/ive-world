import React from "react";
import styles from "./HeaderSection.module.css";
import mainLogo from "../Images/mainLogo.png";

const HeaderSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src={mainLogo}
          alt="Header Background"
          className={styles.headerImage}
        />
      </div>
      <div className={styles.titleFrame}>
        <h1 className={styles.title}>Мир ИВЭ</h1>
      </div>
    </div>
  );
};

export default HeaderSection;
