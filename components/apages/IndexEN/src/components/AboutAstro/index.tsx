import React from "react";

import styles from "./index.module.scss";
import classNames from "classnames";

const AboutAstro: React.FC = () => {
  return (
    <div className={styles["about-astro"]}>
      <div className={styles["about-decoration"]}></div>
      <div className={styles["about-astro-content"]}>
        <div className={styles["about-title"]}>About shopastro</div>
        <div className={styles["about-slogan"]}>
          We are a &quot;One-stop&quot; e-commerce SaaS platform. Give you an easy business admin dashboard for everything you
          need in an e-commerce &apos;travel&apos;, like traffic, transactions, shipping, CRM and so on.
        </div>

        <div className={styles["about-feature"]}>
          <div className={styles["decoration"]}></div>
          <div className={styles["about-cell-z"]}>
            <div className={styles["title-group"]}>
              <div className={classNames(styles["feature-logo"],styles["get-customer"])}></div>
              <div className={styles["feature-title"]}>Traffic</div>
            </div>
            <div className={styles["feature-desc"]}>
              Insight into buyers’ requirements, <br/>An easy way for Website building and marketing
            </div>
          </div>
          <div className={styles["about-cell-z"]}>
            <div className={styles["title-group"]}>
              <div className={classNames(styles["feature-logo"],styles["trading"])}></div>
              <div className={styles["feature-title"]}>Transactions</div>
            </div>
            <div className={styles["feature-desc"]}>
              Better purchasing experience with local payment methods,
              <br/>Buy and pay anywhere, anytime
            </div>
          </div>
          <div className={styles["about-cell-z"]}>
            <div className={styles["title-group"]}>
              <div className={classNames(styles["feature-logo"],styles["protection"])}></div>
              <div className={styles["feature-title"]}>Service guarantee</div>
            </div>
            <div className={styles["feature-desc"]}>
              Diverse payment and logistic solutions,<br/>secure and convenient
            </div>
          </div>
          <div className={styles["about-cell-z"]}>
            <div className={styles["title-group"]}>
              <div className={classNames(styles["feature-logo"],styles["manager"])}></div>
              <div className={styles["feature-title"]}>Management</div>
            </div>
            <div className={styles["feature-desc"]}>
              Multi-stores system, CRM, all-channel Advertising system and others great tools，<br/>&quot;A stitch in time
              saves nine.&quot;
            </div>
          </div>
        </div>
      </div>

      <div className={styles["about-circle"]}></div>
    </div>
  );
};

export default AboutAstro;
