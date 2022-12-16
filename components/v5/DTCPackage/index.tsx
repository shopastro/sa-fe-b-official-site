import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import useIsMobile from '../../../hooks/useIsMobile'
import { dtcMonthData, dtcTypeInfo, dtcYearData } from './data'

const DTCPackage = () => {
  const [showMonth, setShowMonth] = useState(true)
  const [activeTypeIndex, setActiveTypeIndex] = useState(1)
  const data = showMonth ? dtcMonthData : dtcYearData
  const curType = dtcTypeInfo[activeTypeIndex - 1]

  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-[20px] py-[32px] text-[#0E1E46] md:items-center">
        <div className="mb-[16px] text-[48px] leading-[58px] text-center md:mb-[32px]">DTC建站套餐</div>
        <div className="flex justify-center mb-[20px] text-[18px] leading-[24px] md:mb-[32px]">
          <div className="flex bg-[#D9E6FA] rounded-[100vw]">
            <span
              className="px-[36px] py-[6px] rounded-[100vw] md:py-[8px] md:text-[20px] md:leading-[28px] cursor-pointer"
              style={{ backgroundColor: showMonth ? '#0B58D8' : 'transparent', color: showMonth ? '#FFF' : '#0B58D8' }}
              onClick={() => setShowMonth(true)}
            >
              月付
            </span>
            <span
              className="px-[36px] py-[6px] ml-[-18px] rounded-[100vw] md:py-[8px] md:text-[20px] md:leading-[28px] cursor-pointer"
              style={{
                backgroundColor: !showMonth ? '#0B58D8' : 'transparent',
                color: !showMonth ? '#FFF' : '#0B58D8'
              }}
              onClick={() => setShowMonth(false)}
            >
              年付
            </span>
          </div>
        </div>
        <div className="mb-[40px] text-[14px] leading-[22px] text-[#535D77] text-center md:w-[640px] md:mb-[32px]">
          针对不同业务与不同量级的建站需求, 星盘为您精心准备了以下3种套餐,
          最合适的才是最好的。助您跨境业务更轻松。所有版本均包含
          <span className="text-[#0B58D8]">
            <Link href="/beluga">星盘白鲸</Link>
          </span>
          [1]相关服务。
        </div>

        <div className="flex flex-col md:hidden">
          <div className="mb-[8px] text-[24px] leading-[28px] text-center">抢先体验, 开始免费试用! </div>
          <div className="mb-[46px] text-[16px] leading-[20px] text-center">直接免费7天试用体验星盘DTC建站。</div>
        </div>

        {/* dtc 卡片信息 */}
        <div className="flex flex-col md:flex-row md:justify-center md:mb-[76px]">
          {dtcTypeInfo.map((item, index) => {
            return (
              <div
                key={item.type}
                className="flex flex-col relative mb-[20px] px-[28px] py-[30px] text-center border border-[#EEF0F0] rounded-[12px] md:w-[260px] md:mb-0 md:mr-[36px] md:last:mr-0"
                style={
                  item.type === 3
                    ? {
                        border: 'none',
                        background: 'linear-gradient(208.18deg, #FAF4C2 4.91%, #FEFAD5 49.19%, #DAD074 119.3%)'
                      }
                    : { background: '#FFF' }
                }
                onClick={() => {
                  setActiveTypeIndex(item.type)
                }}
              >
                <div className="mb-[12px] text-[22px] leading-[30px]">{item.title}</div>
                <div className="mb-[20px] text-[16px] leading-[24px] text-[#3E4462CC] text-opacity-80">
                  {item.subTitle.map((s, i) => {
                    return <div key={i}>{s}</div>
                  })}
                </div>
                <div className="flex items-center justify-center h-[56px] mb-[36px] md:mb-[38px]">
                  <span className="self-start text-[26px] leading-[36px] text-[#18214D] text-opacity-80">¥</span>
                  <span className="text-[56px]">{showMonth ? item.monthPrice : item.yearPrice}</span>
                  <span className="self-end text-[26px] leading-[36px] text-[#18214D] text-opacity-80">
                    {showMonth ? '/月' : '/年'}
                  </span>
                </div>
                <div className="hidden text-[16px] leading-[24px] mb-[20px] md:block">
                  {item.info.map((info, i) => {
                    return (
                      <div key={i} className="mb-[4px]">
                        {info}
                      </div>
                    )
                  })}
                </div>
                <div className="text-[14px] leading-[16px] text-[#18214D] underline cursor-pointer">了解更多功能</div>
                {index === 0 && (
                  <div className="absolute top-[-12px] right-[12px] px-[12px] py-[2px] bg-[#0B58D8] rounded-[100vw]">
                    <span className="text-[14px] leading-[20px] text-[#FFF]">最受欢迎</span>
                    <span className="absolute top-[24px] left-[12px] border-[6px] border-[#0B58D8] border-b-[transparent] border-r-[transparent] border-l-[transparent]" />
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute top-[-12px] right-[12px] px-[12px] py-[2px] bg-[#D6C30F] rounded-[100vw]">
                    <span className="text-[14px] leading-[20px] text-[#4F4521]">性价比最高</span>
                    <span className="absolute top-[24px] left-[12px] border-[6px] border-[#D6C30F] border-b-[transparent] border-r-[transparent] border-l-[transparent]" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="hidden flex-col md:flex">
          <div className="mb-[8px] text-[32px] leading-[38px] text-center">抢先体验, 开始免费试用! </div>
          <div className="mb-[24px] text-[18px] leading-[22px] text-center">直接免费7天试用体验星盘DTC建站。</div>
          <div className="flex justify-center mb-[70px] cursor-pointer">
            <span className="px-[56px] py-[16px] text-[18px] leading-[26px] text-[#FFF] bg-[#FE8953] rounded-[8px]">
              免费试用
            </span>
          </div>
        </div>

        <div className="flex flex-col md:py-[80px]">
          <div className="mb-[20px] text-[28px] leading-[32px] text-center md:mb-[40px] md:text-[32px] md:leading-[38px] ">
            DTC建站套餐比较
          </div>
          <div className="flex justify-center mb-[20px] md:hidden">
            {dtcTypeInfo.map((item) => {
              return (
                <div
                  key={item.type}
                  className="flex flex-col items-center px-[14px] text-[20px] leading-[32px]"
                  onClick={() => {
                    setActiveTypeIndex(item.type)
                  }}
                >
                  <span className="mb-[6px]" style={{ fontWeight: item.type === activeTypeIndex ? '700' : '400' }}>
                    {item.title}
                  </span>
                  {item.type === activeTypeIndex && <span className="w-[50px] h-[2px] bg-[#004ED1]" />}
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-between mb-[20px] md:justify-center md:mb-[40px]">
            <div className="flex items-center md:hidden">
              <span className="mr-[10px] text-[18px] leading-[22px]">{curType.title}</span>
              <span className="text-[16px] leading-[18px]">
                <span className="text-opacity-80">¥</span>
                <span>{showMonth ? curType.monthPrice : curType.yearPrice}</span>
                <span className="text-opacity-80">{showMonth ? '/月' : '/年'}</span>
              </span>
            </div>
            <div className="flex text-[14px] leading-[20px] bg-[#D9E6FA] rounded-[100vw]">
              <span
                className="px-[16px] py-[8px] rounded-[100vw] md:px-[36px] cursor-pointer"
                style={{
                  backgroundColor: showMonth ? '#0B58D8' : 'transparent',
                  color: showMonth ? '#FFF' : '#0B58D8'
                }}
                onClick={() => setShowMonth(true)}
              >
                月付
              </span>
              <span
                className="px-[16px] py-[8px] ml-[-8px] rounded-[100vw] md:px-[36px] md:ml-[-18px] cursor-pointer"
                style={{
                  backgroundColor: !showMonth ? '#0B58D8' : 'transparent',
                  color: !showMonth ? '#FFF' : '#0B58D8'
                }}
                onClick={() => setShowMonth(false)}
              >
                年付
              </span>
            </div>
          </div>

          {/* form */}
          <div className="flex flex-col mb-[20px]">
            <div className="hidden w-[1200px] border border-b-0 border-[#DDE0F1] md:flex">
              <div className="flex flex-1 border-r border-[#DDE0F1]"></div>
              {dtcTypeInfo.map((item) => {
                return (
                  <div
                    key={item.type}
                    className="flex justify-between w-[280px] px-[16px] py-[32px] text-[18px] leading-[22px] border-r border-[#DDE0F1] last:border-r-0"
                  >
                    <div>
                      <span>{item.title}</span>
                      <span>
                        <span className="text-opacity-80">¥</span>
                        <span>{showMonth ? item.monthPrice : item.yearPrice}</span>
                        <span className="text-opacity-80">{showMonth ? '/月' : '/年'}</span>
                      </span>
                    </div>
                    <div
                      className="border border-[#D6E0EA] rounded-[4px] cursor-pointer"
                      style={item.type === 3 ? { backgroundColor: '#004ED1', color: '#FFF' } : {}}
                    >
                      <span className="px-[24px] py-[4px] text-[14px] leading-[22px]">
                        <Link href="/dtc">免费试用</Link>
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            {data.map((subData, index) => {
              return (
                <div
                  key={index}
                  className="flex text-[14px] leading-[22px] border border-b-0 border-[#DDE0F1] last:border-b"
                >
                  {subData.map((item, subIndex) => {
                    const { title, subTitle, logo, icon, info } = item
                    // 类目
                    if (title) {
                      return (
                        <div
                          key={subIndex}
                          className="flex flex-col flex-1 p-[12px] border-r border-[#DDE0F1] md:flex-1"
                        >
                          <div className="flex flex-col">
                            <span className="">{title}</span>
                            {subTitle && (
                              <span className="mt-[4px] text-[12px] leading-[18px] text-[#8F97B0]">{subTitle}</span>
                            )}
                          </div>
                          {logo && (
                            <span className="mt-[4px] w-[81px] h-[14px]">
                              <Image src={logo} width={81} height={14} quality={100} alt="icon" />
                            </span>
                          )}
                        </div>
                      )
                    }
                    // 信息
                    if (info || icon) {
                      return (
                        <div
                          key={subIndex}
                          className="flex items-center flex-1 p-[12px] text-[#004ED1] border-r border-[#DDE0F1] last:border-none md:w-[280px] md:flex-none md:text-[#18214D] md:last:text-[#004ED1]"
                          style={{ display: isMobile ? (subIndex === activeTypeIndex ? 'flex' : 'none') : 'flex' }}
                        >
                          {info && <span>{info}</span>}
                          {icon && (
                            <span>
                              <Image src={icon} width={24} height={24} quality={100} alt="icon" />
                            </span>
                          )}
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              )
            })}
          </div>

          <div className="flex justify-center text-[14px] leading-[22px] text-[#FFF] md:hidden">
            <div className=" px-[24px] py-[4px] bg-[#004ED1] rounded-[4px]">
              <Link href="/dtc">免费试用</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DTCPackage
