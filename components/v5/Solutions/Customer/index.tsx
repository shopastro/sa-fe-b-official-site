import Image from 'next/image'

import useIsMobile from '../../../../hooks/useIsMobile'
import FreeButton from '../../FreeButton'
import { customerData } from './data'

const Customer = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col justify-center w-screen bg-[#F5F6FA] md:items-center">
      <div className="flex flex-col items-center relative px-[20px] py-[40px] overflow-hidden md:py-[80px] md:max-w-[1280px]">
        <div className="mb-[24px] text-[28px] leading-[40px] text-[#000] font-[600] md:mb-[40px] md:text-[36px] md:leading-[50px]">
          客户针对性解决方案
        </div>
        <div className="flex flex-col mb-[20px] md:flex-row md:flex-wrap md:mx-[-15px]">
          {customerData.map((item, index) => {
            return (
              <div key={index} className="flex mb-[20px] last:mb-0 md:w-1/2 md:px-[15px] md:mb-[40px]">
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div className="flex flex-col p-[20px] bg-white rounded-[10px] md:p-[40px]">
                    <div className="mb-[20px]" style={{ display: isMobile ? 'flex' : 'none' }}>
                      <Image width={590} height={404} quality={100} src={item.imageMobile} alt="" />
                    </div>
                    <div className="mb-[20px]" style={{ display: !isMobile ? 'flex' : 'none' }}>
                      <Image width={1090} height={480} quality={100} src={item.imagePc} alt="" />
                    </div>
                    <div className="mb-[12px] text-[24px] leading-[34px] text-[#0E1E46] font-[600] md:text-[32px] md:leading-[44px]">
                      {item.title}
                    </div>
                    <div className="text-[14px] leading-[22px] text-[#666] md:text-[16px] md:leading-[26px]">
                      {item.info}
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
        <FreeButton href="/product" />
      </div>
    </div>
  )
}

export default Customer
