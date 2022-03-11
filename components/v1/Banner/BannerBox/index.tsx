import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import Title from '../../base/Title'
import Button from '../../base/Button'
import Modal from 'react-modal'
import Form from '../../base/Form'
import { list } from './constant'

type IProps = {
  desc: string[]
  title: string
  mainTitle: any
  type?: 'abroad' | 'template' | 'solution'
}

const BannerBox: React.FC<IProps> = (props) => {
  const { desc, title, mainTitle, type = 'abroad' } = props
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
        {isOpen && (
          <Modal appElement={document.body} isOpen={true} overlayClassName={styles.overlay} className={styles.modal}>
            <div className={styles.modalForm}>
              <div className={styles.modalTitle}>shopastro将为您提供极致的产品和服务</div>
              <div
                className={styles.close}
                onClick={() => {
                  setIsOpen(false)
                }}
              />
              
              <Form list={list} type="use" />
            </div>
          </Modal>
        )}
      </div>
      <div className={`${styles.imgbox} ${styles[type]}`}></div>
    </div>
  )
}

export default BannerBox
