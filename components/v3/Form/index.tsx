import React from 'react'
import Form from '../../v1/base/Form'
import { list } from '../../v1/base/Modal/constant'
import styles from './index.module.scss'

type IProps = {}

const LandingAIEngine: React.FC<IProps> = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.left}>
        <div className={styles.leftTitle}>速速开启您的出海之路吧！</div>
        <div>
          <div className={styles.leftDesc}>选择shopastro</div>
          <div className={styles.leftDesc}>出海一站式 省心又省力</div>
        </div>
        <div className={styles.textContent}>
          <span className={styles.leftText}>
            星盘跨境
            shopastro，依托一站式SaaS电商服务平台，融合独立站搭建与品牌海外运营于一体，赋能中国品牌全球化，助力品牌打造海外私域生态！
          </span>
          {/* <span className={styles.leftText}>融合独立站搭建与品牌海外运营于一体，赋能中国品牌全球化，</span>
          <span className={styles.leftText}> 助力品牌打造海外私域生态！</span> */}
        </div>
      </div>
      <div className={styles.centre}></div>
      <div className={styles.right}>
        <div className={styles.rightTitle}>我们将为你提供极致的产品和服务</div>
        <Form list={list} type="use" />
      </div>
    </div>
  )
}

export default LandingAIEngine
