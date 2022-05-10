import React, { useState, useEffect } from 'react'

import styles from './index.module.scss'
// import classNames from 'classnames'

type IProps = {
  size?: 14 | 24 | 26 | 34
  onClick?: () => any
}

const Pendant: React.FC<IProps> = () => {
  const [isPc, setIsPc] = useState(true)

  const handleResize = () => {
    if (document.body.clientWidth < 770) {
      setIsPc(false)
    } else {
      setIsPc(true)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', () => {})
    }
  }, [])

  //   const { size = 24, onClick } = props
  return (
    <div className={styles.pendantPc}>
      {isPc ? (
        <ul>
          <li>
            <div className={styles.PcContainer}>
              <div className={styles.imgPc} />
              <div className={styles.textPc}> 在线咨询</div>
            </div>
          </li>
          <li>
            <div className={styles.PcContainer}>
              <div className={styles.imgPc} />
              <div className={styles.textPc}>
                电话咨询
                {/* <div className={styles.arrow_box}></div> */}
              </div>
            </div>
          </li>
          <li>
            <div className={styles.PcContainer}>
              <div className={styles.imgPc} />
              <div className={styles.textPc}> 微信咨询</div>
            </div>
          </li>
          <li>
            <div className={styles.PcContainer}>
              <div className={styles.imgPc} />
              <div className={styles.textPc}> 立即试用</div>
            </div>
          </li>
        </ul>
      ) : (
        <div className={styles.pendantMobile}>
          <div className={styles.mobileLeftBtn}>
            <span className={styles.imgMobile} />
            <span className={styles.textMobile}> 立即试用</span>
          </div>
          <div className={styles.mobileRightBtn}>
            <span className={styles.imgMobile} />
            <span className={styles.textMobile}> 在线咨询</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Pendant
