import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import useIsMobile from '../../../../hooks/useIsMobile'
import { partnersData } from './data'

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const { data } = partnersData[activeIndex]
  const titleRefs = useRef<HTMLDivElement[]>([])
  const isFirstRender = useRef(true)
  const isMobile = useIsMobile()

  function handleTitleClick(index: number) {
    setActiveIndex(index)
    if (isMobile) {
      swiperInstance.slideTo(index)
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (isMobile) {
      const titleRef = titleRefs.current[activeIndex]
      titleRef.scrollIntoView({
        block: 'nearest',
        inline: 'center'
      })
    }
  }, [activeIndex])

  return (
    <div className="flex flex-col py-[40px] md:items-center md:pt-[80px] md:pb-[48px]">
      <div className="flex flex-col md:w-[1280px]">
        <div
          id="partners"
          className="mb-[20px] text-[28px] leading-[34px] text-[#0E1E46] text-center font-[700] md:mb-[40px] md:text-[48px] md:leading-[62px]"
        >
          合作伙伴
        </div>
        <div className="flex pl-[20px] mb-[20px] overflow-x-auto md:justify-between">
          {partnersData.map(({ title }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center mr-[32px] text-[20px] leading-[24px] text-[#535D77] whitespace-nowrap cursor-pointer md:flex-1"
                style={index === activeIndex ? { color: '#293963', fontWeight: 700 } : {}}
                ref={(titleRef) => {
                  if (titleRef) titleRefs.current[index] = titleRef
                }}
                onMouseEnter={() => {
                  handleTitleClick(index)
                }}
              >
                <span className="mb-[10px]">{title}</span>
                <span
                  className="w-[32px] h-[2px] md:w-[80px]"
                  style={{ backgroundColor: index === activeIndex ? '#004DD1' : '#FFF' }}
                />
              </div>
            )
          })}
        </div>
        {/* pc */}
        <div className="hidden md:flex flex-wrap px-[16px]">
          {data.map(({ icon, link }, index) => {
            return (
              <div key={index} className="w-1/3 px-[4px] mb-[12px] cursor-pointer md:w-1/5 md:px-[12px] md:mb-[32px]">
                <a href={link} target="_blank" rel="noreferrer">
                  <Image src={icon} width={474} height={240} alt={link} />
                </a>
              </div>
            )
          })}
        </div>
        {/* h5 */}
        <div className="flex md:hidden">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            onSlideChange={(swiper) => {
              const activeIndex = swiper.activeIndex
              setActiveIndex(activeIndex)
            }}
          >
            {partnersData.map(({ data }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-wrap w-screen px-[16px]">
                    {data.map(({ icon, link }, index) => {
                      return (
                        <div
                          key={index}
                          className="w-1/3 px-[4px] mb-[12px] cursor-pointer md:w-1/5 md:px-[12px] md:mb-[32px]"
                        >
                          <a href={link} target="_blank" rel="noreferrer">
                            <Image src={icon} width={474} height={240} alt={link} />
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Partners
