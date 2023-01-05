import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../../store/detectionStore'
import { axiosFun } from '../../../../utils/asios'
import { buryingPoint } from '../../../../utils/buryingPoint'
import Success from '../../Success'
import Button from '../Button'
import Input from './Input'
import styles from './index.module.scss'

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
  const { dataSource, setUnlock, buttonType } = useContainer(detectionStore)
  const [{ fNumber, sNumber }] = useState({
    fNumber: Math.ceil(Math.random() * 10),
    sNumber: Math.ceil(Math.random() * 10)
  })

  const { route } = useRouter()
  const page = route === '/' ? 'home' : route.replace('/', '')

  const newList = [
    ...list,
    {
      maxLength: 20,
      require: true,
      name: 'number',
      placeholder: '请输入答案（必填）',
      label: `请输入 ${fNumber} + ${sNumber} 计算结果`
    }
  ]

  const formList = dataSource.url ? newList : list

  const handleChange = (key: string, value: string) => {
    setValues({
      ...values,
      [key]: value
    })
  }

  const hasError = (key: string, verification: boolean) => {
    if (!verification) {
      return false
    }

    const value = values[key]
    const isRequire = formList.find((it) => it.name === key)?.require

    if (key === 'number') {
      if (value == fNumber + sNumber) return false
      return true
    }

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
      buryingPoint({
        event: 'generate_lead',
        eventModel: {
          currency: 'CNY',
          value: 9800,
          user_data: {
            phone_number: values.phoneNum,
            address: {
              first_name: values.username,
              last_name: values.username,
              city: values.city,
              country: 'CN'
            },
            user_domain: dataSource.url
          }
        }
      })

      if (dataSource?.url) {
        const urlList = atob(localStorage.getItem('sa-seo') ?? '').split(',')
        localStorage.setItem('sa-seo', btoa(`${urlList.toString()},${dataSource.url}`))
        setUnlock(true)
      }

      setRequested(true)
      successCallback && successCallback()
    } else {
      setError(true)
    }
  }

  const verificationAll = () => {
    setVerification(true)
    setError(false)
    const result = formList.filter((it) => {
      return hasError(it.name, true)
    })
    if (result.length === 0) {
      setLoad(true)
      axiosFun(
        {
          ...values,
          category: type,
          checkDomain: dataSource?.url,
          source: JSON.stringify({
            page,
            button: buttonType,
            client: window.innerWidth < 768 ? 'mobile' : 'pc',
            ua: window.navigator.userAgent
          })
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
      {formList.map((it) => {
        return (
          <Input id={it.name} key={it.name} {...it} onChange={handleChange} error={hasError(it.name, verification)} />
        )
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
