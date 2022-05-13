import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from '../../v1/base/Button'
import { list } from './constant'
import Link from 'next/link'
import classname from 'classname'
import Modal from '../../v1/base/Modal'

type IProps = { text?: string }

const Title: React.FC<IProps> = (props) => {
  const { text } = props
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [pathname, setPathname] = useState('')

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 770) {
      setOpenMenu(true)
    } else {
      setOpenMenu(false)
    }
  }

  const onScroll = (e: any) => {
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement?.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body?.scrollTop : 0)
    if (scrollTop > 40) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    const bodyWidth = document.querySelector('body')?.offsetWidth
    if (bodyWidth && bodyWidth > 770) {
      setOpenMenu(true)
    }
    window.addEventListener('resize', onResize, true)
    window.addEventListener('scroll', onScroll, true)

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onResize)
    }
  }, [])

  const handleClick = () => {
    const bodyWidth = document.querySelector('body')?.offsetWidth
    if (bodyWidth && bodyWidth > 770) {
      setOpenMenu(true)
    } else {
      setOpenMenu(false)
    }
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])

  return (
    <div
      className={classname(styles.menuBox, {
        [styles.menuBoxScroll]: scrolled,
      })}
    >
      <Link href="/">
        <div className={styles.logo} />
      </Link>

      {openMenu && <div className={styles.closeIcon} onClick={() => setOpenMenu(false)} />}
      {!openMenu && <div className={styles.menuIcon} onClick={() => setOpenMenu(true)} />}

      {openMenu && (
        <ul className={styles.menuList}>
          {list.map((it) => {
            const { text, href } = it

            return (
              <li
                key={text}
                onClick={handleClick}
                id={`mene_${text}`}
                className={classname({
                  [styles.active]: pathname === href,
                })}
              >
                <Link href={href}>
                  <span> {text}</span>
                </Link>
              </li>
            )
          })}

          <li className={styles.contentUs}>
            <Button text={text ? text : '立即开始'} type="ghost" onClick={() => setIsOpen(true)} />
          </li>
        </ul>
      )}

      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default Title
