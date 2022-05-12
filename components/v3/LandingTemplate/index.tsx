import React from 'react'
import styles from './index.module.scss'

type IProps = {}

const LandingAIEngine: React.FC<IProps> = () => {
  return (
    <div className={styles.landingAIEngine}>
      <div className={styles.waistText}>
        <div>让中国品牌卖家享受更好的商业服务</div>
        <div className={styles.waistTextEn}>Let The World Discover Better China Brands</div>
      </div>
    </div>
  )
}

export default LandingAIEngine
