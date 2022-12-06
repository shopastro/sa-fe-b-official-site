import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="flex justify-center w-screen text-white bg-[#003892]">
      <div className="flex flex-col items-center relative w-[1440px] h-[840px]">
        <div className="flex justify-between relative w-[1200px] mb-[80px] z-10">
          <div className="flex flex-col mt-[95px]">
            <div className="text-[48px] leading-[67.2px]">一站式跨境</div>
            <div className="mb-[28px] text-[48px] leading-[67.2px]">
              私域增长 <span className="text-[#FE8953]">解决方案</span>
            </div>
            <div className="flex items-center mb-[6px] text-[18px] leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              十五分钟快速建站
            </div>
            <div className="flex items-center mb-[6px] text-[18px] leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              最优建站产品组合,丰富的免费插件 紧贴您的行业需求
            </div>
            <div className="flex items-center mb-[6px] text-[18px] leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              精准助力广告营销, 深度挖掘市场情报, 量化驱动私域增长
            </div>
            <div className="flex items-center mb-[36px] text-[18px] leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              多种生意场景套件, 行业专家全案运营
            </div>
            <div className="flex text-[18px] leading-[26px]">
              <Link href="/" passHref>
                <span className="py-[12px] px-[54px] mr-[32px] border border-solid border-[#FE8953] rounded-[8px] bg-[#FE8953]">
                  免费试用
                </span>
              </Link>
              <Link href="/" passHref>
                <span className="py-[12px] px-[54px] border border-solid border-[#FFF] rounded-[8px]">了解更多</span>
              </Link>
            </div>
          </div>
          <div className="mt-[74px] w-[640px]">
            <Image
              width={1277}
              height={858}
              quality={100}
              src="https://media.cdn.ishopastro.com/upload/images/20221201-151838.png_2022-12-01-08-35-27.png"
              alt="banner1"
            />
          </div>
        </div>
        <div className="flex flex-col relative w-[1200px] z-10">
          <div className="flex justify-between mb-[50px]">
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">15</span>
                <div className="flex items-start">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">分钟</span>
                </div>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">建站完成</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="text-[36px] leading-[45px]">
                <span className="mr-[4px]">20</span>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">主流语言支持</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="text-[36px] leading-[45px]">
                <span className="mr-[4px]">80</span>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">本地币种支持</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="text-[36px] leading-[45px]">
                <span className="mr-[4px]">10</span>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">主流促销工具</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">2</span>
                <div className="flex items-start">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">亿</span>
                </div>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">全球企业信息库</div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">100</span>
                <div className="flex items-start mr-[4px]">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
                </div>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">海外消费者</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">300</span>
                <div className="flex items-start mr-[4px]">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
                </div>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">电商站点情报数据</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">1</span>
                <div className="flex items-start mr-[4px]">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">亿</span>
                </div>
                <span>+</span>
              </div>
              <div className="flex flex-col text-[16px] leading-[20px] text-white text-opacity-80">
                <span>商品GMC同步,</span>
                <span>成功率{'>99%'}</span>
              </div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">100</span>
                <div className="flex items-start mr-[4px]">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
                </div>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">网红信息</div>
            </div>
            <span className="w-[1px] h-[48px] bg-white opacity-50" />
            <div className="flex flex-col w-[170px] text-center">
              <div className="flex justify-center text-[36px] leading-[45px]">
                <span className="mr-[4px]">100</span>
                <div className="flex items-start mr-[4px]">
                  <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
                </div>
                <span>+</span>
              </div>
              <div className="text-[16px] leading-[20px] text-white text-opacity-80">Meta平台广告素材持续更新</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[150px] left-[624px]">
          <Image
            width={353}
            height={554}
            quality={100}
            src="https://media.cdn.ishopastro.com/upload/images/20221202-103722.png_2022-12-02-06-30-12.png"
            alt="bg1"
          />
        </div>
        <div className="absolute top-[35px] right-[-48px]">
          <Image
            width={353}
            height={649}
            quality={100}
            src="https://media.cdn.ishopastro.com/upload/images/20221202-103716.png_2022-12-02-06-30-12.png"
            alt="bg2"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
