import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

type IProps = {}

const Full: React.FC<IProps> = (props) => {
  return (
    <>
      <div className={styles.service}>
        <div className={styles.title}>服务对象</div>
        <div className={styles.object}>
          <div className={styles.factory}>B2B外贸工厂</div>
          <div className={styles.inBrand}>国内品牌</div>
          <div className={styles.outBrand}>跨境品牌大卖</div>
          <div className={styles.dtcBrand}>现存DTC品牌</div>
        </div>
      </div>
    </>
  )
}

export default Full
