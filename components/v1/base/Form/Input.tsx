import classNames from 'classnames'
import React, { useState } from 'react'

import styles from './index.module.scss'

type IProps = {
  maxLength?: number
  onChange: (k: string, v: string) => any
  onKeyPress?: (e?: any) => void
  name: string
  placeholder: string
  require?: boolean
  label?: string
  type?: 'text' | 'textarea' | 'select'
  error?: boolean
  className?: string
  value?: string
  id?: string
}

const Input: React.FC<IProps> = (props) => {
  const {
    type = 'text',
    label,
    placeholder,
    maxLength,
    name,
    error = false,
    className,
    children,
    value,
    onKeyPress,
    id
  } = props
  const [selected, setSelected] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const inputLabel = label && <div className={styles.label}>{label}</div>

  return (
    <div
      className={`${styles.inputBox} ${type === 'textarea' && styles.inputTxtBox} ${error && styles.error} ${
        className && className
      }`}
    >
      {type === 'text' && (
        <>
          {inputLabel}
          <input
            id={id}
            className={styles.input}
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            value={value === null || value === undefined ? inputValue : value}
            onChange={(e) => {
              props.onChange(name, e.target.value)
              setInputValue(e.target.value)
            }}
            onKeyPress={onKeyPress}
          />
        </>
      )}

      {type === 'select' && (
        <>
          {inputLabel}
          <select
            placeholder={placeholder}
            defaultValue={''}
            className={classNames({
              [styles.unselect]: !selected
            })}
            onChange={(e) => {
              props.onChange(name, e.target.value)
              setSelected(true)
            }}
          >
            <option disabled value="" style={{ color: 'red' }}>
              请选择出海经验（必填）
            </option>
            <option value="亚马逊、ebay等海外平台经验">亚马逊、ebay等海外平台经验</option>
            <option value="DTC品牌独立站经验">DTC品牌独立站经验</option>
            <option value="无出海经验">无出海经验</option>
            <option value="其他经历（如选此项，可手动输入）">其他经历（如选此项，可手动输入）</option>
          </select>
        </>
      )}

      {type === 'textarea' && (
        <textarea
          className={styles.input}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={6}
          onChange={(e) => {
            props.onChange(name, e.target.value)
          }}
        />
      )}

      {children}
    </div>
  )
}
export default Input
