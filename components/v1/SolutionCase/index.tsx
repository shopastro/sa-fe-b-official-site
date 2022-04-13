import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import { list } from './constant'
import Graphic from './Graphic'

type IProps = {
  active: '' | 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase'
  onActive: (p: '') => void
}

const SolutionCase: React.FC<IProps> = (props) => {
  const { active, onActive } = props
  const [activeType, setActiveType] = useState('brand')
  const listRef = useRef<any>()
  const getActive = (type: string) => {
    setActiveType(type)
  }

  useEffect(() => {
    if (active) {
      setActiveType(active)
      handleClick(active)
    }
  }, [active])

  useEffect(() => {
    const { offsetLeft = 0 } = document.getElementById(`${activeType}Top`) || {}
    const { clientWidth } = document.body
    if (offsetLeft > clientWidth) {
      listRef.current.scrollLeft = offsetLeft
    } else {
      listRef.current.scrollLeft = 0
    }
  }, [activeType])

  const handleClick = (type: string) => {
    const { offsetTop = 0 } = document.getElementById(type) || {}
    let offset = -100
    const { offsetWidth = 0 } = document.querySelector('body') || {}
    if (offsetWidth > 750) {
      offset = 226
    }

    window.scrollTo({
      top: offsetTop - offset,
      left: 0,
      behavior: 'smooth',
    })

    onActive('')
  }

  return (
    <div className={styles.solutionCase} id="solutionCase">
      <div className={styles.list} ref={listRef}>
        {list.map((it) => {
          return (
            <div
              key={it.type}
              id={`${it.type}Top`}
              className={`${styles[it.type]}`}
              data-active={activeType === it.type && 'active'}
              onClick={() => {
                handleClick(it.type)
              }}
            >
              {it.title}
            </div>
          )
        })}
      </div>
      <div
        className={styles.goTop}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
      />

      <div className={styles.graphicList}>
        {list.map((it) => {
          return <Graphic key={it.type} {...it} onChange={getActive} />
        })}
      </div>
    </div>
  )
}

export default SolutionCase
