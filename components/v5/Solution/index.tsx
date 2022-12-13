import Image from 'next/image'

import { SolutionDataItem, solutionData } from './data'

const Solution = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col px-[20px] py-[40px] md:w-[1440px] md:px-[120px]">
        <div className="flex flex-col mb-[20px]">
          <span className="mb-[8px] text-[28px] leading-[34px] text-[#0E1E46] text-center">解决方案</span>
          <span className="text-[18px] leading-[28px] text-[#535D77] text-center">
            根据不同的业务模式，我们提供匹配模式的解决方案
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {solutionData.map((item, index) => {
            return (
              <div key={index} className="flex flex-1 py-[20px] md:flex-col md:min-w-[25%] md:p-[60px]">
                <div className="flex flex-shrink-0 w-[60px] h-[60px] mr-[8px] md:mb-[20px]">
                  <Image src={item.icon} width={60} height={60} alt={item.title} />
                </div>
                <div className="flex flex-col">
                  <span className="mb-[20px] text-[20px] leading-[24px] text-[#0E1E46]">{item.title}</span>
                  <span className="text-[14px] leading-[22px]">{item.description}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Solution
