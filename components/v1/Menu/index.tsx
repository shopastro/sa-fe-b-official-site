import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'
import { list } from './constant'

type IProps = {}

const Title: React.FC<IProps> = (props) => {
  const [openMenu, setOpenMenu] = useState(false)

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 770) {
      setOpenMenu(true)
    } else {
      setOpenMenu(false)
    }
  }

  useEffect(() => {
    const bodyWidth = document.querySelector('body')?.offsetWidth
    if (bodyWidth && bodyWidth > 770) {
      setOpenMenu(true)
    }
    window.addEventListener('resize', onResize, true)
    return window.removeEventListener('resize', onResize)
  }, [])

  const handleClick = (text: string) => {
    setOpenMenu(false)
  }
  return (
    <div className={styles.menuBox}>
      <div className={styles.logo} />

      {openMenu && <div className={styles.closeIcon} onClick={() => setOpenMenu(false)} />}
      {!openMenu && <div className={styles.menuIcon} onClick={() => setOpenMenu(true)} />}

      {openMenu && (
        <ul className={styles.menuList}>
          {list.map((it) => {
            const { text, href } = it
            return (
              <li key="text" onClick={() => handleClick(text)}>
                {text}
              </li>
            )
          })}

          <li className={styles.contentUs}>
            <Button text="联系我们" type="ghost" />
          </li>
        </ul>
      )}
    </div>
  )
}

export default Title
