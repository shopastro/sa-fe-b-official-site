import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";

const Service: React.FC = () => {
  return (
    <div className={styles["service"]}>
      <div className={styles["service-left"]}></div>
      <div className={styles["service-right"]}>
        <div className={styles["right-title"]}>
          <Title>Comprehensive and Smart Optimization</Title>
        </div>
        <div className={styles["right-slogan"]}>
          Efficient Management Tools and also with VIP 1v1 professional service.
        </div>
        <div className={styles["right-desc"]}>
          Multi-stores system, CRM, all-channel Advertising system and others great tools.
          Our professional operation team will accompany with you and your business all the time!
        </div>
      </div>

      {/* <div className={styles["circle-launch"]} /> */}
    </div>
  );
};

export default Service;
