import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { platformList, salesData } from './data'

const BelugaSales = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col items-center relative overflow-hidden">
        {/* 平台 */}
        <div className="flex flex-col px-[20px] py-[40px] bg-[#FDFDFD]">
          <div className="mb-[16px] text-[28px] leading-[34px] text-[#0E1E46] text-center font-[700]">
            一站式营销 SaaS
          </div>
          <div className="mb-[30px] text-[16px] leading-[26px] text-[#535D77] text-center">
            一站式的面向品牌站独立站的营销SaaS, cover以下平台, 已经支持shopify, 持续升级中
          </div>
          <div className="flex flex-wrap mx-[-4px]">
            {platformList.map((platform, index) => {
              return (
                <span key={index} className="w-1/2 px-[4px] mb-[20px]">
                  <Image width={560} height={310} quality={100} src={platform} alt="platform logo" />
                </span>
              )
            })}
            <span className="flex-1 text-[16px] leading-[26px] text-[#535D77] text-center">敬请期待</span>
          </div>
        </div>
        {/* sales */}
        <div className="flex flex-col py-[40px]">
          <div className="flex flex-col mb-[20px]">
            {salesData.map((data, index) => {
              return (
                <div key={index} className="flex flex-col mb-[40px] last:mb-0">
                  <div className="flex mb-[28px]">
                    <Image width={1156} height={830} quality={100} src={data.image} alt="image" />
                  </div>
                  <div className="flex flex-col px-[20px]">
                    <div className="mb-[24px] text-[28px] leading-[40px] text-[#0E1E46] font-[600]">{data.title}</div>
                    <div className="flex flex-col">
                      {data.description.map((subData, subIndex) => {
                        return (
                          <div key={subIndex} className="flex flex-col mb-[24px] last:mb-0">
                            <div className="mb-[8px] text-[16px] leading-[20px] text-[#365196] font-[600]">
                              {subData.subTitle}
                            </div>
                            <div className="text-[12px] leading-[20px] text-[#535D77]">{subData.info}</div>
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
            <Link href="https://mystro.admin.ishopastro.com/admin/user/login?type=beluga" passHref>
              <div className="flex items-center py-[8px] px-[28px] border border-solid border-[#104CBC] bg-[#F0F3FF] rounded-[8px] md:py-[14px] cursor-pointer">
                <span className="mr-[24px] text-[16px] text-[#004DD1] font-[700] md:text-[18px]">免费试用</span>
                <span className="w-[23px] h-[23px] text-[#004DD1]">
                  <Image
                    width={23}
                    height={23}
                    src="https://media.cdn.ishopastro.com/upload/images/20221206-110145.png_2022-12-06-03-01-59.png"
                    alt=""
                  />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BelugaSales
