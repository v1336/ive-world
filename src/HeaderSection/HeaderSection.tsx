import React from "react";
import mainLogo from "../Images/mainLogo.png";
import MirIve from "./MirIve/MirIve";
import styles from "./HeaderSection.module.css";

const HeaderSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.headerImage}>
          <img src={mainLogo} alt="Header Background" />
        </div>
        <div className={styles.titleFrame}>
          {/* <h1 className={styles.title}>Мир ИВЭ</h1> */}
          <MirIve />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
