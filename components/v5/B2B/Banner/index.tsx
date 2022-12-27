import Image from 'next/image'
import { useContainer } from 'unstated-next'

import detectionStore from '../../../../store/detectionStore'

const Banner = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col items-center relative overflow-hidden">
        {/* h5 背景 */}
        <div className="w-screen md:hidden">
          <Image
            width={750}
            height={930}
            quality={100}
            src="https://media.cdn.ishopastro.com/upload/images/20221220-103616.jpeg_2022-12-20-02-37-00.jpg"
            alt="banner"
          />
        </div>
        {/* pc 背景 */}
        <div className="hidden md:flex">
          <Image
            width={2880}
            height={1246}
            quality={100}
            src="https://media.cdn.ishopastro.com/upload/images/20221220-103026.jpg_2022-12-20-02-31-48.jpg"
            alt="banner"
          />
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 px-[20px] pt-[40px] text-white md:flex md:items-center md:justify-center">
          <div className="md:w-[1200px]">
            <div className="mb-[8px] text-[48px] leading-[58px] font-[700]">星盘 B2B</div>
            <div className="mb-[16px] text-[28px] leading-[45px] font-[700]">数智化助力外贸企业高效出海</div>
            <div className="text-[16px] leading-[26px] md:w-[550px]">
              提供品牌认知与建设、全链路数字化询盘跟进和管理的产品和服务, 支持各类批发场景,
              通过全路径洞察并挖掘访客意向与商机, 帮助外贸B2B商家在线上高效开展业务、获取高质量询盘
            </div>
            {/* fixed btn */}
            <div
              className="flex fixed bottom-0 left-0 z-10 w-screen px-[20px] py-[10px] bg-[#FFF] cursor-pointer md:mt-[48px] md:static md:w-auto md:p-0 md:bg-transparent"
              onClick={() => {
                setShowMoadl(true)
                setButtonType('topbanner')
              }}
            >
              <span className="flex-1 py-[12px] px-[54px] text-[18px] leading-[26px] text-[#FFF] font-[700] text-center bg-[#FF793A] rounded-[12px] md:flex-none md:py-[18px]">
                立即咨询
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
