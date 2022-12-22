import Image from 'next/image'
import Link from 'next/link'

import useIsMobile from '../../../../hooks/useIsMobile'
import { data } from './data'

const Banner = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col justify-center w-screen bg-[#F5F6FA]">
      <div className="flex flex-col items-center relative overflow-hidden pt-[18px] pb-[40px] md:pt-[56px] md:pb-[80px]">
        {/* h5 背景 */}
        <div className="md:hidden absolute top-[8px] right-0">
          <Image
            width={73}
            height={139}
            quality={100}
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/b283a6af997a9d3999a79098e766545e.svg"
            alt="banner bg"
          />
        </div>
        {/* pc 背景 */}
        <div className="hidden md:flex absolute top-[36px] right-0">
          <Image
            width={319}
            height={517}
            quality={100}
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/562b97c65b2b191004fd643ea48690d7.svg"
            alt="banner bg"
          />
        </div>
        {/* 内容 */}
        <div className="relative mb-[12px] text-[20px] leading-[28px] md:mb-[32px]">
          <span className="mr-[4px] text-[#222222]">星盘跨境</span>
          <span className="text-[#004ED1]">shopastro</span>
        </div>
        <div className="flex flex-col relative mb-[42px] text-[24px] leading-[34px] text-[#222] text-center font-[600] md:flex-row md:mb-[32px] md:text-[40px] md:leading-[56px]">
          <span>全链路运营方案</span>
          <span>一站式出海更简单、更高效</span>
        </div>

        <div className="flex relative mb-[40px]">
          <div className="flex items-center px-[8px] text-[16px] leading-[20px] text-[#263577] border-r md:px-[16px] md:text-[20px] md:leading-[24px]">
            <span className="w-[28px] h-[28px] mr-[4px] md:w-[40px] md:h-[40px] md:mr-[12px]">
              <Image
                width={40}
                height={40}
                quality={100}
                src="https://media.cdn.ishopastro.com/svg/shopastrohome/f1e5819cf38502c243d33886d08f157d.svg"
                alt="合规安全 icon"
              />
            </span>
            <span>合规安全</span>
          </div>
          <div className="flex items-center px-[8px] text-[16px] leading-[20px] text-[#263577] border-r md:px-[16px] md:text-[20px] md:leading-[24px]">
            <span className="w-[28px] h-[28px] mr-[4px] md:w-[40px] md:h-[40px] md:mr-[12px]">
              <Image
                width={40}
                height={40}
                quality={100}
                src="https://media.cdn.ishopastro.com/svg/shopastrohome/55eda4955bb3b35aa0a2dcc6876120a1.svg"
                alt="数据分析 icon"
              />
            </span>
            <span>数据分析</span>
          </div>
          <div className="flex items-center px-[8px] text-[16px] leading-[20px] text-[#263577] md:px-[16px] md:text-[20px] md:leading-[24px]">
            <span className="w-[28px] h-[28px] mr-[4px] md:w-[40px] md:h-[40px] md:mr-[12px]">
              <Image
                width={40}
                height={40}
                quality={100}
                src="https://media.cdn.ishopastro.com/svg/shopastrohome/29511d652fb7105d56a0b2c53687ab4c.svg"
                alt="多国家市场 icon"
              />
            </span>
            <span>多国家市场</span>
          </div>
        </div>

        <div className="flex flex-col relative px-[20px] md:flex-row md:flex-wrap md:max-w-[1280px]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex mb-[12px] last:mb-0 md:flex-1 md:min-w-[25%] md:mb-[20px] md:last:mb-[20px]"
              >
                <div
                  className="flex-1 p-[20px] rounded-[20px] bg-white md:p-[40px]"
                  style={{ marginRight: isMobile ? '0' : index === 3 || index === 6 ? '0' : '22px' }}
                >
                  <div className="flex items-center mb-[12px] md:flex-col md:items-start md:mb-[20px]">
                    <span className="flex md:mb-[20px]">
                      <span className="self-start mr-[4px] text-[18px] leading-[46px] text-[#5071E7]">step</span>
                      <span className="mr-[12px] text-[40px] leading-[58px] text-[#5071E7] md:text-[46px] md:leading-[66px]">
                        {item.step}
                      </span>
                    </span>
                    <span className="text-[20px] leading-[24px] text-[#0E1E46] md:text-[24px] md:leading-[28px]">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-[14px] leading-[22px] text-[#535D77] md:text-[16px] md:leading-[26px]">
                    {item.info}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 免费试用 */}
        <Link href="/product" passHref>
          <div className="hidden md:flex mt-[30px] cursor-pointer">
            <span className="px-[56px] py-[16px] text-[18px] leading-[26px] text-[#FFF] bg-[#FE8953] rounded-[8px]">
              免费试用
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Banner
