import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import useIsMobile from '../../../../hooks/useIsMobile'
import { DTCChooseData } from './data'

const DTCPackage = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-[20px] text-[#0E1E46]">
        <div className="mb-[10px] text-[24px] leading-[28px] text-center md:mb-[20px] md:text-[32px] md:leading-[38px]">
          为什么选择星盘DTC?
        </div>
        <div className="mb-[20px] text-[14px] leading-[22px] text-[#535D77] text-center md:mb-[40px] md:text-[18px] md:leading-[28px]">
          开启出海独立站，我们为您提供一站式建站+运营SaaSa功能, 让出海更简单。
        </div>

        <div className="flex justify-center mb-[20px] text-[20px] leading-[32px] md:hidden">
          <div
            className="flex flex-col items-center px-[14px]"
            onClick={() => {
              setActiveIndex(1)
            }}
          >
            <span className="mb-[6px]">友商</span>
            {activeIndex === 1 && <span className="w-[26px] h-[2px] bg-[#004ED1]" />}
          </div>
          <div
            className="flex flex-col items-center px-[14px]"
            onClick={() => {
              setActiveIndex(2)
            }}
          >
            <span className="mb-[6px]">星盘</span>
            {activeIndex === 2 && <span className="w-[26px] h-[2px] bg-[#004ED1]" />}
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col md:items-center">
          <div className="hidden sticky top-0 justify-center mb-[14px] text-[18px] leading-[22px] font-[700] border border-[#DDE0F1] bg-[#FCFCFC] md:flex">
            <div className="w-[530px] px-[16px] py-[32px] border-r border-[#DDE0F1]">
              <span>产品特色</span>
            </div>
            <div className="w-[335px] px-[16px] py-[32px] border-r border-[#DDE0F1]">
              <span>友商</span>
            </div>
            <div className="flex justify-between w-[335px] px-[16px] py-[32px] bg-[#FAFCFF]">
              <span>星盘</span>
              <div>
                <span className="px-[32px] py-[4px] text-[14px] leading-[22px] text-[#FFF] font-[400] bg-[#004ED1] rounded-[4px]">
                  <Link href="/dtc">免费试用</Link>
                </span>
              </div>
            </div>
          </div>
          {DTCChooseData.map((item) => {
            return (
              <div key={item.type} className="flex flex-col mb-[20px] md:w-[1200px]">
                <div className="pl-[14px] mb-[10px] text-[14px] leading-[22px] text-[#004ED1] font-[700] md:mb-[14px] md:text-[16px] md:leading-[26px]">
                  {item.type}
                </div>
                <div className="flex flex-col">
                  {item.data.map((row, rowIndex) => {
                    return (
                      <div key={rowIndex} className="flex border border-[#DDE0F1] border-b-0 last:border-b">
                        {row.map((col, colIndex) => {
                          const { title, subTitle, icon, info } = col
                          if (title) {
                            return (
                              <div
                                key={colIndex}
                                className="flex flex-col justify-center flex-1 p-[12px] border-r border-[#DDE0F1]"
                              >
                                <span className="text-[14px] leading-[16px]">{title}</span>
                                {subTitle && (
                                  <span className="mt-[6px] text-[12px] leading-[20px] text-[#6C7DAC]">{subTitle}</span>
                                )}
                              </div>
                            )
                          }

                          if (icon || info) {
                            return (
                              <div
                                key={colIndex}
                                className="flex flex-1 items-center p-[12px] border-r border-[#DDE0F1] last:border-none md:flex-none md:w-[335px] md:last:bg-[#FAFCFF]"
                                style={
                                  isMobile
                                    ? {
                                        backgroundColor: activeIndex === 2 ? '#FAFCFF' : 'transparent',
                                        display: colIndex === activeIndex ? 'flex' : 'none'
                                      }
                                    : {
                                        display: 'flex'
                                      }
                                }
                              >
                                {icon && (
                                  <span className="flex-shrink-0 w-[24px] h-[24px] mr-[12px]">
                                    <Image src={icon} width={24} height={24} quality={100} alt="icon" />
                                  </span>
                                )}
                                {info && <span className="text-[12px] leading-[20px] text-[#6C7DAC]">{info}</span>}
                              </div>
                            )
                          }

                          return null
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        {/* btn */}
        <div className="flex justify-center text-[14px] leading-[22px] text-[#FFF] md:hidden">
          <div className=" px-[24px] py-[4px] bg-[#004ED1] rounded-[4px]">
            <Link href="/dtc">免费试用</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DTCPackage
