import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import { site, increase, launch, operating, ecological, Data } from './constant'
import Graphic from './Graphic'

type IProps = {}

const Introduce: React.FC<IProps> = (props) => {
  return (
    <>
      <div className={styles.introduce} id="introduce">
        <div className={styles.box}>
          <div className={styles.introduce}>
            <div className={styles.line}>
              <div className={styles.place}>公司简介</div>
              <div className={styles.icon} />
            </div>

            <div>
              <div className={styles.title}>公司简介</div>
              <div className={styles.desc}>
                <div className={styles.mbimg} />
                shopastro是品牌出海服务领域的新锐者，成立于2021年8月，总部位于杭州，在义乌、深圳、厦门三地设立分公司，目前已服务百家以上大客户。其致力于为中国品牌卖家提供一站式出海全链路解决方案，以「大数据和AI技术驱动的精细化运营」实现品牌价值输出和流量变现。
              </div>
            </div>
          </div>
          <div className={styles.img} />
        </div>

        <div className={styles.box} id="team">
          <div className={styles.introduce}>
            <div className={styles.line}>
              <div className={styles.place}>团队优势</div>
              <div className={`${styles.icon} ${styles.icon2}`} />
            </div>

            <div>
              <div className={styles.title}>团队优势</div>
              <div className={styles.desc}>
                <div className={styles.mbimg2} />
                shopastro创始团队均来自阿里巴巴、字节跳动、百度等公司高管层。核心成员来自阿里国际、速卖通、字节跳动、百度、蚂蚁金服等公司，且多名成员为阿里巴巴产品、运营、设计、技术等领域P8、P9层级。在跨境电商、支付、SaaS领域，具备十年以上产品研发、运营和商业化运营经验。
              </div>
            </div>
          </div>
          <div className={`${styles.img} ${styles.img2}`} />
        </div>
      </div>
      <div className={styles.waist}>
        <div className={styles.waistText}>
          <div>让中国品牌卖家享受更好的商业服务</div>
          <div className={styles.waistTextEn}>Let The World Discover Better China Brands</div>
        </div>
      </div>
    </>
  )
}

export default Introduce
