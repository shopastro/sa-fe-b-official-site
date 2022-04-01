import React, { useMemo } from 'react'
import styles from './index.module.scss'
import { list } from './constant'

type IProps = {}

const Graphic: React.FC<IProps> = () => {
  return (
    <div className={styles.graphic}>
      <div className={styles.subTitleBox}>
        <div>shopastro</div>
        <div>极致的专业化运作</div>
      </div>
      <div className={styles.graphicContainer}>
        {list.map((it) => (
          <div key={it.title} className={styles.graphicBox} style={{ flexDirection: it.rtl ? 'row-reverse' : 'row' }}>
            <div className={`${styles.imgBox} ${styles[it.type]}`} />
            <div className={styles.textBox}>
              <div className={styles.title}>{it.title}</div>
              <div className={styles.desc}>
                {it.text.map((txt) => (
                  <div key={txt}>{txt}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Graphic
