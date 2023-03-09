import { Button, Toast } from 'antd-mobile'
import axios from 'axios'
import React, { forwardRef, useRef, useState } from 'react'

import { isValidPhoneNumber } from '../../../utils/check'

type IProps = {
  phoneNum: string
}
const Component = (props: IProps) => {
  const { phoneNum } = props

  const [loading, setLoading] = useState(false)
  const [count, setCount] = React.useState(0)
  const ctx = useRef({
    reqLocked: false,
    timesLocked: false,
    cdSID: -1,
    startTime: 0
  })

  const apiDomain = useRef('//sys.api.ishopastro.com')

  const calc = (time: number) => {
    if (ctx.current.startTime <= 0) {
      ctx.current.startTime = time
    }
    const progress: number = time - ctx.current.startTime
    if (progress >= 60000) {
      ctx.current.timesLocked = false
      ctx.current.startTime = 0
      setCount(0)
    } else {
      setCount(59 - Math.floor(progress / 1000))
      ctx.current.cdSID = requestAnimationFrame(calc)
    }
  }
  console.log('test')

  const handleSendCode = () => {
    if (ctx.current.reqLocked) {
      return
    }

    const isValid = isValidPhoneNumber(phoneNum, '+86')
    setLoading(true)
    if (isValid) {
      ctx.current.reqLocked = true

      try {
        axios
          .get(
            `${apiDomain.current}/common/v1/obtain/verification-code.json?phoneNum=${phoneNum}&region=+86&origin=mobile`
          )
          .then((res) => {
            const { data, success, errMsg } = res.data
            if (success) {
              if (data != null) {
                Toast.show('验证码己发送，请注意查收；1分钟内请勿反复触发。')

                ctx.current.timesLocked = true
                requestAnimationFrame(calc)
              }
            } else {
              Toast.show(errMsg || '发送验证码失败，请稍后再试')
            }
          })
          .catch(() => {
            Toast.show('发送验证码失败，请稍后再试')
          })
          .finally(() => {
            setLoading(false)
            ctx.current.reqLocked = false
          })

        setLoading(false)
      } catch (e) {
        setLoading(false)
        Toast.show('发送验证码失败，请稍后再试')
      }
    } else {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      Toast.show('请输入正确的手机号')
    }
  }

  const disableStatus = loading || count > 0

  let btnTest = '发送验证码'
  if (loading) {
    btnTest = ''
  } else if (disableStatus) {
    btnTest = `${count}秒`
  }

  return (
    <div className={'btnContainer'}>
      <Button
        size="large"
        loading={loading}
        disabled={disableStatus}
        style={{ border: 'none', fontSize: '14px', color: '#004ED1' }}
        onClick={handleSendCode}
      >
        {btnTest}
      </Button>
    </div>
  )
}

export default forwardRef(Component)
