import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";

const BuildStation: React.FC = () => {
  return (
    <div className={styles["build-station"]}>
      <div className={styles["station-box"]}>
        <div className={styles["station-left"]}></div>
        <div className={styles["station-right"]}>
          <div className={styles["right-title"]}>
            <Title>Convenient</Title>
          </div>
          <div className={styles["right-slogan"]}>Building a store has never been easier</div>
          <div className={styles["right-desc"]}>
            Create a brand new online store just with few ‘clicks’.
          </div>
        </div>
      </div>
      <div className={styles["circle-station"]} />
    </div>
  );
};

export default BuildStation;
