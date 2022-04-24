import React from 'react'
import Title from '../../v1/base/Title'
import styles from './index.module.scss'

type IProps = {}

const Introduce: React.FC<IProps> = (props) => {
  return (
    <div className={styles.waist}>
      <div className={styles.waistText}>
        <div>让中国品牌卖家享受更好的商业服务</div>
        <div className={styles.waistTextEn}>Let The World Discover Better China Brands</div>
      </div>
    </div>
  )
}

export default Introduce
