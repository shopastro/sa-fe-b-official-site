import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import Title from '../base/Title'

type IProps = {}

const ContentUs: React.FC<IProps> = (props) => {
  return (
    <div className={styles.contentUs}>
      <div className={styles.textBox}>
        <Title size={48} text="联系我们" mbSize={24} />
        <div className={styles.textList}>
          <div className={styles.mapMb} />
          <div className={styles.addr}>
            总部地址：<span>浙江省杭州市余杭区奥克斯未来中心5幢1701室</span>
          </div>
          <div className={styles.email}>咨询邮箱：contact@shopastro.com</div>
          <div className={styles.tel}>合作咨询：400-669-2228</div>
        </div>
      </div>

      <div className={styles.map} />
    </div>
  )
}

export default ContentUs
