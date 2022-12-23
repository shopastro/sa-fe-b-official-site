import Image from 'next/image'

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
        <div className="mb-[14px] text-[28px] leading-[32px] text-[#0E1E46] font-[700] md:text-[36px] md:leading-[62px]">
          丰富插件，开箱即用
        </div>
        <div className="flex items-center mb-[14px]">
          <span className="flex w-[12px] h-[12px] mr-[8px] bg-[#004DD1] rounded-[6px]" />
          <span className="flex w-[75px] h-[8px] mr-[8px] bg-[#004DD1]" />
        </div>
        <div className="mb-[36px] text-[14px] leading-[22px] text-[#535D77] md:mb-[46px] md:text-[18px] md:leading-[28px]">
          官方出品，覆盖主流商品与促销等实用工具，开箱即用。
        </div>
        <div className="flex relative overflow-x-auto">
          {/* pc */}
          <div
            className="hidden md:flex items-center justify-center absolute top-0 left-0 w-[102px] h-[312px] z-10"
            style={{
              transform: 'rotateY(180deg)',
              background: 'linear-gradient(280.97deg, #F5F6FA 35.98%, rgba(245, 246, 250, 0) 98.42%)'
            }}
          >
            <Image
              width={58}
              height={58}
              quality={100}
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/cd0fb76c374c39f5c1fc747a424b2d0c.svg"
              alt=""
            />
          </div>
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
          <div
            className="hidden md:flex items-center justify-center absolute top-0 right-0 w-[102px] h-[312px]"
            style={{ background: 'linear-gradient(280.97deg, #F5F6FA 35.98%, rgba(245, 246, 250, 0) 98.42%)' }}
          >
            <Image
              width={58}
              height={58}
              quality={100}
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/cd0fb76c374c39f5c1fc747a424b2d0c.svg"
              alt=""
            />
          </div>
          {/* h5 */}
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
        </div>
      </div>
    </div>
  )
}

export default Plugins
