import React from "react";
import Title from "../../../../../common/Title";
import classNames from "classnames"
import styles from "./index.module.scss";

const Vision: React.FC = () => {


  return (
    <div className={styles["vision"]}>
      {/* <div className={styles["circle-launch"]} /> */}
      <div className={styles["vision-main"]}>
        <div className={styles["vision-slogan"]}>
          <Title>星盘 shopastro</Title>
        </div>
        <div className={styles["vision-title"]}>懂中国卖家，更懂海外买家</div>
        <div className={styles["vision-sub-title"]}>
          让中国品牌卖家享受更好的商业服务
        </div>
      </div>
      <div className={styles["vision-feature"]}>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img-1"],styles["feature-img"])}></div>
          <div className={styles["feature-title"]}>7x24热线客服</div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img"],styles["feature-img-2"])}></div>
          <div className={styles["feature-title"]}>1对1专属生意顾问</div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img"],styles["feature-img-3"])}></div>
          <div className={styles["feature-title"]}>强大易用贴心的管理后台</div>
        </div>
        <div className={styles["feature-card"]}>
          <div className={classNames(styles["feature-img"],styles["feature-img-4"])}></div>
          <div className={styles["feature-title"]}>高可用性，安全健壮的系统</div>
        </div>
      </div>

      <div className={styles["circle-vision"]} />
    </div>
  );
};

export default Vision;
