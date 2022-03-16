import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import { site, increase, launch, operating, ecological, Data } from './constant'
import Graphic from './Graphic'

type IProps = {}

const SolutionCase: React.FC<IProps> = (props) => {
  const [activeType, setActiveType] = useState('site')
  const listRef = useRef<any>()
  const getActive = (type: string) => {
    setActiveType(type)
  }

  useEffect(() => {
    if (activeType === 'ecological') {
      listRef.current.scrollLeft = 750
    }

    if (activeType === 'site') {
      listRef.current.scrollLeft = 0
    }
  }, [activeType])

  const handleClick = (type: string) => {
    const { offsetTop = 0 } = document.getElementById(type) || {}
    let offset = 92 + 10 + 30
    const { offsetWidth = 0 } = document.querySelector('body') || {}
    if (offsetWidth > 750) {
      offset = 226
    }

    window.scrollTo(0, offsetTop - offset)

    setActiveType(type)
  }

  return (
    <div className={styles.solutionCase}>
      <div className={styles.title}>星盘跨境 shopastro</div>
      <div className={styles.desc}>一站式出海全链路解决方案</div>
      <div className={styles.list} ref={listRef}>
        <div
          className={`${styles.site}`}
          data-active={activeType === 'site' && 'active'}
          onClick={() => {
            handleClick('site')
          }}
        >
          建站交易
        </div>
        <div
          className={`${styles.increase}`}
          data-active={activeType === 'increase' && 'active'}
          onClick={() => {
            handleClick('increase')
          }}
        >
          增长引擎
        </div>
        <div
          className={`${styles.launch}`}
          data-active={activeType === 'launch' && 'active'}
          onClick={() => {
            handleClick('launch')
          }}
        >
          广告投放
        </div>
        <div
          className={`${styles.operating}`}
          data-active={activeType === 'operating' && 'active'}
          onClick={() => {
            handleClick('operating')
          }}
        >
          全链路运营
        </div>
        <div
          className={`${styles.ecological}`}
          data-active={activeType === 'ecological' && 'active'}
          onClick={() => {
            handleClick('ecological')
          }}
        >
          生态链路
        </div>
      </div>
      <div className={styles.graphicList}>
        <Graphic {...site} onChange={getActive} />
        <Graphic {...increase} onChange={getActive} />
        <Graphic {...launch} onChange={getActive} />
        <Graphic {...operating} onChange={getActive} />
        <Graphic {...ecological} onChange={getActive} />
      </div>
    </div>
  )
}

export default SolutionCase
