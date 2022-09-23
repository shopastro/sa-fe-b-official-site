import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Title from '../../../v1/base/Title'
import Link from 'next/link'

type Item = {
  text: string
  href?: string
  content?: string
  type?: string
  phone?: string
  email?: string
  cursor?: string
  targetHref?: string
}

type IProps = {
  title: string
  list: Item[]
}

const FooterItem: React.FC<IProps> = (props) => {
  const { title = '', list = [] } = props
  const [open, setOpen] = useState(false)

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 770) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  useEffect(() => {
    const bodyWidth = document.querySelector('body')?.offsetWidth
    if (bodyWidth && bodyWidth > 770) {
      setOpen(true)
    }
    window.addEventListener('resize', onResize, true)
    return window.removeEventListener('resize', onResize, true)
  }, [])

  return (
    <div className={styles.footerItem}>
      <div className={styles.itemTopBox} onClick={() => setOpen(!open)}>
        <Title text={title} size={14} color="white" mbSize={14} />
        {open ? <div className={styles.closeIcon} /> : <div className={styles.openIcon} />}
      </div>
      <ul className={styles.listBox}>
        {list.map((it) => {
          const { text, href, content, type, phone, email, cursor = 'pointer', targetHref } = it
          const style = { cursor }
          return (
            <li key={text} className={!open ? styles.open : styles.close}>
              {href && <Link href={href}>{text}</Link>}
              {targetHref && (
                <a href={targetHref} target="_blank" rel="noreferrer">
                  {text}
                </a>
              )}

              {type === 'email' && (
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  {email}
                </a>
              )}

              {type === 'phone' && (
                <a href={`tel:${phone}`} target="_blank" rel="noreferrer">
                  {phone}
                </a>
              )}

              {content && <span style={{ cursor, wordBreak: 'keep-all', whiteSpace: 'nowrap' }}>{content}</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterItem
