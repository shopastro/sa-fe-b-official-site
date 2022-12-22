import Image from 'next/image'
import { useState } from 'react'

import { partnersData } from './data'

const Partners = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { data } = partnersData[activeIndex]

  function handleTitleClick(e: any, index: number) {
    e.target.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    setActiveIndex(index)
  }

  return (
    <div className="flex flex-col py-[40px] md:items-center md:pt-[80px] md:pb-[48px]">
      <div className="flex flex-col md:w-[1280px]">
        <div className="mb-[20px] text-[28px] leading-[34px] text-[#0E1E46] text-center font-[700] md:mb-[40px] md:text-[48px] md:leading-[62px]">
          合作伙伴
        </div>
        <div className="flex pl-[20px] mb-[20px] overflow-x-auto md:justify-between">
          {partnersData.map(({ title }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center mr-[32px] text-[20px] leading-[24px] text-[#535D77] whitespace-nowrap cursor-pointer md:flex-1"
                style={index === activeIndex ? { color: '#293963', fontWeight: 700 } : {}}
                onClick={(e) => {
                  handleTitleClick(e, index)
                }}
              >
                <span className="mb-[10px]">{title}</span>
                <span
                  className="w-[32px] h-[2px]"
                  style={{ backgroundColor: index === activeIndex ? '#004DD1' : '#FFF' }}
                />
              </div>
            )
          })}
        </div>
        <div className="flex flex-wrap px-[16px]">
          {data.map(({ icon, link }, index) => {
            return (
              <div key={index} className="w-1/3 px-[4px] mb-[12px] md:w-1/5 md:px-[12px] md:mb-[32px]">
                <Image src={icon} width={474} height={240} alt={link} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Partners
