import React, { useState } from 'react'
import Button from '../../v1/base/Button'
import Modal from '../../v1/base/Modal'
import classNames from 'classnames'
import styles from './index.module.scss'

type IProps = {}

const topList = [
  { title: '行业', text: '全球行业趋势分析', class: 'first' },
  { title: '区域', text: '重点国家区域分析', class: 'second' },
  { title: '竞品', text: '多维度竞品特点分析', class: 'three' },
]

const bottomList = [
  { title: '选品', text: '精细化选品策略输出', class: 'first' },
  { title: '建站', text: '全功能一站式Saas', class: 'second' },
  { title: '投放', text: '基于大数据的精准投放', class: 'three' },
]

const LandingAIEngine: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <div className={styles.landingAIEngine}>
      <div className={styles.engineTitle}>
        <span>AI引擎加持</span>
        <span className={styles.titleRight}> 帮你构建极优站点</span>
      </div>
      <div className={styles.engineText}>
        <span>深度站前分析</span>
        <span> 多国家多语言市场</span>
      </div>
      <div className={styles.engineList}>
        {topList.map((item) => {
          return (
            <div key={item.title} className={classNames(styles.engineItem, styles[item.class])}>
              <span className={styles.topTitle}>{item.title}</span>
              <span className={styles.itemText}>{item.text}</span>
            </div>
          )
        })}
      </div>
      <div className={styles.triangle} />
      <div className={styles.engineList}>
        {bottomList.map((item) => {
          return (
            <div key={item.title} className={classNames(styles.engineItem, styles[item.class])}>
              <span className={styles.bottomTitle}>{item.title}</span>
              <span className={styles.itemText}>{item.text}</span>
            </div>
          )
        })}
      </div>

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

export default LandingAIEngine
