import Image from 'next/image'
import Link from 'next/link'

import { freeLink } from '../../../../utils/freeTrail'

const BelugaQuestion = () => {
  return (
    <div className="flex justify-center w-screen relative h-[320px] md:h-[540px]">
      <div
        className="absolute top-[0] left-[0] w-[100%] h-[320px] md:h-[540px]"
        style={{
          background: 'url(https://media.cdn.ishopastro.com/svg/sa-fe-b-background/industry_bg.svg) no-repeat',
          backgroundSize: 'cover'
        }}
      />

      <div className="relative top-[62px] md:top-[167px] w-screen">
        <h1 className="flex items-center  w-screen flex-col mb-[40px] text-[40px] leading-[48px] text-[#0E1E46] font-[700] md:mb-[42px] md:text-[48px] md:leading-[58px] ">
          <span>白鲸行业情报</span>
          <span className="text-[#FE8952]">一站式营销SaaS</span>

          <Link passHref href={freeLink('beluga_industry', 'beluga')}>
            <div className="w-screen px-[38px] md:px-[0] md:w-[180px] mt-[24px] flex item-center cursor-pointer">
              <span
                className="flex-1 py-[9px] md:py-[14px] text-[16px] md:text-[20px] leading-[26px] text-[#FFF] font-[700] text-center bg-[#004DD1] rounded-[8px]"
                style={{ backgroundColor: '#FE8953' }}
              >
                免费试用
              </span>
            </div>
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default BelugaQuestion
