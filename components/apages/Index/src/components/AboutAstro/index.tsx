import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

const AboutAstro: React.FC = () => {
  return (
      <div className={styles["about-astro"]}>
        <div className={styles["about-decoration"]}></div>
        <div className={styles["about-astro-content"]}>
          <div className={styles["about-title"]}>关于 shopastro</div>
          <div className={styles["about-slogan"]}>
            帮助跨境卖家一站式出海，让获客、交易、支付、物流、客户管理轻松简单
          </div>

          <div className={styles["about-feature"]}>
            <div className={styles["decoration"]}></div>
            <div className={styles["about-cell"]}>
              <div className={classNames(styles["feature-logo"],styles["get-customer"])}></div>
              <div className={styles["feature-title"]}>获客</div>
              <div className={styles["feature-desc"]}>
                洞察全球买家， <br/>建站、投放，轻松简单
              </div>
            </div>
            <div className={styles["about-cell"]}>
              <div className={classNames(styles["feature-logo"],styles["trading"])}></div>
              <div className={styles["feature-title"]}>交易</div>
              <div className={styles["feature-desc"]}>
                本地化买家体验， <br/>移动下单，随时随地
              </div>
            </div>
            <div className={styles["about-cell"]}>
              <div className={classNames(styles["feature-logo"],styles["protection"])}></div>
              <div className={styles["feature-title"]}>保障</div>
              <div className={styles["feature-desc"]}>
                多支付渠道，差异化物流， <br/>安全快捷，省钱省心
              </div>
            </div>
            <div className={styles["about-cell"]}>
              <div className={classNames(styles["feature-logo"],styles["manager"])}></div>
              <div className={styles["feature-title"]}>管理</div>
              <div className={styles["feature-desc"]}>
                多店铺、CRM、全渠道投放，<br/>好工具，让管理事半功倍
              </div>
            </div>
          </div>
        </div>
        <div className={styles["about-circle"]}></div>
      </div>
  );
};

export default AboutAstro;
