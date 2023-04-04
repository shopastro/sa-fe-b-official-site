import { Button, Toast } from 'antd-mobile'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { forwardRef, useEffect, useRef, useState } from 'react'

import { isValidPhoneNumber } from '../../../utils/check'

type IProps = {
  phoneNumber: string
}
const Component = (props: IProps) => {
  const { phoneNumber } = props

  const [loading, setLoading] = useState(false)
  const [count, setCount] = React.useState(0)
  const ctx = useRef({
    reqLocked: false,
    timesLocked: false,
    cdSID: -1,
    startTime: 0
  })

  const router = useRouter()

  const { phoneNum = '' } = router.query

  const apiDomain = useRef('//sys.api.ishopastro.com')

  useEffect(() => {
    if (/beta/.test(location.host)) {
      apiDomain.current = '//sys.api.beta.ishopastro.com'
    }
    ;(async () => {
      try {
        ;(await axios.get(`${apiDomain.current}/common/v1/keep-alive.json`)).data
      } catch {}
    })()
  }, [])

  useEffect(() => {
    const finalPhoneNum = Buffer.from(phoneNum.toString(), 'base64').toString()
    if (finalPhoneNum) handleSendCode(finalPhoneNum)
  }, [phoneNum])

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

  const handleSendCode = async (phone: string) => {
    if (ctx.current.reqLocked) {
      return
    }
    setLoading(true)
    console.log(phone)

    const isValid = isValidPhoneNumber(phone, '+86')

    if (isValid) {
      ctx.current.reqLocked = true

      try {
        await axios
          .get(`${apiDomain.current}/common/v1/phone/register-code.json?phoneNum=${phone}&region=+86&origin=mobile`)
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

  const renderBtnTest = () => {
    let btnTest = '发送验证码'
    if (loading) {
      btnTest = ''
    } else if (loading || count > 0) {
      btnTest = `${count}秒`
    }
    return btnTest
  }

  return (
    <div className={'btnContainer'}>
      <Button
        size="large"
        loading={loading}
        disabled={loading || count > 0}
        style={{ border: 'none', fontSize: '17px', color: '#004ED1' }}
        onClick={() => {
          handleSendCode(phoneNumber)
        }}
      >
        {renderBtnTest()}
      </Button>
    </div>
  )
}

export default forwardRef(Component)
