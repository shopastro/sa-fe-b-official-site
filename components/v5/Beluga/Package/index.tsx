import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useContainer } from 'unstated-next'

import useIsMobile from '../../../../hooks/useIsMobile'
import detectionStore from '../../../../store/detectionStore'
import { belugaMonthData, belugaTypeInfo, belugaYearData } from './data'

const DTCPackage = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)
  const [showMonth, setShowMonth] = useState(true)
  const [activeTypeIndex, setActiveTypeIndex] = useState(1)
  const data = showMonth ? belugaMonthData : belugaYearData
  const curType = belugaTypeInfo[activeTypeIndex - 1]
  const stickyContentRef = useRef<HTMLDivElement>(null)
  const [shadowStyle, setShadowStyle] = useState<any>({})

  const isMobile = useIsMobile()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  function handleScroll() {
    window?.requestAnimationFrame(() => {
      if (stickyContentRef.current) {
        const { top } = stickyContentRef.current.getBoundingClientRect()
        const offset = isMobile ? 48 : 80
        if (top === offset) {
          setShadowStyle({ boxShadow: '0px 4px 10px rgba(77, 77, 77, 0.1)' })
        } else {
          setShadowStyle({})
        }
      }
    })
  }

  return (
    <div className="flex flex-col items-center w-screen px-[20px] pb-[40px] md:pb-[80px] md:px-0">
      <div className="flex flex-col md:w-[1200px]">
        <div className="mb-[20px] text-[28px] leading-[34px] text-center md:hidden">白鲸套餐</div>
        {/* menu */}
        <div className="flex justify-center mb-[20px] md:hidden">
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
        <div className="flex justify-between mb-[20px] md:mb-[32px] md:items-center">
          <div className="flex items-center text-[#18214D] md:hidden">
            <span className="mr-[10px] text-[18px] leading-[22px]">{curType.title}</span>
            <span className="text-[16px] leading-[18px]">
              <span className="text-[#18214D] text-opacity-80">¥</span>
              <span>{showMonth ? curType.monthPrice : curType.yearPrice}</span>
              <span className="text-[#18214D] text-opacity-80">{showMonth ? '/月' : '/年'}</span>
            </span>
          </div>
          <div className="hidden text-[32px] leading-[44px] text-center md:flex">白鲸套餐</div>
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
      </div>
      {/* form */}
      <div className="flex flex-col items-center md:w-screen">
        <div
          className="hidden md:flex justify-center w-screen sticky top-[80px] bg-white z-10"
          ref={stickyContentRef}
          style={shadowStyle}
        >
          <div className="flex items-center md:w-[1200px] border border-[#DDE0F1] border-b-0">
            <div className="flex flex-1 w-[360px] md:h-[96px] px-[16px] py-[32px] border-r border-[#DDE0F1]" />
            {belugaTypeInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center flex-1 w-[280px] px-[16px] py-[32px] border-r border-[#DDE0F1] last:border-r-0"
                >
                  <span className="mr-[10px] text-[18px] leading-[22px] font-[700]">{item.title}</span>
                  <span className="mr-[16px] text-[16px] leading-[18px]">
                    <span className="text-[#18214D] text-opacity-80">¥</span>
                    <span>{showMonth ? item.monthPrice : item.yearPrice}</span>
                    <span className="text-[#18214D] text-opacity-80">{showMonth ? '/月' : '/年'}</span>
                  </span>
                  <span
                    className="border border-[#D6E0EA] rounded-[4px] cursor-pointer"
                    style={item.type === 3 ? { backgroundColor: '#004ED1', color: '#FFF' } : {}}
                    onClick={() => {
                      setShowMoadl(true)
                      setButtonType(`package-${index}`)
                    }}
                  >
                    <span className="flex px-[8px] py-[4px] text-[14px] leading-[22px]">立即咨询</span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col md:w-[1200px]">
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
                        className="flex flex-col items-center justify-center flex-1 p-[12px] border-r border-[#DDE0F1] md:flex-row md:justify-between md:w-[360px] md:px-[16px] md:py-[18px]"
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
                        className="flex flex-col justify-center flex-1 p-[12px] text-[#004ED1] border-r border-[#DDE0F1] bg-[#FAFCFF] md:w-[280px] md:px-[16px] md:py-[18px] md:text-[#18214D] md:bg-white md:last:text-[#004ED1] md:last:bg-[#FAFCFF]"
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
