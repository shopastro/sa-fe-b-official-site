import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Input from './Input'
import Button from '../Button'
import { axiosFun } from '../../../../utils/asios'
import Success from '../../Success'

type IProps = {
  list: List[]
  row?: 'row2'
  type: 'agents' | 'partners' | 'use'
  successCallback?: () => void
}
type List = {
  maxLength?: number
  name: string
  placeholder: string
  require?: boolean
  label: string
  type?: 'text' | 'textarea' | 'textarea' | 'select'
}

const Form: React.FC<IProps> = (props) => {
  const { list = [], row = '1', type = 'use', successCallback } = props
  const [values, setValues] = useState<Record<string, any>>({})
  const [load, setLoad] = useState(false)
  const [requested, setRequested] = useState(false)
  const [error, setError] = useState(false)

  const [verification, setVerification] = useState(false)

  useEffect(() => {
    //用于防止ios 输入框聚焦时放大页面
    window.onload = function () {
      document.addEventListener('gesturestart', function (e) {
        e.preventDefault()
      })
      document.addEventListener('dblclick', function (e) {
        e.preventDefault()
      })
      document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault()
        }
      })
      let lastTouchEnd = 0
      document.addEventListener(
        'touchend',
        function (event) {
          let now = new Date().getTime()
          if (now - lastTouchEnd <= 300) {
            event.preventDefault()
          }
          lastTouchEnd = now
        },
        false
      )
    }
  }, [])

  const handleChange = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value,
    })
  }

  const hasError = (key: string, verification: boolean) => {
    if (!verification) {
      return false
    }

    const value = values[key]
    const isRequire = list.find((it) => it.name === key)?.require
    if (isRequire && !value) {
      return true
    }
    let reg = /^1[3|4|5|7|8]\d{9}$/
    if (key === 'phoneNum' || key === 'email') {
      if (key === 'email') {
        reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/
      }
      if (!reg.test(value)) {
        return true
      }
      return false
    }
    return false
  }

  const callback = (res: any) => {
    setLoad(false)

    const { data = {} } = res
    const { success = false } = data
    if (success) {
      setRequested(true)
      successCallback && successCallback()
    } else {
      setError(true)
    }
  }

  const verificationAll = () => {
    setVerification(true)
    setError(false)
    const result = list.filter((it) => {
      return hasError(it.name, true)
    })
    if (result.length === 0) {
      setLoad(true)
      axiosFun(
        {
          ...values,
          category: type,
        },
        callback
      )
    }
  }

  const handleClose = () => {
    setRequested(false)
  }

  return (
    <div className={`${styles.form} ${styles[row]}`}>
      {list.map((it) => {
        return <Input key={it.name} {...it} onChange={handleChange} error={hasError(it.name, verification)} />
      })}
      {error && (
        <div
          className={styles.errorReq}
          onClick={() => {
            setError(false)
          }}
        >
          保存失败， 请重试！
          <div className={styles.close} />
        </div>
      )}
      <div className={styles.btnBox}>
        <Button
          text="立即提交"
          type="form"
          disabled={load}
          onClick={() => {
            verificationAll()
          }}
        />
      </div>
      {requested && <Success handleClose={handleClose} />}
    </div>
  )
}

export default Form
