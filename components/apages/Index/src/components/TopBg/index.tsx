import React from "react";
import styles from "./index.module.scss";
import { Button } from "../../../../../common";
import Title from "../../../../../common/Title";
const TopBg: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.ball}></div>
      <div className={styles.rectangle}></div>
      <div className={styles['ball-small']}></div>
      <div className={styles['banner-content']}>
        <div className={styles['content-left']}>
          <div className={styles['left-title']}>
            <Title>出海首选 星盘跨境</Title>
          </div>
          <div className={styles["left-slogan"]}>货品您搞定 出海我搞定</div>
          <div className={styles["left-sub-title"]}>
            「一站式」跨境电商服务平台， 跨境卖家的出海首选！
          </div>
          <Button className={styles["try-now"]}><a href="mailto:shopastro@shopastro-inc.com">立即试用</a></Button>
        </div>
        <div className={styles["content-right"]} />
      </div>
    </div>
  );
};

export default TopBg;
