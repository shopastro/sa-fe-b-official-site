import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'
import { list } from './constant'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classname from 'classname'
import Modal from '../base/Modal'
import { buryingPoint } from '../../../utils/buryingPoint'
import { FireIcon } from '../../biz/Icon'

type IProps = { text?: string }

const Title: React.FC<IProps> = (props) => {
  const { text } = props
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

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
    if (scrollTop > 80) {
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
      window.removeEventListener('resize', onResize, true)
      window.removeEventListener('scroll', onScroll, true)
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

  return (
    <div
      className={classname(styles.menuBox, {
        [styles.menuBoxScroll]: scrolled,
      })}
    >
      <Link href="/" passHref>
        <h1 className={styles.logo}>shopastro</h1>
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
                  [styles.active]: router.pathname === href,
                })}
              >
                <Link href={href} passHref>
                  <h2 className={styles.menuItem}>{ text }</h2>
                </Link>
              </li>
            )
          })}

          <li className={styles.contentUs}>
            <Button type="black" className={styles.measure} onClick={() => router.push('/measure')}>
              <Link href="/measure">
                <>
                  <FireIcon style={{ marginRight: '4px' }} />
                  免费SEO检测
                </>
              </Link>
            </Button>

            <Button
              text={text ? text : '立即开始'}
              type="ghost"
              onClick={() => {
                buryingPoint('click_touch_contact_form')
                setIsOpen(true)
              }}
            />
          </li>
        </ul>
      )}

      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default Title
