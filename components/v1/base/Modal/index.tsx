import React, { useEffect, useState } from 'react'
import RcModal from 'react-modal'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../../store/detectionStore'
import Success from '../../Success'
import Form from '../../base/Form'
import { list } from './constant'
import styles from './index.module.scss'

type IProps = {
  visiable: boolean
  handleClose: () => void
  children?: any
}

const Modal: React.FC<IProps> = (props: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [requested, setRequested] = useState(false)
  const { visiable = false } = props
  const { dataSource, setModalVisiabl, setShowMoadl } = useContainer(detectionStore)

  useEffect(() => {
    setIsOpen(visiable)
    if (visiable) {
      document.body.style.overflow = 'hidden'
      if (window.dataLayer && window.dataLayer.push) {
        // @ts-ignore
        dataLayer.push?.({
          event: 'gtm.click',
          'gtm.elementId': 'lead_form'
        })
      }
    }
  }, [visiable])

  const handleClose = () => {
    setIsOpen(false)
    setShowMoadl(false)
    document.body.style.overflow = 'unset'
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
                  handleClose()
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
                        props.handleClose && props.handleClose()
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
