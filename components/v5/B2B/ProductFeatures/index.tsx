import Image from 'next/image'

import { FeaturesData } from './data'

const B2BProductFeatures = () => {
  return (
    <div className="flex justify-center w-screen bg-[#F5F6FA]">
      <div className="flex flex-col items-center relative px-[20px] py-[40px] text-[#0E1E46] overflow-hidden md:py-[80px] md:w-[1440px]">
        <div className="text-[28px] leading-[34px] font-[700] md:text-[48px] md:leading-[62px] md:mb-[20px]">
          产品功能
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:px-[60px]">
          {FeaturesData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex py-[20px] border-b border-dashed border-black border-opacity-25 last:pb-0 last:border-b-0 md:w-1/3 md:last:border-b md:last:pb-[20px]"
              >
                <div
                  className="flex border-none md:flex-1 md:px-[20px] md:border-r md:border-dashed md:border-black md:border-opacity-25"
                  style={{ borderRightWidth: index === 2 || index === 5 ? '0' : '1px' }}
                >
                  <div className="flex md:flex-col md:flex-1 md:p-[40px] md:rounded-[20px] md:hover:bg-white">
                    <div className="w-[48px] h-[48px] mr-[20px] md:w-[60px] md:h-[60px] md:mb-[20px]">
                      <Image width={48} height={48} quality={100} src={data.icon} alt="icon" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="mb-[10px] text-[20px] leading-[24px] font-[700] md:mb-[20px] md:text-[24px] md:leading-[28px]">
                        {data.title}
                      </div>
                      <div className="flex flex-col">
                        {data.description.map((info, infoIndex) => {
                          return (
                            <span
                              key={infoIndex}
                              className="flex items-center text-[14px] leading-[22px] text-[#535D77] md:text-[16px] md:leading-[26px]"
                            >
                              <span className="mr-[8px] text-[22px]">·</span>
                              <span>{info}</span>
                            </span>
                          )
                        })}
                      </div>
                    </div>
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

export default B2BProductFeatures
