import classNames from 'classnames'
import React from 'react'
import styles from './index.module.scss'


type IProps = {
  type?: 'primary' | 'ghost' | 'form' | 'successForm'
  onClick?: () => any
  text?: string
  disabled?: boolean
}

const Button: React.FC<IProps> = (props) => {
  const { type = 'primary', text = '', children, onClick, disabled } = props
  return (
    <div
      className={classNames(styles[type], styles.btn, {
        [styles.disabled]: disabled
      })}
      
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
