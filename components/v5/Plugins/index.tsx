import Image from 'next/image'
import Link from 'next/link'

import { pluginsData } from './data'

const Plugins = () => {
  return (
    <div className="flex justify-center w-screen py-[80px] bg-[#F5F6FA]">
      <div className="flex flex-col w-[1400px] pl-[120px]">
        <div className="mb-[14px] text-[36px] leading-[62px] text-[#0E1E46]">丰富插件，开箱即用</div>
        <div className="flex items-center mb-[14px]">
          <span className="flex w-[12px] h-[12px] mr-[8px] bg-[#004DD1] rounded-[6px]" />
          <span className="flex w-[75px] h-[8px] mr-[8px] bg-[#004DD1]" />
        </div>
        <div className="mb-[46px] text-[18px] leading-[28px] text-[#535D77]">
          官方出品，覆盖主流商品与促销等实用工具，开箱即用。
        </div>
        <div className="flex overflow-x-auto">
          <div></div>
          <div className="flex">
            {pluginsData.map((pluginsRowData, rowIndex) => {
              return (
                <div key={rowIndex} className="flex flex-wrap justify-between w-[1140px] mr-[18px]">
                  {pluginsRowData.map((pluginData, index) => {
                    return (
                      <div key={index} className="flex w-[368px] h-[138px] mb-[18px] p-[18px] bg-white rounded-[12px]">
                        <div className="flex-shrink-0 w-[64px] h-[64px] mr-[16px]">
                          <Image width={64} height={64} src={pluginData.icon} alt={pluginData.title} />
                        </div>
                        <div>
                          <div className="mb-[12px] text-[20px] leading-[24px] text-[#0E1E46]">{pluginData.title}</div>
                          <div className="text-[14px] leading-[22px] text-[#535D77]">{pluginData.description}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Plugins
