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
        <div className={styles.desc}>
          {item?.list.map((txt) => {
            return <div key={txt}>{txt}</div>
          })}
        </div>
      </>
    )
  }
  return (
    <div className={styles.full}>
      <div className={styles.sectionTitle}>客户针对性解决方案</div>

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
        <div className={styles[`${active}Img`]}></div>
        <div className={styles.content}>{getDetail()}</div>
      </div>

      <div className={styles.contentBoxMb}>
        {caseList.map((it) => {
          return (
            <div key={it.type} className={styles.box}>
              <div className={styles[`${it.type}Img`]} />
              <div className={styles[`${it.type}`]}>{it.text}</div>
              <div className={styles.desc}>
                {it.list.map((txt) => {
                  return <div key={txt}>{txt}</div>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Full
