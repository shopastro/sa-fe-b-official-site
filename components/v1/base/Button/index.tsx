import React from 'react'
import styles from './index.module.scss'

type IProps = {
  type?: 'primary' | 'ghost' | 'form'
  onClick?: () => any
  text?: string
}

const Button: React.FC<IProps> = (props) => {
  const { type = 'primary', text = '', children, onClick } = props
  return (
    <div
      className={`${styles[type]} ${styles.btn}`}
      onClick={() => {
        onClick && onClick()
      }}
    >
      {text}
      {children}
    </div>
  )
}

export default Button
