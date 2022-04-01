import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { listObj } from './constant'
import Button from '../../v1/base/Button'
import Modal from '../../v1/base/Modal'

type IProps = {}

const PriceColumn: React.FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [maxShow, setMaxShow] = useState({
    base: 8,
    ultimate: 8,
    enterprise: 8,
  })

  useEffect(() => {
    const bodyWidth = document.querySelector('body')?.offsetWidth
    if (bodyWidth && bodyWidth < 770) {
      setMaxShow({
        base: 0,
        ultimate: 0,
        enterprise: 0,
      })
    }
  }, [])

  const getList = (type: 'base' | 'ultimate' | 'enterprise') => {
    const max = maxShow[type]
    const list = listObj[type].slice(0, max)
    return (
      <ul>
        {list.map((txt) => {
          return <li key={txt}>{txt}</li>
        })}
      </ul>
    )
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.PriceColumn}>
      <div className={styles.base}>
        <div className={styles.version}>基础版</div>
        <div className={styles.price}>9800 RMB</div>
        <div className={styles.desc}>
          <div>极致流畅的全功能SaaS</div>
          <div>全面的建站支持与运营指导</div>
        </div>
        {getList('base')}
        <Button className={styles.baseBtn} text="立即开始" type="ghost" onClick={() => setIsOpen(true)} />
        {maxShow.base <= 8 && (
          <div
            className={styles.more}
            onClick={() => {
              setMaxShow({
                ...maxShow,
                base: 100,
              })
            }}
          >
            查看更多
          </div>
        )}
      </div>
      <div className={styles.ultimate}>
        <div className={styles.topBg}>
          <div className={styles.version}>旗舰版</div>
          <div className={styles.price}>39800 RMB</div>
          <div className={styles.desc}>
            <div>建站与营销的双重赋能</div>
            <div>基于AI大数据的精准投放</div>
          </div>
        </div>
        <div className={styles.top}>
          <div className={styles.version}>旗舰版</div>
          <div className={styles.price}>39800 RMB</div>
          <div className={styles.desc}>
            <div>建站与营销的双重赋能</div>
            <div>基于AI大数据的精准投放</div>
          </div>
        </div>
        {getList('ultimate')}

        <Button className={styles.ultimateBtn} text="立即开始" type="ghost" onClick={() => setIsOpen(true)} />
        {maxShow.ultimate <= 8 && (
          <div
            className={styles.more}
            onClick={() => {
              setMaxShow({
                ...maxShow,
                ultimate: 100,
              })
            }}
          >
            查看更多
          </div>
        )}
      </div>
      <div className={styles.enterprise}>
        <div className={styles.version}>企业版</div>
        <div className={styles.price}>
          188000 RMB <div className={styles.priceStart}>起</div>
        </div>
        <div className={styles.desc}>
          <div>打造流量闭环 沉淀品牌价值</div>
          <div>专注LTV与GMV的高效增长</div>
        </div>
        {getList('enterprise')}
        <Button className={styles.enterpriseBtn} text="立即开始" type="ghost" onClick={() => setIsOpen(true)} />
        {maxShow.enterprise <= 8 && (
          <div
            className={styles.more}
            onClick={() => {
              setMaxShow({
                ...maxShow,
                enterprise: 100,
              })
            }}
          >
            查看更多
          </div>
        )}
      </div>
      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default PriceColumn
