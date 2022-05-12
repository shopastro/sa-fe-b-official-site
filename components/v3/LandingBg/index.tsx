import React from 'react'
import styles from './index.module.scss'

type IProps = {}

const HomeBg: React.FC<IProps> = () => {
  return (
    <div className={styles.landingBg}>
      <div className={styles.first}>
        <div className={styles.topBannerFirstBg} />
      </div>
      <div className={styles.second} />
      <div className={styles.third} />
      <div className={styles.four} />
      <div className={styles.five} />
      {/* <div className={styles.second} />
      <div className={styles.across} />

      <div className={styles.three} />
      <div className={styles.four} />
      <div className={styles.five} />  */}
    </div>
  )
}

export default HomeBg
