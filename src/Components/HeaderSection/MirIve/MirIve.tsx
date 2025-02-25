import React from "react";
import styles from "./MirIve.module.css";

const MirIve: React.FC = () => {
  return (
    <div className={styles.mirIveContainer}>
      <span className={styles.mirIveText}>{"Мир ИВЭ"}</span>
    </div>
  );
};

export default MirIve;
