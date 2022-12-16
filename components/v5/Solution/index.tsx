import Image from 'next/image'

import useIsMobile from '../../../hooks/useIsMobile'
import { SolutionDataItem, solutionData } from './data'

const Solution = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col items-center bg-[#F0F3FF]">
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
              <div
                key={index}
                className="flex flex-1 py-[20px] border-b border-dashed border-black border-opacity-25 last:border-b-0 md:flex-col md:min-w-[25%]"
                style={!isMobile ? { borderBottomWidth: index > 3 ? '0' : '1px' } : {}}
              >
                <div
                  className="flex flex-1 md:px-[10px] border-black border-opacity-25 md:border-r md:border-dashed"
                  style={!isMobile ? { borderRightWidth: index === 3 || index === 6 ? '0' : '1px' } : {}}
                >
                  <div className="flex flex-1 md:px-[10px] md:py-[60px] rounded-[20px] hover:bg-[#FFF]">
                    <div className="flex flex-shrink-0 w-[60px] h-[60px] mr-[8px] md:mb-[20px]">
                      <Image src={item.icon} width={60} height={60} alt={item.title} />
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-[20px] text-[20px] leading-[24px] text-[#0E1E46]">{item.title}</span>
                      <span className="text-[14px] leading-[22px]">{item.description}</span>
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

export default Solution
