import { Input } from 'antd-mobile'
import Link from 'next/link'
import { useState } from 'react'

import { freeLink } from '../../../../utils/freeTrail'

type IProps = {
  isMobile: boolean
}

const BelugaQuestion = (props: IProps) => {
  const { isMobile } = props

  const [phone, setPhone] = useState('')
  const [showError, setShowError] = useState(false)

  const trailLink = () => {
    if (isMobile) {
      if (phone && !showError) {
        return `/user/register?phoneNum=${Buffer.from(phone).toString('base64')}`
      } else {
        return '#'
      }
    } else {
      return freeLink('beluga_industry', 'beluga')
    }
  }

  const handleInputNumber = (v: string) => {
    if (v.length <= 11) {
      setShowError(false)
      setPhone(v)
      if (v.length === 11) {
        const isRightPhone = Boolean(/^(1|2)(3|4|5|6|7|8|9)\d{9}$/g.test(v))
        setShowError(!isRightPhone)
      }
    }
  }

  return (
    <div
      className="relative w-[100%] h-[320px] md:h-[0]"
      style={{
        background: 'url(https://media.cdn.ishopastro.com/svg/sa-fe-b-background/industry_bg.svg) no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        paddingTop: '30.56%'
      }}
    >
      <div className="absolute top-[0] h-[100%] w-screen flex items-center justify-center">
        <h1 className="flex items-center  w-screen flex-col  text-[#0E1E46]">
          <span className="text-[#004DD1] md:text-[56px] text-[28px] md:mb-[10px] mb-[4px] font-[600]">
            白鲸行业情报
          </span>
          <span className="text-[#0E1E46] md:text-[44px] text-[20px] font-[500]">品牌独立站的全方位竞对分析工具</span>
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
              type="number"
              maxLength={11}
              style={{ '--placeholder-color': '#D5D5D5' }}
              className="w-screen font-[12px] px-[15px] mt-[20px] h-[38px] rounded-[6px] border-[1px] border-[#BFBFBF]"
              placeholder="输入您的手机号立即体验"
            />
            {showError && (
              <div className="text-[#FF0000] text-[12px] mt-[12px]">
                {phone ? '请输入正确的11位手机号' : '手机号不能为空'}{' '}
              </div>
            )}
          </div>
          <Link passHref href={trailLink()}>
            <div
              onClick={() => {
                if (isMobile) {
                  if (!phone) {
                    // Toast.show('手机号不能为空')
                    setShowError(true)
                  }
                }
              }}
              className="w-screen px-[38px] md:px-[0] md:w-[180px] md:mt-[24px] mt-[12px] flex item-center cursor-pointer"
            >
              <span className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[20px] leading-[26px] text-[#FFF] font-[700] text-center bg-[#FF793A] rounded-[8px]">
                免费试用
              </span>
            </div>
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default BelugaQuestion
