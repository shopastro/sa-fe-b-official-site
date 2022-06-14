import React, { useState } from 'react'
import Button from '../base/Button'
import Modal from '../../v1/base/Modal'
import { buryingPoint } from '../../../utils/buryingPoint'
import styles from './index.module.scss'

type IProps = {}

const LandingTemplate: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.landingTemplate}>
      <div className={styles.templateTitle}>
        <span className={styles.titlePart}>
          <span className={styles.titleHight}>100+</span>热门模版
        </span>
        <span className={styles.titlePart}>
          <span className={styles.titleHight}> 无门槛</span>轻松建站
        </span>
      </div>
      <div className={styles.engineText}>
        <span>安全+流畅+丰富功能</span>
        <span> 为您快速开启出海之路</span>
      </div>

      <div className={styles.templateBg} />

      <Button
        text="立即试用"
        type="ghost"
        className={styles.immediatelyBtn}
        onClick={() => {
          setIsOpen(true)
          buryingPoint('click_touch_contact_form')
        }}
      />
      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default LandingTemplate
