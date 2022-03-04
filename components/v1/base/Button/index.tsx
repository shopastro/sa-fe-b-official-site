import React from 'react'
import styles from './index.module.scss'

type IProps = {
  type?: 'primary' | 'ghost'
  onClick?: () => any
  text?: string
}

const Button: React.FC<IProps> = (props) => {
  const { type = 'primary', text = '', children } = props
  return (
    <div className={`${styles[type]} ${styles.btn}`}>
      {text}
      {children}
    </div>
  )
}

export default Button
