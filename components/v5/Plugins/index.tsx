import Image from 'next/image'
import Link from 'next/link'

import { PluginsDataItem, pluginsData } from './data'

const pcPluginsData: PluginsDataItem[][] = []
const mobilePluginsData: PluginsDataItem[][] = []
pluginsData.forEach((item, index) => {
  const pcIndex = Math.floor(index / 6)
  if (!pcPluginsData[pcIndex]) pcPluginsData[pcIndex] = []
  pcPluginsData[pcIndex].push(item)

  const mobileIndex = Math.floor(index / 2)
  if (!mobilePluginsData[mobileIndex]) mobilePluginsData[mobileIndex] = []
  mobilePluginsData[mobileIndex].push(item)
})

const Plugins = () => {
  return (
    <div className="flex flex-col w-screen py-[40px] bg-[#F5F6FA] md:items-center md:py-[80px]">
      <div className="flex flex-col px-[20px] md:w-[1400px] md:pl-[120px]">
        <div className="mb-[14px] text-[28px] leading-[32px] text-[#0E1E46] md:text-[36px] md:leading-[62px]">
          丰富插件，开箱即用
        </div>
        <div className="flex items-center mb-[14px]">
          <span className="flex w-[12px] h-[12px] mr-[8px] bg-[#004DD1] rounded-[6px]" />
          <span className="flex w-[75px] h-[8px] mr-[8px] bg-[#004DD1]" />
        </div>
        <div className="mb-[36px] text-[14px] leading-[22px] text-[#535D77] md:mb-[46px] md:text-[18px] md:leading-[28px]">
          官方出品，覆盖主流商品与促销等实用工具，开箱即用。
        </div>
        <div className="flex overflow-x-auto">
          <div></div>

          <div className="hidden md:flex">
            {pcPluginsData.map((pluginsRowData, rowIndex) => {
              return (
                <div key={rowIndex} className="flex flex-wrap justify-between w-[1140px] mr-[18px]">
                  {pluginsRowData.map((pluginData, index) => {
                    return (
                      <div key={index} className="flex w-[368px] h-[138px] mb-[18px] p-[18px] bg-white rounded-[12px]">
                        <div className="flex-shrink-0 w-[64px] h-[64px] mr-[16px]">
                          <Image width={64} height={64} quality={100} src={pluginData.icon} alt={pluginData.title} />
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

          <div className="flex md:hidden">
            {mobilePluginsData.map((pluginsRowData, rowIndex) => {
              return (
                <div key={rowIndex} className="flex flex-col mr-[18px]">
                  {pluginsRowData.map((pluginData, index) => {
                    return (
                      <div key={index} className="flex w-[250px] h-[102px] mb-[12px] p-[12px] bg-white rounded-[8px]">
                        <div className="flex-shrink-0 w-[44px] h-[44px] mr-[12px]">
                          <Image width={64} height={64} quality={100} src={pluginData.icon} alt={pluginData.title} />
                        </div>
                        <div>
                          <div className="mb-[12px] text-[14px] leading-[18px] text-[#0E1E46]">{pluginData.title}</div>
                          <div className="max-h-[48px] line-clamp-3 text-[12px] leading-[16px] text-[#535D77]">
                            {pluginData.description}
                          </div>
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
