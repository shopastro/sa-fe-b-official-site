import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import useIsMobile from '../../../../hooks/useIsMobile'
import FreeButton from '../../FreeButton'
import { schemaData } from './data'

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const contentRefs = useRef<HTMLDivElement[]>([])
  const isFirstRender = useRef(true)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const contentRef = contentRefs.current[activeIndex]
    const { top } = contentRef.getBoundingClientRect()
    const scrollY = window.scrollY ?? window.pageYOffset
    const offset = isMobile ? 48 + 90 : 80 + 90
    window.scrollTo({
      top: scrollY + top - offset,
      left: 0,
      behavior: 'smooth'
    })
  }, [activeIndex])

  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="flex flex-col items-center relative pt-[20px] pb-[40px] md:pt-[60px] md:pb-[80px]">
        {/*  */}
        <div className="flex flex-col w-screen p-[20px] sticky top-[48px] z-10 bg-white md:w-[1200px] md:top-[80px] md:mb-[20px]">
          <div className="flex overflow-x-auto md:justify-between">
            {schemaData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-[12px] text-[18px] leading-[26px] rounded-[12px] whitespace-nowrap cursor-pointer md:text-[20px] md:leading-[28px]"
                  style={{
                    backgroundColor: activeIndex === index ? '#004ED1' : 'transparent',
                    color: activeIndex === index ? '#FFF' : '#0E1E46'
                  }}
                  onClick={() => {
                    setActiveIndex(index)
                  }}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col md:max-w-[1200px]">
          {schemaData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row"
                ref={(contentRef) => {
                  if (contentRef) contentRefs.current[index] = contentRef
                }}
              >
                <div className="mb-[28px] md:flex-1">
                  <Image width={1156} height={830} quality={100} src={item.image} alt="image" />
                </div>
                <div className="flex flex-col px-[20px] md:flex-1 md:justify-center md:ml-[50px] md:px-0">
                  <div className="flex mb-[12px] md:flex-col md:mb-[24px]">
                    <span className="w-[40px] h-[40px] mr-[12px] md:w-[60px] md:h-[60px] md:mb-[24px]">
                      <Image width={60} height={60} quality={100} src={item.icon} alt="icon" />
                    </span>
                    <span className="flex text-[28px] leading-[40px] text-[#004ED1] md:text-[32px] md:leading-[44px]">
                      <span className="whitespace-nowrap">{item.title}</span>
                      {item.subTitle && <span className="self-end text-[20px] leading-[28px]">{item.subTitle}</span>}
                    </span>
                  </div>
                  <div className="mb-[12px] text-[12px] leading-[16px] text-[#535D77] md:mb-[24px] md:text-[14px] md:leading-[20px]">
                    {item.description}
                  </div>
                  <div className="flex flex-col">
                    {item.info.map((i, index) => {
                      return (
                        <div key={index} className="flex text-[14px] leading-[32px] text-[#0E1E46] md:text-[16px]">
                          <span className="w-[4px] h-[4px] mt-[14px] mr-[8px] bg-[#0E1E46] rounded-[2px]" />
                          <span>{i}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center mt-[20px] md:mt-[40px]">
          <FreeButton href="/product" />
        </div>
      </div>
    </div>
  )
}

export default Banner
