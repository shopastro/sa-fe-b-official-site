import classNames from 'classnames'
import React from 'react'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../store/detectionStore'
import { buryingPoint } from '../../../utils/buryingPoint'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'

type IProps = {
  size?: 14 | 24 | 26 | 34
  onClick?: () => any
}

const Pendant: React.FC<IProps> = () => {
  const { showModal, setShowMoadl, setButtonType } = useContainer(detectionStore)

  const handleClose = () => {
    setShowMoadl(false)
  }

  return (
    <div className={styles.pendantContainer}>
      <ul>
        <li>
          <div
            className={styles.pendantItem}
            onMouseEnter={() => {
              //添加埋点
              buryingPoint('hover_contact_info')
            }}
          >
            <div className={styles.textItem}> 微信咨询</div>
            <div className={styles.imgItem} />
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
              setShowMoadl(true)
              setButtonType('toolbar')
            }}
          >
            <div className={styles.textItem}>立即咨询</div>
            <div className={styles.imgItem} />
          </div>
        </li>
        <li>
          <div id="sa-showcase-chat" className={styles['sa-showcase-chat']}></div>
        </li>
        <li id="pendantItem" style={{ display: 'none' }}></li>
      </ul>
      {showModal && <Modal visiable={showModal} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
