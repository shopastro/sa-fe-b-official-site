import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { caseList } from './constant'
import classNames from 'classnames'
type IProps = {}

const Full: React.FC<IProps> = (props) => {
  const [active, setActive] = useState<'brand' | 'b2b' | 'border' | 'domestic'>('b2b')

  const getDetail = () => {
    const item = caseList.find((it) => it.type === active)
    return (
      <>
        <div className={styles.title}>{item?.text}</div>
        <ul className={styles.desc}>
          {item?.list.map((txt) => {
            return <li key={txt}>{txt}</li>
          })}
        </ul>
      </>
    )
  }
  return (
    <div className={styles.full}>
      <div className={styles.sectionTitle}>
        <div className={styles.titleLight}>为多类型客户提供</div>
        <div>针对性跨境解决方案</div>
      </div>
      <div className={styles.sectionDesc}>帮您找到更优解更高效出海路径</div>

      <div className={styles.contentBox}>
        <div className={styles.left}>
          {caseList.map((it) => {
            return (
              <div
                key={it.type}
                className={classNames(styles[it.type], {
                  [styles.active]: it.type === active,
                })}
                onClick={() => {
                  setActive(it.type)
                }}
              >
                {it.text}
              </div>
            )
          })}
        </div>
        <div className={styles.rightTowBox}>
          <div className={styles[`${active}Img`]}></div>
          <div className={styles.content}>{getDetail()}</div>
        </div>
      </div>

      <div className={styles.contentBoxMb}>
        {caseList.map((it) => {
          return (
            <div key={it.type} className={styles.box}>
              <div className={styles[`${it.type}Img`]} />
              <div className={styles[`${it.type}`]}>{it.text}</div>
              <ul className={styles.desc}>
                {it.list.map((txt) => {
                  return <li key={txt}>{txt}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Full
