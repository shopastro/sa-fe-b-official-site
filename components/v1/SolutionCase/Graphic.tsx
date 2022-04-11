import React, { useState, useEffect, useRef } from 'react'
import styles from './index.module.scss'
import { Data } from './constant'

type IProps = Data & {
  onChange: any
}

const Graphic: React.FC<IProps> = (props) => {
  const { type, textList = [], onChange } = props
  const graphicRef = useRef<any>()

  const handleScroll = (e: any) => {
    if (!e.srcElement.documentElement) {
      return
    }

    const clientHeight = e.srcElement.documentElement.clientHeight
    const offsetTop = graphicRef.current?.offsetTop
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement?.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body?.scrollTop : 0)

    if (offsetTop - scrollTop < clientHeight / 2 && offsetTop - scrollTop > -200) {
      onChange && onChange(type)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])

  return (
    <div className={styles.graphic} ref={graphicRef} id={type}>
      <div className={`${styles.imgBox} ${styles[type]}`} />{' '}
      <div className={styles.textBox}>
        {textList.map((it) => {
          return (
            <div key={it.title}>
              <div className={styles.listTitle}>{it.title}</div>
              {it.list.map((txt) => {
                return (
                  <div key={txt} className={styles.listText}>
                    {txt}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Graphic
