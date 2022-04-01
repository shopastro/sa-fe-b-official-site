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
            <Title>方便快捷</Title>
          </div>
          <div className={styles["right-slogan"]}>无门槛建站</div>
          <div className={styles["right-desc"]}>
            无需再为多到花眼的模版选择而烦恼, 点点就好！
          </div>
        </div>
      </div>
      <div className={styles["circle-station"]} />
    </div>
  );
};

export default BuildStation;
