import React from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'

type IProps = {}

const AboutShopastro: React.FC<IProps> = (props) => {
  return (
    <div className={styles.aboutShopastro} id="aboutShopastro">
      <h3 className={styles.title}>关于 shopastro</h3>
      <div className={styles.desc}>
        <span>帮助跨境卖家一站式出海，</span>
        <span>让获客、交易、支付、物流、客户管理轻松简单</span>
      </div>
      <ul className={styles.item}>
        <li className={styles.easy}>
          <div className={styles.mainTitle}>获客</div>
          <div className={styles.subDesc}>
            <div>洞察全球买家，</div>
            <div>建站、投放，轻松简单</div>
          </div>
        </li>
        <li className={styles.freedom}>
          <div className={styles.mainTitle}>交易</div>
          <div className={styles.subDesc}>
            <div>本地化买家体验，</div>
            <div>移动下单，随时随地</div>
          </div>
        </li>
        <li className={styles.secure}>
          <div className={styles.mainTitle}>保障</div>
          <div className={styles.subDesc}>
            <div>多支付渠道，差异化物流，</div>
            <div>安全快捷，省钱省心</div>
          </div>
        </li>
        <li className={styles.efficiency}>
          <div className={styles.mainTitle}>管理</div>
          <div className={styles.subDesc}>
            <div>多店铺、CRM、全渠道投放，</div>
            <div>好工具，让管理事半功倍</div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AboutShopastro
