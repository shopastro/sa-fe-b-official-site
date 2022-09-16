import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import RcModal from 'react-modal'
import Form from '../../base/Form'
import { list } from './constant'
import Success from '../../Success'

type IProps = {
  visiable: boolean
  handleClose: () => void
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [requested, setRequested] = useState(false)
  const { visiable = false } = props

  useEffect(() => {
    setIsOpen(visiable)
  }, [visiable])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <RcModal appElement={document.body} isOpen={isOpen} overlayClassName={styles.overlay} className={styles.modal}>
        {!requested && (
          <div className={styles.modalForm}>
            <div className={styles.modalTitle}>shopastro将为您提供极致的产品和服务</div>
            <div
              className={styles.close}
              onClick={() => {
                setIsOpen(false)
                setTimeout(() => {
                  props.handleClose()
                }, 0)
              }}
            />

            <Form
              list={list}
              type="use"
              successCallback={() => {
                setRequested(true)
              }}
            />
          </div>
        )}
        {requested && <Success handleClose={handleClose} />}
      </RcModal>
    </>
  )
}

export default Modal
