import React from "react";
import Title from "../../../../../common/Title";
import styles from "./index.module.scss";

const Service: React.FC = () => {
  return (
    <div className={styles["service"]}>
      <div className={styles["service-left"]}></div>
      <div className={styles["service-right"]}>
        <div className={styles["right-title"]}>
          <Title>全方位智能优化</Title>
        </div>
        <div className={styles["right-slogan"]}>
          事半功倍的管理工具 贴心专业的专人服务
        </div>
        <div className={styles["right-desc"]}>
          多店铺、CRM、全渠道投放、智能决策等，好工具要好用；
          专业的服务和运营团队，将陪伴守护您的跨境之路！
        </div>
      </div>

      {/* <div className={styles["circle-launch"]} /> */}
    </div>
  );
};

export default Service;
