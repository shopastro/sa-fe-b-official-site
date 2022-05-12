import classNames from 'classnames'
import React, { useState } from 'react'
import Button from '../../v1/base/Button'
import Modal from '../../v1/base/Modal'
import styles from './index.module.scss'

type IProps = {}

const keyValueList = [
  { key: '行业：', value: '某品牌服饰客户' },
  { key: '对比维度：', value: '同时间段shopastro运营成效', value2: 'vs客户自运营成效' },
  { key: '订单量：', value: '为客户自投的', number: '18倍' },
  { key: 'Roas：', value: '为客户自投的', number: '4.3倍' },
  { key: '客单价：', number: '+50%' },
  { key: '月度复购率：', number: '15%（运营三个月后）' },
]

const LandingGuide: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.landingGuide}>
      <div className={styles.guideBg}>
        <div className={styles.mainBg}></div>
      </div>
      <div className={styles.guideWord}>
        <div className={styles.guideTitle}>
          <div className={styles.guideDesc}>行业运营专家</div>
          <div className={styles.guideDesc}>
            <span className={styles.guideLight}>一对一指导</span>出海策略
          </div>
        </div>
        <div className={styles.guideText}>助燃业务增长 实现品牌价值</div>
        <div className={styles.guideList}>
          {keyValueList.map((item) => {
            return (
              <div className={styles.guideOne} key={item.key}>
                <span className={styles.itemTitle}>{item.key}</span>
                <span className={styles.itemDesc}> {item.value} </span>
                {item.value2 && (
                  <span className={classNames(styles.itemDesc, styles.itemDescBlock)}> {item.value2} </span>
                )}
                <span className={styles.itemLight}> {item.number} </span>
              </div>
            )
          })}
        </div>
        <div className={styles.btnContainer}>
          <Button
            text="运营方案免费领取"
            className={styles.immediatelyBtn}
            onClick={() => {
              setIsOpen(true)
            }}
          />
        </div>
      </div>

      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default LandingGuide
