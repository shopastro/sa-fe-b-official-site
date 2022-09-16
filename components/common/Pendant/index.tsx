import React, { useState, useEffect } from 'react'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'
import classNames from 'classnames'
import { buryingPoint } from '../../../utils/buryingPoint'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../store/detectionStore'
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
      <ul>
        <li>
          <div
            className={classNames(styles.pendantItem)}
            id={'pendantItem'}
            onClick={() => {
              //添加埋点
              buryingPoint('click_online_chat')
            }}
          >
            {isPc ? (
              <>
                <div className={styles.imgItem} />
                <div className={styles.textItem}> 在线咨询</div>
              </>
            ) : (
              <>
                <span className={styles.imgItem} />
                <span className={styles.textItem}>在线咨询</span>
              </>
            )}
          </div>
        </li>
        <li>
          <div
            className={styles.pendantItem}
            onMouseEnter={() => {
              //添加埋点
              buryingPoint('hover_contact_info')
            }}
          >
            <div className={styles.imgItem} />
            <div className={styles.textItem}>电话咨询</div>
          </div>
          <div className={styles.arrow_box}>
            <div className={styles.boxText}>出海咨询热线: 400-669-2228</div>
          </div>
        </li>
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
            <div className={styles.textItem}>立即试用</div>
          </div>
        </li>
      </ul>

      {(isOpen || showModal) && <Modal visiable={isOpen || showModal} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
