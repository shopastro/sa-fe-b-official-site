import { Input } from 'antd-mobile'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import useTrailLink from '../../../../hooks/useTrail'

const introduce = require('../../../../public/img/copymaster/introduce.png')
const introducePc = require('../../../../public/img/copymaster/introducePc.png')

type IProps = {
  isMobile: boolean
}

const Industry = (props: IProps) => {
  const { isMobile } = props
  const freeLink = useTrailLink()
  const [phone, setPhone] = useState('')
  const [showError, setShowError] = useState(false)
  const [autoText, setAutoText] = useState('')

  const trailLink = () => {
    if (isMobile) {
      if (phone && !showError) {
        return `/user/register?phoneNum=${Buffer.from(phone).toString('base64')}`
      } else {
        return '#'
      }
    } else {
      return freeLink('beluga_copymaster', 'beluga')
    }
  }

  const autoShowText = () => {
    let i = 0
    const str = '本页文案均由白鲸文案大师AI生成'

    function typing() {
      if (i <= str.length) {
        setAutoText(str.substring(0, i++))
        setTimeout(typing, 200)
      } else {
        i = 0
        setTimeout(typing, 1500)
      }
    }

    typing()
  }

  const handleInputNumber = (v: string) => {
    const trimStr = v.replace(/[^0-9]/gi, '').substring(0, 11)

    setShowError(false)
    setPhone(trimStr)
    if (trimStr.length === 11) {
      const isRightPhone = Boolean(/^(1|2)(3|4|5|6|7|8|9)\d{9}$/g.test(trimStr))
      setShowError(!isRightPhone)
    }
  }

  useEffect(() => {
    autoShowText()
  }, [])

  return (
    <div
      className="relative w-[100%] h-[320px] md:h-[0]"
      style={{
        background: `url(  ${isMobile ? introduce.default.src : introducePc.default.src}) no-repeat`,
        backgroundSize: isMobile ? 'contain' : 'cover',
        // backgroundColor: '#FBFDFF',
        width: '100% !important',
        paddingTop: isMobile ? '96%' : '32.56%'
      }}
    >
      <div className="absolute top-[0] h-[100%] w-screen flex items-center justify-center">
        <div className="flex items-center  w-screen flex-col">
          <h1 className="flex items-center  w-screen flex-col text-[#0E1E46]">
            <span className="text-[#004DD1] md:text-[56px] text-[28px] md:mb-[10px] mb-[4px] font-[600]">
              白鲸文案大师
            </span>
            <span className="text-[#0E1E46] md:text-[44px] text-[20px] font-[500]">跨境人的高效生产力工具</span>
          </h1>
          <div className="leading-[18px] h-[18px] md:h-[30px] md:leading-[30px] text-[12px] md:text-[20px] mt-[4px] md:mt-[10px]">
            {autoText}
            {autoText.length < 16 ? '|' : ''}
          </div>
          <div className="w-screen px-[38px] md:hidden flex flex-col">
            <Input
              onChange={(v) => {
                handleInputNumber(v)
              }}
              onBlur={(v) => {
                const values = v.target.value
                const isRightPhone = Boolean(/^(1|2)(3|4|5|6|7|8|9)\d{9}$/g.test(values))
                setShowError(!isRightPhone)
              }}
              value={phone}
              // type="number"
              style={{ '--placeholder-color': '#D5D5D5' }}
              className="w-screen font-[12px] px-[15px] mt-[20px] h-[38px] rounded-[6px] border-[1px] border-[#BFBFBF]"
              placeholder="输入您的手机号立即体验"
            />
            {showError && (
              <div className="text-[#FF0000] text-[12px] mt-[12px]">
                {phone ? '请输入正确的11位手机号' : '手机号不能为空'}
              </div>
            )}
          </div>
          <Link passHref href={trailLink()}>
            <div
              onClick={() => {
                if (isMobile) {
                  if (!phone) {
                    setShowError(true)
                  }
                }
              }}
              className="w-screen px-[38px] md:px-[0] md:w-[180px] md:mt-[24px] mt-[12px] flex item-center cursor-pointer"
            >
              <span className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[20px] leading-[26px] text-[#FFF] font-[700] text-center bg-[#FE8953] rounded-[8px]">
                免费试用
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Industry
