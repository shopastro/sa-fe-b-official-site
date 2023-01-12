import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Position = () => {
  return (
    <div className="flex flex-col w-screen md:items-center">
      <div className="flex flex-col relative px-[20px] pb-[40px] overflow-hidden md:w-[1200px] md:pb-[80px]">
        <div className="mb-[16px] text-[24px] leading-[28px] text-[#0E1E46] font-[600] md:mb-[32px] md:text-[32px] md:leading-[38px]">
          服务定位
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center flex-1 px-[24px] py-[30px] mb-[20px] border border-[#DDE0F1] bg-white rounded-[12px] md:mb-0 md:mr-[38px]">
            <span className="w-[40px] h-[40px] mr-[20px] md:w-[80px] md:h-[80px]">
              <Image
                width={80}
                height={80}
                quality={100}
                src="https://media.cdn.ishopastro.com/svg/shopastrohome/124509f08c41b11441926a7d9a6ebf99.svg"
                alt="icon"
              />
            </span>
            <div className="flex flex-col">
              <span className="mb-[6px] text-[18px] leading-[30px] text-[#0E1E46] font-[700] md:text-[22px]">品牌</span>
              <span className="text-[14px] leading-[22px] text-[#3E4462CC] text-opacity-80 md:text-[16px] md:leading-[26px]">
                以客户品牌为载体
              </span>
            </div>
          </div>

          <div className="flex items-center flex-1 px-[24px] py-[30px] mb-[20px] border border-[#DDE0F1] bg-white rounded-[12px] md:mb-0 md:mr-[38px]">
            <span className="w-[40px] h-[40px] mr-[20px] md:w-[80px] md:h-[80px]">
              <Image
                width={80}
                height={80}
                quality={100}
                src="https://media.cdn.ishopastro.com/svg/shopastrohome/f14e7c77e392f7a93285fa9ebf1c654a.svg"
                alt="icon"
              />
            </span>
            <div className="flex flex-col">
              <span className="mb-[6px] text-[18px] leading-[30px] text-[#0E1E46] font-[700] md:text-[22px]">GMV</span>
              <span className="text-[14px] leading-[22px] text-[#3E4462CC] text-opacity-80 md:text-[16px] md:leading-[26px]">
                以增长客户 GMV 为目标
              </span>
            </div>
          </div>

          <div className="flex items-center flex-1 px-[24px] py-[30px] border border-[#DDE0F1] bg-white rounded-[12px]">
            <span className="w-[40px] h-[40px] mr-[20px] md:w-[80px] md:h-[80px]">
              <Image
                width={80}
                height={80}
                quality={100}
                src="https://media.cdn.ishopastro.com/svg/shopastrohome/f67870220b0fb89e774fde8e65ea71a9.svg"
                alt="icon"
              />
            </span>
            <div className="flex flex-col">
              <span className="mb-[6px] text-[18px] leading-[30px] text-[#0E1E46] font-[700] md:text-[22px]">
                长期价值
              </span>
              <span className="text-[14px] leading-[22px] text-[#3E4462CC] text-opacity-80 md:text-[16px] md:leading-[26px]">
                实现客户品牌长期价值
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Position
