import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import Title from '../base/Title'
import Link from 'next/link'

type IProps = {}

const JoinUs: React.FC<IProps> = (props) => {
  return (
    <div className={styles.joinUs} id="joinUs">
      <div className={styles.joinBox}>
        <Title size={48} text="加入我们" mbSize={24} />
        <div className={styles.joinCard}>
          <a
            className={styles.resume}
            href="//www.zhipin.com/gongsi/0c4a441aa82110141nx82Nm9EFI~.html"
            target="_blank"
            rel="noreferrer"
          >
            投递简历
            <div className={styles.go} />
          </a>
          <a
            className={styles.position}
            href="//www.zhipin.com/gongsir/0c4a441aa82110141nx82Nm9EFI~.html?ka=company-jobs"
            target="_blank"
            rel="noreferrer"
          >
            在招岗位
            <div className={styles.go} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
