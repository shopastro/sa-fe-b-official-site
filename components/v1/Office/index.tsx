import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import Title from '../base/Title'

type IProps = {}

const Office: React.FC<IProps> = (props) => {
  return (
    <div className={styles.office}>
      <Title size={48} text="办公环境" mbSize={24} />
      <div className={styles.imgBox}>
        <div className={styles.imgLeft}>
          <div className={styles.img1} />
          <div className={styles.img2} />
        </div>
        <div className={styles.imgRight} />
      </div>
    </div>
  )
}

export default Office
