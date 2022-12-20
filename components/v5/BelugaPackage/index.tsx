import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import useIsMobile from '../../../hooks/useIsMobile'
import { belugaMonthData, belugaTypeInfo, belugaYearData } from './data'

const DTCPackage = () => {
  const [showMonth, setShowMonth] = useState(true)
  const [activeTypeIndex, setActiveTypeIndex] = useState(1)
  const data = showMonth ? belugaMonthData : belugaYearData
  const curType = belugaTypeInfo[activeTypeIndex - 1]

  const isMobile = useIsMobile()

  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col flex-1 relative px-[20px] pb-[40px] overflow-hidden">
        <div className="mb-[20px] text-[28px] leading-[34px] text-center">白鲸套餐</div>
        {/* menu */}
        <div className="flex justify-center mb-[20px]">
          {belugaTypeInfo.map((item) => {
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
                <span
                  className="w-[50px] h-[2px]"
                  style={{ backgroundColor: item.type === activeTypeIndex ? '#004ED1' : 'transparent' }}
                />
              </div>
            )
          })}
        </div>
        {/* switch */}
        <div className="flex justify-between mb-[20px]">
          <div className="flex items-center text-[#18214D] md:hidden">
            <span className="mr-[10px] text-[18px] leading-[22px]">{curType.title}</span>
            <span className="text-[16px] leading-[18px]">
              <span className="text-[#18214D] text-opacity-80">¥</span>
              <span>{showMonth ? curType.monthPrice : curType.yearPrice}</span>
              <span className="text-[#18214D] text-opacity-80">{showMonth ? '/月' : '/年'}</span>
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
        <div>
          {data.map((subData, index) => {
            return (
              <div
                key={index}
                className="flex text-[14px] leading-[22px] border border-b-0 border-r-0 border-[#DDE0F1] last:border-b"
              >
                {subData.map((item, subIndex) => {
                  const { title, info = [] } = item
                  // 类目
                  if (title) {
                    return (
                      <div
                        key={subIndex}
                        className="flex flex-col justify-center flex-1 p-[12px] border-r border-[#DDE0F1]"
                      >
                        <div className="flex flex-col">
                          <span className="">{title}</span>
                        </div>
                        <span className="mt-[4px] w-[81px] h-[14px]">
                          <Image
                            src="https://media.cdn.ishopastro.com/svg/shopastrohome/a1dd7e9ec57d8c705009a2eb49919ecf.svg"
                            width={81}
                            height={14}
                            quality={100}
                            alt="icon"
                          />
                        </span>
                      </div>
                    )
                  }
                  // 信息
                  if (info.length > 0) {
                    return (
                      <div
                        key={subIndex}
                        className="flex flex-col justify-center flex-1 p-[12px] text-[#004ED1] border-r border-[#DDE0F1] bg-[#FAFCFF]"
                        style={{ display: isMobile ? (subIndex === activeTypeIndex ? 'flex' : 'none') : 'flex' }}
                      >
                        {info.map((i, index) => {
                          return <span key={index}>{i}</span>
                        })}
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
    </div>
  )
}

export default DTCPackage
