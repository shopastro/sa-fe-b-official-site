import React, { useState, useEffect } from 'react'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'
// import classNames from 'classnames'

type IProps = {
  size?: 14 | 24 | 26 | 34
  onClick?: () => any
}

const Pendant: React.FC<IProps> = () => {
  const [isPc, setIsPc] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

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
              <div className={styles.textPc}>电话咨询</div>
            </div>
            <div className={styles.arrow_box}>
              <div className={styles.boxText}>出海咨询热线: 400-669-2228</div>
            </div>
          </li>
          <li>
            <div className={styles.PcContainer}>
              <div className={styles.imgPc} />
              <div className={styles.textPc}> 微信咨询</div>
            </div>
            <div className={styles.arrow_box}>
              <div className={styles.imgBcg}></div>
            </div>
          </li>
          <li>
            <div
              className={styles.PcContainer}
              onClick={() => {
                setIsOpen(true)
              }}
            >
              <div className={styles.imgPc} />
              <div className={styles.textPc}>立即试用</div>
            </div>
          </li>
        </ul>
      ) : (
        <div className={styles.pendantMobile}>
          <div
            className={styles.mobileLeftBtn}
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <span className={styles.imgMobile} />
            <span className={styles.textMobile}>立即试用</span>
          </div>
          <div className={styles.mobileRightBtn}>
            <span className={styles.imgMobile} />
            <span className={styles.textMobile}> 在线咨询</span>
          </div>
        </div>
      )}
      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
