import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";
import classNames from "classnames";

const Partner: React.FC = () => {
  return (
    <div className={styles["partner"]}>
      <Title size={34}>合作伙伴</Title>
      <div className={styles["partner-box"]}>
        <div className={classNames(styles["item"],styles["google"])}></div>
        <div className={classNames(styles["item"],styles["strip"])}></div>
        <div className={classNames(styles["item"],styles["paypal"])}></div>
        <div className={classNames(styles["item"],styles["lianlian"])}></div>
        <div className={classNames(styles["item"],styles["qh"])}></div>
        <div className={classNames(styles["item"],styles["logo-4px"])}></div>
        <div className={classNames(styles["item"],styles["joying-box"])}></div>
        <div className={classNames(styles["item"],styles["meetsocial-group"])}></div>
        <div className={classNames(styles["item"],styles["cmt"])}></div>
        <div className={classNames(styles["item"],styles["bluefocus"])}></div>
      </div>
    </div>
  );
};

export default Partner;
