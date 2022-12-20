import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../store/detectionStore'
import { buryingPoint } from '../../../utils/buryingPoint'
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
  const { showModal, setShowMoadl } = useContainer(detectionStore)

  const handleClose = () => {
    setIsOpen(false)
    setShowMoadl(false)
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
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={styles.pendantContainer}>
      <ul id={'pendantItem'}>
        <li>
          <div
            className={styles.pendantItem}
            onMouseEnter={() => {
              //添加埋点
              buryingPoint('hover_contact_info')
            }}
          >
            <div className={styles.imgItem} />
            <div className={styles.textItem}> 微信咨询</div>
          </div>
          <div className={styles.arrow_box}>
            <div className={styles.imgBcg}></div>
          </div>
        </li>
        <li>
          <div
            className={classNames(styles.pendantItem)}
            onClick={() => {
              buryingPoint('click_touch_contact_form')
              setIsOpen(true)
            }}
          >
            <div className={styles.imgItem} />
            <div className={styles.textItem}>免费试用</div>
          </div>
        </li>
      </ul>
      {(isOpen || showModal) && <Modal visiable={isOpen || showModal} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
