import React, { useState } from 'react'
import Button from '../../v1/base/Button'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'

type IProps = {}

const bannerList = [
  { type: 'function', top: '全功能', bottom: '独立站搭建' },
  { type: 'operate', top: '全链路', bottom: '运营指导' },
  { type: 'conversion', top: '高转化', bottom: '运营服务' },
  { type: 'ecology', top: '支付/物流', bottom: '等全生态支持' },
]

const TopBanner: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.topBannerBox}>
      <div className={styles.topBannerTitle}>
        <span className={styles.titleHight}>高效能</span>
        建站 <span className={styles.titleHight}>高转化</span>
        营销
      </div>
      <div className={styles.topBannerText}>「建站+营销+复购」打通出海全链路</div>
      <ul className={styles.topBannerList}>
        {bannerList.map((item) => {
          return (
            <li key={item.type}>
              <div className={styles.listText}>{item.top}</div>
              <div className={styles.listText}>{item.bottom}</div>
              <div className={`${styles[item.type]} ${styles.listBg}`}></div>
            </li>
          )
        })}
      </ul>
      <Button
        text="立即试用"
        className={styles.immediatelyBtn}
        onClick={() => {
          setIsOpen(true)
        }}
      />
      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default TopBanner
