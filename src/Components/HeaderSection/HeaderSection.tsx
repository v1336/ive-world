import React from "react";
import mainLogo from "../../Images/mainLogo.png";
import styles from "./HeaderSection.module.css";

const HeaderSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={mainLogo} className={styles.backgroundImage} />
        {/* <div className={styles.titleContainer}>
          <h1 className={styles.title}>Мир ИВЭ</h1>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderSection;
