import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import Title from '../base/Title'

type IProps = {}

const Ecological: React.FC<IProps> = (props) => {
  return (
    <div className={styles.ecological}>
      <div className={styles.banner} />

      <div className={styles.titleBox}>
        <div className={styles.titleEn}>shopastro</div>
        <div className={styles.title}>跨境生态联盟计划</div>
      </div>

      <div className={styles.desc}>
        星盘跨境
        shopastro，力求打造涵盖产品、技术、交易、支付、物流、仓储等产业链条的跨境生态圈，让品牌卖家可以更省心、更简单地实现品牌出海。多环节的优质生态助力，在极大优化购物体验感的同时，大大降低了链路成本，也让品牌更具竞争力。
        shopastro诚邀跨境各环节服务商，共同缔结生态联盟，打造跨境生态圈。如果您在以下领域极具行业优势、有成功的商业合作案例，欢迎加入星盘生态联盟。
      </div>

      <div className={styles.partnerBox}>
        <div className={styles.partnerTitle}>
          <div>期待极具优势的</div>
          <div>生态伙伴</div>
        </div>
        <div className={styles.partnerDesc}>
          <div>联合更优的服务商，共建更大的生态圈， </div>
          <div>提供更全的跨境服务，助力更多的品牌卖家</div>
        </div>
      </div>
    </div>
  )
}

export default Ecological
