import Image from 'next/image'

import BaseForm from '../../../v1/base/Form'
import { list } from './data'

const Banner = () => {
  return (
    <div className="flex flex-col w-screen md:items-center">
      <div className="flex flex-col relative px-[20px] pt-[26px] pb-[40px] overflow-hidden md:flex-row md:w-[1200px] md:py-[80px]">
        <div className="mb-[20px] md:w-[688px] md:mb-0 md:mr-[40px] hidden md:block">
          <Image
            width={1377}
            height={918}
            quality={100}
            src="https://media.cdn.ishopastro.com/upload/images/20221222-140505.png_2022-12-22-06-05-57.png"
            alt="合作伙伴申请"
          />
        </div>
        <div className="flex flex-col md:flex-1">
          <div className="mb-[16px] text-[24px] leading-[28px] text-[#0E1E46] font-[600] md:mb-[32px] md:text-[32px] md:leading-[38px] ">
            合作伙伴申请表
          </div>
          <BaseForm list={list} type="agents" customButtonType="join" />
        </div>
      </div>
    </div>
  )
}

export default Banner
