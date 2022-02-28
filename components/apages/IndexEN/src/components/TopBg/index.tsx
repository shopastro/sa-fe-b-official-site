import React from "react";
import styles from "./index.module.scss";
import { Button } from "../../../../../common";
import Title from "../../../../../common/Title";

const TopBg: React.FC = () => {

  const textObj = {
    title: "Your first Choice for brand globalization",
    subTitle: 'We are a "One-stop" e-commerce SaaS platform, let the world discover your Brands!',
    slogan: 'You focus on products, <br/>We manage all the rest!',
    tryBtn: "Try Now!"
  }
  return (
    <div className={styles["banner"]}>
      <div className={styles["ball"]}></div>
      <div className={styles["rectangle"]}></div>
      <div className={styles["ball-small"]}></div>
      <div className={styles["banner-content"]}>
        <div className={styles["content-left"]}>
          <div className={styles["left-title"]}>
            <Title>{textObj.title}</Title>
          </div>
          <div className={styles["left-slogan"]}><div dangerouslySetInnerHTML={{__html: textObj.slogan }}/></div>
          <div className={styles["left-sub-title"]}>{textObj.subTitle}</div>
          <Button className={styles["try-now"]}><a href="mailto:shopastro@shopastro-inc.com">{textObj.tryBtn}</a></Button>
        </div>
        <div className={styles["content-right"]} />
      </div>
    </div>
  );
};

export default TopBg;
