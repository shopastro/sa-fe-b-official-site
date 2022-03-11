import React, { useState } from 'react'
import styles from './index.module.scss'
import Input from './Input'
import Button from '../Button'
import { axiosFun } from '../../../../utils/asios'

type IProps = {
  list: List[]
  row?: 'row2'
  type: 'channels' | 'ecological' | 'use'
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
  const { list = [], row = '1', type = 'use' } = props
  const [values, setValues] = useState<Record<string, any>>({})

  const [verification, setVerification] = useState(false)

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
    if (key === 'phone_num' || key === 'email') {
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
    console.log('🚀 ~ file: index.tsx ~ line 57 ~ callback ~ res', res)
  }

  const verificationAll = () => {
    setVerification(true)

    const result = list.filter((it) => {
      return hasError(it.name, true)
    })
    if (result.length === 0) {
      axiosFun(
        {
          ...values,
          category: type,
        },
        callback
      )
    }
  }

  return (
    <div className={`${styles.form} ${styles[row]}`}>
      {list.map((it) => {
        return <Input key={it.name} {...it} onChange={handleChange} error={hasError(it.name, verification)} />
      })}
      <div className={styles.btnBox}>
        <Button
          text="立即提交"
          type="form"
          onClick={() => {
            verificationAll()
          }}
        />
      </div>
    </div>
  )
}

export default Form
