import Image from 'next/image'

import useIsMobile from '../../../../hooks/useIsMobile'
import FreeButton from '../../FreeButton'
import { solutionData } from './data'

const Solution = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col items-center bg-[#F0F3FF]">
      <div className="flex flex-col relative px-[20px] py-[40px] md:w-[1400px] md:px-[120px] md:py-[80px]">
        {/* bg1 */}
        <div className="absolute top-0 left-0 w-[392px] h-[598px]">
          <Image
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/ef4bbe085ac94e09e17c3180bc111053.svg"
            width={392}
            height={598}
            alt="bg1"
          />
        </div>
        {/* bg2 */}
        <div className="absolute top-[18px] left-[245px] w-[12px] h-[12px] md:w-[25px] md:h-[25px] md:top-[150px] md:left-[400px]">
          <Image
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/63fb7bd0d53c3938430f5784c01a82b0.svg"
            width={25}
            height={25}
            alt="bg2"
          />
        </div>
        {/* bg3 */}
        <div className="absolute top-[13px] right-[12px] w-[12px] h-[12px] md:w-[24px] md:h-[25px] md:top-[66px] md:right-[46px]">
          <Image
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/42d964babdb8554a0c73c1ba4c221cb8.svg"
            width={24}
            height={25}
            alt="bg3"
          />
        </div>

        <div className="flex flex-col mb-[20px] md:mb-[40px]">
          <span className="mb-[8px] text-[28px] leading-[34px] text-[#0E1E46] text-center font-[700] md:mb-[16px] md:text-[48px] md:leading-[64px]">
            解决方案
          </span>
          <span className="text-[18px] leading-[28px] text-[#535D77] text-center md:text-[20px] md:leading-[32px]">
            根据不同的业务模式，我们提供匹配模式的解决方案
          </span>
        </div>
        <div className="flex flex-col relative md:flex-row md:flex-wrap md:mb-[40px]">
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
                  <div className="flex flex-1 md:px-[10px] md:py-[60px] rounded-[20px] md:flex-col md:hover:bg-[#FFF]">
                    <div className="flex flex-shrink-0 w-[60px] h-[60px] mr-[8px] md:mb-[20px]">
                      <Image src={item.icon} width={60} height={60} alt={item.title} />
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-[20px] text-[20px] leading-[24px] text-[#0E1E46] font-[600]">
                        {item.title}
                      </span>
                      <span className="text-[14px] leading-[22px] text-[#535D77]">{item.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <FreeButton href="/solutions" text="查看更多" />
        </div>
      </div>
    </div>
  )
}

export default Solution
