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
                星盘跨境
                shopastro，总部位于杭州，是中国品牌出海一站式全链路服务商，依托一站式SaaS电商服务平台，融合独立站搭建与品牌海外化运营于一体，赋能中国品牌全球化，助力打造品牌海外私域生态。
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
                星盘创始团队均来自于阿里、百度、字节等顶尖互联网公司，深耕互联网电商领域数十载，拥有丰富的专业领域实操经验、成熟的团队管理模式。
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
