import React from 'react'
import styles from './index.module.scss'

type IProps = {}

const HomeBg: React.FC<IProps> = (props) => {
  return (
    <div className={styles.homeBg}>
      <div className={styles.topBannerBg} />
      <div className={styles.first} />
      <div className={styles.second} />
      <div className={styles.across} />

      <div className={styles.three} />
      <div className={styles.four} />
      <div className={styles.five} />
    </div>
  )
}

export default HomeBg
