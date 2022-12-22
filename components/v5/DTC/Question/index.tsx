import Image from 'next/image'
import Link from 'next/link'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import useIsMobile from '../../../../hooks/useIsMobile'
import { questions } from './data'

const DTCPackage = () => {
  const isMobile = useIsMobile()
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-[20px] pt-[40px] text-[#0E1E46] md:py-[80px]">
        <div className="mb-[20px] text-[28px] leading-[32px] text-center md:mb-[55px] md:text-[32px] md:leading-[38px]">
          常见问题
        </div>

        <div className="flex items-center justify-center mb-[20px] text-[16px] leading-[24px] text-[#004DD1] md:hidden">
          <span className="mr-[8px]">查看更多</span>
          <span className="w-[22px] h-[22px]">
            <Image
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/9d2b02e36bed239d46bcc8be35a9c322.svg"
              width={22}
              height={22}
              quality={100}
              alt="icon"
            />
          </span>
        </div>
        {/* 轮播 */}
        <div className="flex md:w-[1200px] md:m-auto md:mb-[55px]">
          <Swiper pagination={{ clickable: true }} modules={[Pagination]}>
            {questions.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="pb-[40px] md:flex md:flex-wrap md:w-[1200px] md:pb-[0]">
                    {item.map(({ q, a }, subIndex) => {
                      return (
                        <div
                          key={subIndex}
                          className="md:w-1/2"
                          style={{
                            paddingRight: !isMobile && subIndex % 2 === 0 ? '16px' : '0',
                            paddingLeft: !isMobile && subIndex % 2 !== 0 ? '16px' : '0'
                          }}
                        >
                          <div className="flex p-[12px] mb-[12px] border border-[#DDE0F1] rounded-[12px] last:mb-0 md:mb-[32px] md:last:mb-[32px]">
                            <div className="flex-shrink-0 w-[24px] h-[24px] mr-[14px]">
                              <Image
                                src="https://media.cdn.ishopastro.com/svg/shopastrohome/12151393a75c4453f646467312e92978.svg"
                                width={24}
                                height={24}
                                quality={100}
                                alt="icon"
                              />
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[14px] leading-[18px] mb-[10px]">{q}</div>
                              <div className="text-[12px] leading-[18px] line-clamp-3">{a}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        <div className="hidden items-center justify-center mb-[20px] text-[18px] leading-[26px] text-[#004DD1] md:flex">
          <span className="mr-[12px]">查看更多</span>
          <span className="w-[22px] h-[22px]">
            <Image
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/9d2b02e36bed239d46bcc8be35a9c322.svg"
              width={22}
              height={22}
              quality={100}
              alt="icon"
            />
          </span>
        </div>
      </div>
      {/* 抢先体验 */}
      <div className="flex flex-col px-[20px] py-[40px] text-center bg-[#F5F6FA] md:py-[80px]">
        <div className="mb-[20px] text-[32px] leading-[38px] font-[600]">抢先体验? 立即开启免费试用</div>
        <div className="mb-[20px] text-[18px] leading-[28px]">光看不够? 立即开始免费7天试用。</div>
        <div className="flex justify-center">
          <span className="px-[58px] py-[18px] text-[18px] leading-[26px] text-[#004DD1] border border-[#004DD1] rounded-[12px] ">
            <Link href="/">免费试用</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default DTCPackage
