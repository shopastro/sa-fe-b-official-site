import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";
import classNames from "classnames";

const Vision: React.FC = () => {
  return (
    <div className={styles["vision"]}>
      {/* <div className={styles["circle-launch"]} /> */}
      <div className={styles["vision-main"]}>
        <div className={styles["vision-slogan"]}>
          <Title>shopastro</Title>
        </div>
        <div className={styles["vision-title"]}>Know you well and know also your customers well</div>
        <div className={styles["vision-sub-title"]}>
          Let the World Discover Better China Brands
        </div>
      </div>
      <div className={styles["vision-feature"]}>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img-1"],styles["feature-img"])}></div>
          <div className={styles["feature-title"]}><span>7x24 customer service</span></div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img"],styles["feature-img-2"])}></div>
          <div className={styles["feature-title"]}><span>1v1 Expert & Consultant support</span></div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img"],styles["feature-img-3"])}></div>
          <div className={styles["feature-title"]}><span>Powerful but easy-to-use operation backend</span></div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img"],styles["feature-img-4"])}></div>
          <div className={styles["feature-title"]}><span>High Availability and Safe System</span></div>
        </div>
      </div>

      <div className={styles["circle-vision"]} />
    </div>
  );
};

export default Vision;
