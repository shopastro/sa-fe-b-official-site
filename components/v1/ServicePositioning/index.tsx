import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import Title from '../base/Title'

type IProps = {}

const ServicePositioning: React.FC<IProps> = (props) => {
  return (
    <div className={styles.servicePositioning}>
      <Title size={48} text="服务定位" mbSize={24} />

      <div className={styles.listBox}>
        <div className={styles.box}>
          <div className={styles.brandLogo} />
          <div className={styles.posotion}>
            <div className={styles.title}>品牌</div>
            <div className={styles.desc}>以客户品牌为载体</div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.gmvLogo} />
          <div className={styles.posotion}>
            <div className={styles.title}>GMV</div>
            <div className={styles.desc}>以增长客户GMV为目标</div>
          </div>
        </div>


        <div className={styles.box}>
          <div className={styles.worthLogo} />
          <div className={styles.posotion}>
            <div className={styles.title}>长期价值</div>
            <div className={styles.desc}>实现客户品牌长期价值</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePositioning
