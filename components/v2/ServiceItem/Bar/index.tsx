import React, { useState } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

type IProps = {
  type: 'saas' | 'baas'
}

const Bar: React.FC<IProps> = (props) => {
  const { type } = props

  return (
    <div
      className={classnames(styles.Bar, {
        [styles.beluga]: type === 'baas',
      })}
    >
      <div className={styles.cell1}>{type === 'saas' ? '建站' : '白鲸'}</div>
      <div className={styles.cell2}>
        <div>基础版</div>
        <div className={styles.price}>￥9800</div>
      </div>
      <div className={styles.cell3}>
        <div>旗舰版</div>
        <div className={styles.price}>￥39800</div>
      </div>
      <div className={styles.cell4}>
        <div>企业版</div>
        <div className={styles.price}>面议咨询</div>
      </div>
    </div>
  )
}

export default Bar
