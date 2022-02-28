import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";

const BuildStation: React.FC = () => {
  return (
    <div className={styles["logistics"]}>
      <div className={styles["logistics-box"]}>
        <div className={styles["logistics-left"]}></div>
        <div className={styles["logistics-right"]}>
          <div className={styles["right-title"]}>
            <Title>Caring, meticulous and thoughtful</Title>
          </div>
          <div className={styles["right-slogan"]}>Money-saving and worry-free logistics payment solution</div>
          <div className={styles["right-desc"]}>
            various payment  methods, safe and fast.
          </div>
        </div>
      </div>
      <div className={styles["circle-logistics"]} />
      <div className={styles["rectangle-logistics"]} />
    </div>
  );
};

export default BuildStation;
