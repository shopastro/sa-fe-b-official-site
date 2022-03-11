import React from 'react'
import styles from './index.module.scss'

type IProps = {
  maxLength?: number
  onChange: (k: string, v: string) => any
  name: string
  placeholder: string
  require?: boolean
  label: string
  type?: 'text' | 'textarea' | 'select'
  error?: boolean
}

const Input: React.FC<IProps> = (props) => {
  const { type = 'text', label, placeholder, maxLength, name, error = false } = props

  return (
    <div className={`${styles.inputBox} ${type === 'textarea' && styles.inputTxtBox} ${error && styles.error}`}>
      {type === 'text' && (
        <>
          <div className={styles.label}>{label}</div>

          <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={(e) => {
              props.onChange(name, e.target.value)
            }}
          />
        </>
      )}

      {type === 'select' && (
        <>
          <div className={styles.label}>{label}</div>
          <select
            placeholder={placeholder}
            onChange={(e) => {
              props.onChange(name, e.target.value)
            }}
          >
            <option style={{ display: 'none' }}></option>
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
    </div>
  )
}

export default Input
