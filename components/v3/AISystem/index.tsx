import classNames from 'classnames'
import React, { useState } from 'react'
import Button from '../../v1/base/Button'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'

type IProps = {}

const LandingAIEngine: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.aiSystem}>
      <div className={styles.sectionTitle}>
        <div className={styles.titleLight}>
          <span className={styles.titleLogo} /> AI智能系统
        </div>
        <div> “数据+决策”双支持</div>
      </div>
      <div className={styles.sectionDesc}>
        <span className={styles.frontDesc}>智能化的广告策略输出</span>
        <span className={styles.laterDesc}>基于AI大数据实现精准的营销投放</span>
      </div>
      <div className={styles.bottomContainer}>
        <div className={classNames(styles.frontBg, styles.supportItem)}>
          <div className={styles.itemContent}>
            <div className={styles.itemBg} />
            <div className={styles.itemTitle}>聚焦两大难点 </div>
            <div className={styles.itemDesc}>高效获客</div>
            <div className={styles.itemDesc}>精准运营</div>
          </div>
        </div>
        <div className={classNames(styles.behindBg, styles.supportItem)}>
          <div className={styles.itemContent}>
            <div className={styles.itemSubject}>白鲸智能营销系统</div>
            <div className={styles.itemTitle}>解放卖家时间</div>
            <div className={styles.itemDesc}>内置可供选择的行业策略</div>
            <div className={styles.itemDesc}>和自动化策略</div>
          </div>
        </div>
      </div>

      <Button
        text="了解详情"
        className={styles.immediatelyBtn}
        onClick={() => {
          setIsOpen(true)
        }}
      />
      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default LandingAIEngine
