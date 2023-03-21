import axios from 'axios'
import classNames from 'classnames'
import Script from 'next/script'
import React, { useEffect, useState } from 'react'
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
  const [version, setVersion] = useState<string>()

  const handleClose = () => {
    setShowMoadl(false)
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      // @ts-ignore
      const isBeta = window?.gloConfig?.isBeta
      if (isBeta) {
        setVersion('beta')
      } else {
        try {
          axios.get('/api/shop/v1/frontsetting/queryByKey.json?configKey=showcase-sdk-version').then((res) => {
            const data = JSON.parse(res.data)
            const chatVersion = data['sa-c-chat-sdk']
            if (chatVersion) setVersion(chatVersion)
          })
        } catch (err) {
          console.log(err)
        }
      }
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
          {version && <Script src={`//sys.cdn.ishopastro.com/pages/${version}/sa-c-chat-sdk.js`} />}
        </li>
        <li id="pendantItem" style={{ display: 'none' }}></li>
      </ul>
      {showModal && <Modal visiable={showModal} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
