import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { PluginsDataItem, pluginsData } from './data'

const pcPluginsData: PluginsDataItem[][] = []

const mobilePluginsData: PluginsDataItem[][] = []
let step = 0
pluginsData.forEach((item, index) => {
  if (!pcPluginsData[step]) pcPluginsData[step] = []
  pcPluginsData[step][index % 2] = item
  if (index % 2 === 1) {
    step++
  }

  const mobileIndex = Math.floor(index / 2)
  if (!mobilePluginsData[mobileIndex]) mobilePluginsData[mobileIndex] = []
  mobilePluginsData[mobileIndex].push(item)
})

const Plugins = () => {
  const [reachBeginning, setReachBeginning] = useState(true)
  const [reachEnd, setReachEnd] = useState(false)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const sliderRef = useRef<any>(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <div className="flex flex-col w-screen py-[40px] bg-[#F5F6FA] md:items-center md:py-[80px]">
      <div className="flex flex-col px-[20px] md:w-[1400px] md:pl-[0px]">
        <div className="mb-[14px] text-[28px] leading-[32px] text-[#0E1E46] font-[700] md:text-[36px] md:leading-[62px] md:pl-[110px]">
          丰富插件，开箱即用
        </div>
        <div className="flex items-center mb-[14px] md:pl-[110px]">
          <span className="flex w-[12px] h-[12px] mr-[8px] bg-[#004DD1] rounded-[6px]" />
          <span className="flex w-[75px] h-[8px] mr-[8px] bg-[#004DD1]" />
        </div>
        <div className="mb-[36px] text-[14px] leading-[22px] text-[#535D77] md:mb-[46px] md:text-[18px] md:leading-[28px] md:pl-[110px]">
          官方出品，覆盖主流商品与促销等实用工具，开箱即用。
        </div>
        <div className=" md:flex relative overflow-x-auto md:pl-[25px]">
          {/* pc */}
          <div
            ref={navigationPrevRef}
            onClick={handlePrev}
            style={{ transform: 'rotateY(180deg)', visibility: reachBeginning ? 'hidden' : 'visible' }}
            className={'hidden min-w-[58px] min-h-[58px] mr-[16px] cursor-pointer md:flex items-center'}
          >
            <Image
              width={58}
              height={58}
              quality={100}
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/cd0fb76c374c39f5c1fc747a424b2d0c.svg"
              alt="arrow icon"
            />
          </div>
          <Swiper
            ref={sliderRef}
            slidesPerView={'auto'}
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current
            }}
            spaceBetween={20}
            pagination={{
              clickable: true
            }}
            onInit={(xx) => {
              setReachBeginning(true)
            }}
            onReachBeginning={() => {
              setReachBeginning(true)
            }}
            onReachEnd={() => {
              setReachEnd(true)
            }}
            onSlideChange={(swiper) => {
              if (swiper.activeIndex === 0) {
                setReachBeginning(true)
              } else {
                setReachBeginning(false)
              }

              if (swiper.isEnd) {
                setReachEnd(true)
              } else {
                setReachEnd(false)
              }
            }}
            className={`hidden md:block ${
              reachEnd ? 'before:hidden' : 'before:block'
            } before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:block before:w-[50px] before:bg-[#F5F6FA] before:z-10 before:opacity-80 before:blur-md`}
          >
            {pcPluginsData.map((item, index) => {
              return (
                <SwiperSlide key={index} className={'w-[400px]'} style={{ width: '367px' }}>
                  {item.map((pluginData, elementIndex) => {
                    return (
                      <div
                        key={elementIndex}
                        className={`flex  h-[138px] ${
                          elementIndex % 2 === 0 ? 'mb-[18px]' : ''
                        } p-[18px] bg-white rounded-[12px]`}
                      >
                        <div className="flex-shrink-0 w-[64px] h-[64px] mr-[16px]">
                          <Image width={64} height={64} quality={100} src={pluginData.icon} alt={pluginData.title} />
                        </div>
                        <div>
                          <div className="mb-[12px] text-[20px] leading-[24px] text-[#0E1E46]">{pluginData.title}</div>
                          <div className="text-[14px] leading-[22px] text-[#535D77]">{pluginData.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div
            ref={navigationNextRef}
            onClick={handleNext}
            style={{ visibility: reachEnd ? 'hidden' : 'visible' }}
            className={'hidden min-w-[58px] min-h-[58px] ml-[16px] cursor-pointer md:flex align-middle'}
          >
            <Image
              width={58}
              height={58}
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/cd0fb76c374c39f5c1fc747a424b2d0c.svg"
              alt="arrow icon"
            />
          </div>
          {/* h5 */}
          <div className="flex md:hidden">
            {mobilePluginsData.map((pluginsRowData, rowIndex) => {
              return (
                <div key={rowIndex} className="flex flex-col mr-[18px]">
                  {pluginsRowData.map((pluginData, index) => {
                    return (
                      <div key={index} className="flex w-[250px] h-[102px] mb-[12px] p-[12px] bg-white rounded-[8px]">
                        <div className="flex-shrink-0 w-[44px] h-[44px] mr-[12px]">
                          <Image width={64} height={64} src={pluginData.icon} alt={pluginData.title} />
                        </div>
                        <div>
                          <div className="mb-[12px] text-[14px] leading-[18px] text-[#0E1E46]">{pluginData.title}</div>
                          <div className="max-h-[48px] line-clamp-3 text-[12px] leading-[16px] text-[#535D77]">
                            {pluginData.description}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plugins
