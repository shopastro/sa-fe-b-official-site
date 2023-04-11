import classNames from 'classnames'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../store/detectionStore'
import { buryingPoint } from '../../../utils/buryingPoint'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'

const isBeta = process.env.APP_ENV === 'dev'
const chatSdkSrc = isBeta
  ? '//sys.cdn.ishopastro.com/pages/beta/sa-c-chat-sdk.js'
  : '//sys.cdn.ishopastro.com/lib/sa-chat-sdk.js'

type IProps = {
  size?: 14 | 24 | 26 | 34
  onClick?: () => any
}

const Pendant: React.FC<IProps> = () => {
  const { showModal, setShowMoadl, setButtonType } = useContainer(detectionStore)
  const [time, setTime] = useState(Date.now())

  const handleClose = () => {
    setShowMoadl(false)
  }

  useEffect(() => {
    if (!time) {
      setTime(Date.now())
    }
  }, [])

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
          {time && <Script key={Math.random()} src={`${chatSdkSrc}?t=${time}`} strategy="lazyOnload" />}
        </li>
        <li id="pendantItem" style={{ display: 'none' }}></li>
      </ul>
      {showModal && <Modal visiable={showModal} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
