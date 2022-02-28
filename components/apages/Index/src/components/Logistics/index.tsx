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
            <Title>贴心、细致、周到</Title>
          </div>
          <div className={styles["right-slogan"]}>省钱省心的 物流支付方案</div>
          <div className={styles["right-desc"]}>
            多支付渠道服务，安全快捷！ 差异化的物流解决方案，保障买家所需!
          </div>
        </div>
      </div>
      <div className={styles["circle-logistics"]} />
      <div className={styles["rectangle-logistics"]} />
    </div>
  );
};

export default BuildStation;
