import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";

const Launch: React.FC = () => {
  return (
    <div className={styles["launch"]}>
      <div className={styles["launch-left"]}></div>
      <div className={styles["launch-right"]}>
        <div className={styles["right-title"]}>
          <Title>Get a  200% increase on ROI</Title>
        </div>
        <div className={styles["right-slogan"]}>Various advertising plans</div>
        <div className={styles["right-desc"]}>
          Know buyers well, advertising within multi channels + SNS Promotions, Make it more accurate and efficient.
        </div>
      </div>

      <div className={styles["circle-launch"]} />
    </div>
  );
};

export default Launch;
