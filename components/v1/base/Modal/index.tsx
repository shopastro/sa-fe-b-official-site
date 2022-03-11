import React from 'react'
import styles from './index.module.scss'
import RcModal from 'react-modal'

type IProps = {}

const Modal: React.FC<IProps> = (props) => {
  const { children } = props
  return (
    <RcModal appElement={document.body} isOpen={true}>
      {children}
    </RcModal>
  )
}

export default Modal
