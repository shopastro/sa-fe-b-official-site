import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";

const Launch: React.FC = () => {
  return (
    <div className={styles["launch"]}>
      <div className={styles["launch-left"]}></div>
      <div className={styles["launch-right"]}>
        <div className={styles["right-title"]}>
          <Title>转化率提升200%</Title>
        </div>
        <div className={styles["right-slogan"]}>多样化精准投放</div>
        <div className={styles["right-desc"]}>
          贴合本地买家的多渠道广告+社交投放， 精准转化、效率翻倍！
        </div>
      </div>

      <div className={styles["circle-launch"]} />
    </div>
  );
};

export default Launch;
