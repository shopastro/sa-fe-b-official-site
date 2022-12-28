import Image from 'next/image'

import { bannerData } from './data'

const BelugaBanner = () => {
  return (
    <div className="flex flex-col justify-center relative w-screen bg-[#F5F6FA]">
      {/* bg */}
      <div className="absolute top-[128px] left-[50%] transform translate-x-[-50%] w-screen overflow-hidden md:top-[410px] md:left-0 md:translate-x-0">
        <div className="w-[1439px] md:w-auto">
          <Image
            src="https://media.cdn.ishopastro.com/upload/images/20221227-145807.png_2022-12-27-06-58-41.png"
            width={2878}
            height={894}
            alt="bg1"
          />
        </div>
      </div>
      <div className="flex flex-col items-center relative py-[40px] overflow-hidden md:py-[80px]">
        <div className="relative w-[185px] h-[30px] mb-[32px]">
          <Image
            width={185}
            height={30}
            quality={100}
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/97d7732652dd2a9b4e9cf81047e76b0d.svg"
            alt="beluga logo"
          />
        </div>
        <h1 className="mb-[40px] px-[28px] text-[40px] leading-[48px] text-[#0E1E46] text-center font-[700] md:mb-[72px] md:text-[48px] md:leading-[58px]">
          一站式的面向品牌站独立站的营销SaaS
        </h1>
        {/* 功能 */}
        <div className="flex flex-col px-[20px] mb-[40px] md:flex-row">
          {bannerData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col py-[28px] mb-[30px] border border-white bg-[#F8F8F8] rounded-[12px] last:mb-0 md:w-[260px] md:mr-[38px] md:last:mr-0 md:mb-0"
              >
                <div className="flex justify-center mb-[12px]">
                  <span className="px-[36px] py-[4px] text-[14px] leading-[20px] text-[#FFF] rounded-[100vw] bg-[#004DD1]">
                    {data.type}
                  </span>
                </div>
                <div className="mb-[12px] text-[22px] leading-[30px] text-[#18214D] text-center font-[700]">
                  {data.title}
                </div>
                <div className="mb-[32px] text-[16px] leading-[24px] text-[#3E4462] text-opacity-80 text-center md:px-[28px]">
                  {data.info}
                </div>
                <div className="px-[20px]">
                  <Image width={520} height={400} quality={100} src={data.image} alt={data.title} />
                </div>
              </div>
            )
          })}
        </div>
        {/* 二维码 */}
        <div className="flex flex-col items-center">
          <span className="w-[120px] h-[120px] mb-[32px] md:w-[132px] md:h-[132px] md:p-[12px] md:rounded-[8px] md:bg-[#FFF]">
            <Image
              width={210}
              height={210}
              quality={100}
              src="https://media.cdn.ishopastro.com/upload/images/20221220-164020.png_2022-12-20-08-40-34.png"
              alt="二维码"
            />
          </span>
          <span className="text-[16px] leading-[24px] text-[#000]">试用请扫码联系企业微信。</span>
        </div>
      </div>
    </div>
  )
}

export default BelugaBanner
