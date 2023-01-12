import Image from 'next/image'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../../store/detectionStore'
import FreeButton from '../../FreeButton'
import { platformList, salesData } from './data'

const BelugaSales = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="flex flex-col items-center relative overflow-hidden">
        {/* 平台 */}
        <div className="flex flex-col px-[20px] py-[40px] bg-[#FDFDFD] md:py-[80px]">
          <div className="mb-[16px] text-[28px] leading-[34px] text-[#0E1E46] text-center font-[700] md:text-[48px] md:leading-[62px]">
            一站式营销 SaaS
          </div>
          <div className="mb-[30px] text-[16px] leading-[26px] text-[#535D77] text-center md:mb-[30px] md:text-[20px] md:leading-[32px]">
            一站式的面向品牌站独立站的营销SaaS, 覆盖以下平台, 已经支持Shopify, 持续升级中
          </div>
          <div className="flex flex-wrap mx-[-4px] md:mx-0 md:flex-nowrap md:max-w-[1280px]">
            {platformList.map((platform, index) => {
              return (
                <span key={index} className="w-1/2 px-[4px] mb-[20px] md:flex-1 md:w-1/4 md:px-0 md:mr-[24px] md:mb-0">
                  <Image width={560} height={310} quality={100} src={platform} alt="platform logo" />
                </span>
              )
            })}
            <span className="flex flex-1 justify-center text-[16px] leading-[26px] text-[#535D77] text-center md:items-center md:flex-none md:w-[64px] md:px-[10px] md:text-[20px] md:leading-[32px] md:border md:border-[#E5E5E5] md:rounded-[8px]">
              敬请期待
            </span>
          </div>
        </div>
        {/* sales */}
        <div className="flex flex-col py-[40px] md:py-[80px]">
          <div className="flex flex-col mb-[20px] md:max-w-[1200px]">
            {salesData.map((data, index) => {
              return (
                <div key={index} className="flex flex-col mb-[40px] last:mb-0 md:flex-row">
                  <div className="flex mb-[28px] md:flex-1 md:mb-0 md:mr-[50px]">
                    <Image width={1156} height={830} quality={100} src={data.image} alt="image" />
                  </div>
                  <div className="flex flex-col px-[20px] md:flex-1 md:justify-center">
                    <div className="mb-[24px] text-[28px] leading-[40px] text-[#0E1E46] font-[600] md:text-[32px] md:leading-[44px]">
                      {data.title}
                    </div>
                    <div className="flex flex-col">
                      {data.description.map((subData, subIndex) => {
                        return (
                          <div key={subIndex} className="flex flex-col mb-[24px] last:mb-0">
                            <div className="mb-[8px] text-[16px] leading-[20px] text-[#365196] font-[600] md:text-[18px] md:leading-[22px]">
                              {subData.subTitle}
                            </div>
                            <div className="text-[12px] leading-[20px] text-[#535D77] md:text-[14px] md:leading-[22px]">
                              {subData.info}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-center">
            <FreeButton
              text="立即咨询"
              onClick={() => {
                setShowMoadl(true)
                setButtonType(`story`)
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BelugaSales
