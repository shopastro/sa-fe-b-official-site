import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import { site, increase, launch, operating, ecological, Data } from './constant'
import Graphic from './Graphic'

type IProps = {}

const AboutBanner: React.FC<IProps> = (props) => {
  return (
    <div className={styles.aboutBanner}>
      <div className={styles.title}>
        <div>星盘跨境</div>
        <div>shopastro</div>
      </div>
      <div className={styles.desc}>助力中国品牌一站式出海</div>
      <div className={styles.banner} />
    </div>
  )
}

export default AboutBanner
