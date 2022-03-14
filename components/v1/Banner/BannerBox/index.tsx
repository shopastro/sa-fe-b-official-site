import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Title from '../../base/Title'
import Button from '../../base/Button' 
import Modal from '../../base/Modal'

type IProps = {
  desc: string[]
  title: string
  mainTitle: any
  type?: 'abroad' | 'template' | 'solution'
}

const BannerBox: React.FC<IProps> = (props) => {
  const { desc, title, mainTitle, type = 'abroad' } = props
  const [isOpen, setIsOpen] = useState(false)
 

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.bannerBox}>
      <Title text={title} size={26} mbSize={18} />
      <div className={styles.mainTitle}>{mainTitle}</div>
      <div className={styles.desc}>
        {desc.map((it) => (
          <span key={it}>{it}</span>
        ))}
      </div>
      <div className={styles.btnNow}>
        <Button
          text="立即开始"
          onClick={() => {
            setIsOpen(true)
          }}
        />
        {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
      </div>
      <div className={`${styles.imgbox} ${styles[type]}`}></div>
    </div>
  )
}

export default BannerBox
