import React, { ReactChild, useEffect, useState } from 'react'
import styles from './index.module.scss'
import RcModal from 'react-modal'
import Form from '../../base/Form'
import { list } from './constant'
import Success from '../../Success'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../../store/detectionStore'

type IProps = {
  visiable: boolean
  handleClose: () => void
  children?: any
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [requested, setRequested] = useState(false)
  const { visiable = false } = props
  const { dataSource, setModalVisiabl, modalVisiabl } = useContainer(detectionStore)

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
        <>
          {!requested && (
            <div className={styles.modalForm}>
              {!props.children && <div className={styles.modalTitle}>shopastro将为您提供极致的产品和服务</div>}
              <div
                className={styles.close}
                onClick={() => {
                  setIsOpen(false)
                  setTimeout(() => {
                    props.handleClose()
                  }, 0)
                }}
              />
              {props.children ? (
                props.children
              ) : (
                <>
                  <Form
                    list={list}
                    type="use"
                    successCallback={() => {
                      if (dataSource.url) {
                        setModalVisiabl(true)
                        setIsOpen(false)
                      }
                      setRequested(true)
                    }}
                  />
                </>
              )}
            </div>
          )}
          {requested && <Success handleClose={handleClose} />}
        </>
      </RcModal>
    </>
  )
}

export default Modal
