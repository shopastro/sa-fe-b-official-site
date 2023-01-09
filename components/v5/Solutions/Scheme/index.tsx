import anime from 'animejs'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useContainer } from 'unstated-next'

import useIsMobile from '../../../../hooks/useIsMobile'
import detectionStore from '../../../../store/detectionStore'
import FreeButton from '../../FreeButton'
import { schemaData } from './data'

const Banner = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)
  const [activeIndex, setActiveIndex] = useState(0)
  const titleContainerRefs = useRef<HTMLDivElement>(null)
  const titleRefs = useRef<HTMLDivElement[]>([])
  const contentRefs = useRef<HTMLDivElement[]>([])
  const isFirstRender = useRef(true)
  const beforeScrollY = useRef(0)
  const isMobile = useIsMobile()
  const offset = isMobile ? 48 + 90 : 80 + 90

  function handleScroll() {
    const maxLength = contentRefs.current.length - 1
    const curContent = contentRefs.current[activeIndex]
    const { top } = curContent?.getBoundingClientRect() ?? {}
    const scrollY = window.scrollY ?? window.pageYOffset

    if (scrollY - beforeScrollY.current > 0) {
      if (top < offset - 5) {
        const nextIndex = activeIndex + 1 > maxLength ? maxLength : activeIndex + 1
        setActiveIndex(nextIndex)
      }
    } else {
      if (top > offset + 5) {
        const preIndex = activeIndex - 1 < 0 ? 0 : activeIndex - 1
        setActiveIndex(preIndex)
      }
    }

    beforeScrollY.current = scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (isMobile && titleContainerRefs.current) {
      const titleRef = titleRefs.current[activeIndex]
      const { left, width } = titleRef.getBoundingClientRect()
      const { left: containerLeft, width: containerWidth } = titleContainerRefs.current.getBoundingClientRect() ?? {}
      const offset = left - containerLeft - (containerWidth - width) / 2

      const data = { offset: titleContainerRefs.current.scrollLeft }
      anime({
        targets: data,
        offset: titleContainerRefs.current.scrollLeft + offset,
        duration: 300,
        easing: 'easeInOutQuad',
        update: function () {
          if (titleContainerRefs.current) {
            titleContainerRefs.current.scrollLeft = data.offset
          }
        }
      })
    }
  }, [activeIndex])

  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="flex flex-col items-center relative pt-[20px] pb-[40px] md:pt-[60px] md:pb-[80px]">
        {/*  */}
        <div className="flex flex-col w-screen p-[20px] sticky top-[48px] z-10 bg-white md:w-[1200px] md:top-[80px] md:mb-[20px]">
          <div className="flex overflow-x-auto md:justify-between" ref={titleContainerRefs}>
            {schemaData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-[12px] text-[18px] leading-[26px] rounded-[12px] whitespace-nowrap cursor-pointer md:text-[20px] md:leading-[28px]"
                  style={{
                    transition: 'background .3s',
                    backgroundColor: activeIndex === index ? '#004ED1' : 'transparent',
                    color: activeIndex === index ? '#FFF' : '#0E1E46'
                  }}
                  ref={(titleRef) => {
                    if (titleRef) titleRefs.current[index] = titleRef
                  }}
                  onClick={() => {
                    const contentRef = contentRefs.current[index]
                    const { top } = contentRef.getBoundingClientRect()
                    const scrollY = window.scrollY ?? window.pageYOffset

                    window.scrollTo({
                      top: scrollY + top - offset,
                      left: 0,
                      behavior: 'smooth'
                    })
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
                className="flex flex-col mb-[20px] last:mb-0 md:flex-row md:mb-[100px]"
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
                  <div className="flex mt-[20px] md:mt-[24px]">
                    <FreeButton
                      text="立即咨询"
                      onClick={() => {
                        setShowMoadl(true)
                        setButtonType(`story${index}`)
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Banner
