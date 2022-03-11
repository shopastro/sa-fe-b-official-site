import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import Title from '../base/Title'

type IProps = {}

const JoinUs: React.FC<IProps> = (props) => {
  return (
    <div className={styles.joinUs}>
      <div className={styles.joinBox}>
        <Title size={48} text="加入我们" mbSize={24} />
        <div className={styles.joinCard}>
          <div className={styles.resume}>
            投递简历
            <div className={styles.go} />
          </div>
          <div className={styles.position}>
            在招岗位
            <div className={styles.go} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
