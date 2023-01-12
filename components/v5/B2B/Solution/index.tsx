import anime from 'animejs'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useContainer } from 'unstated-next'

import useIsMobile from '../../../../hooks/useIsMobile'
import detectionStore from '../../../../store/detectionStore'
import FreeButton from '../../FreeButton'
import { solutionData } from './data'

const B2BSolution = () => {
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col items-center relative pt-[20px] pb-[40px] md:pt-[60px] md:pb-[80px]">
        {/* title */}
        <div className="flex justify-center w-screen p-[20px] sticky top-[48px] z-10 bg-white md:top-[80px]">
          <div id="box" className="flex overflow-x-auto md:w-[1200px] md:overflow-hidden" ref={titleContainerRefs}>
            {solutionData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="p-[12px] mr-[12px] text-[18px] leading-[26px] font-[700] text-center whitespace-nowrap rounded-[12px] last:mr-0 md:w-[14.28%] md:mr-0 cursor-pointer"
                  style={{
                    transition: 'background .3s',
                    color: activeIndex === index ? '#FFF' : '#0E1E46',
                    backgroundColor: activeIndex === index ? '#004ED1' : 'transparent'
                  }}
                  ref={(titleRef) => {
                    if (titleRef) titleRefs.current[index] = titleRef
                  }}
                  onClick={(e: any) => {
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
                  {data.title}
                </div>
              )
            })}
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col md:w-[1200px]">
          {solutionData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col mb-[20px] md:flex-row"
                ref={(contentRef) => {
                  if (contentRef) contentRefs.current[index] = contentRef
                }}
              >
                <div className="w-screen mb-[28px] md:w-1/2 md:mb-0 md:mr-[50px]">
                  <Image width={1122} height={794} quality={100} src={data.image} alt="image" />
                </div>
                <div className="flex flex-col px-[20px] md:w-1/2 md:ml-[50px] md:justify-center">
                  <div className="mb-[12px] text-[28px] leading-[40px] text-[#004ED1] font-[700] md:mb-[24px] md:text-[32px] md:leading-[44px]">
                    {data.title}
                  </div>
                  <div className="text-[16px] leading-[22px] text-[#535D77] md:text-[18px] md:leading-[26px]">
                    {data.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {/* btn */}
        <div className="flex mt-[20px] md:mt-[24px]">
          <FreeButton
            text="立即咨询"
            onClick={() => {
              setShowMoadl(true)
              setButtonType(`story`)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default B2BSolution
