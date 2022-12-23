import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className="flex justify-center w-screen text-white">
      <div className="flex flex-col items-center relative px-[20px] overflow-hidden md:w-[1200px] md:h-[830px]">
        <div className="flex flex-col justify-between relative z-10 md:flex-row md:w-[1200px] md:mb-[42px]">
          <div className="flex flex-col mt-[8px] md:mt-[85px]">
            <h1 className="text-[36px] leading-[50.4px] font-[700] md:text-[48px] md:leading-[67.2px]">
              <span>星盘跨境, 品牌出海</span>
              <span className="mb-[8px] md:mb-[28px]">
                一站式数智化 <span className="text-[#FE8953]">解决方案</span>
              </span>
            </h1>
            <div className="flex items-center md:hidden">
              <Image
                width={1352}
                height={1050}
                quality={100}
                src="https://media.cdn.ishopastro.com/upload/images/20221219.png_2022-12-19-12-02-37.png"
                alt="banner1"
              />
            </div>
            <div className="flex items-center mb-[4px] text-[12px] leading-[20px] md:mb-[6px] md:text-[18px] md:leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              十五分钟快速建站, 搭建更具本土化的品牌独立站
            </div>
            <div className="flex items-center mb-[4px] text-[12px] leading-[20px] md:mb-[6px] md:text-[18px] md:leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              最优建站产品组合, 丰富的免费插件, 紧贴您的行业需求
            </div>
            <div className="flex items-center mb-[4px] text-[12px] leading-[20px] md:mb-[6px] md:text-[18px] md:leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              精准助力广告营销, 深度挖掘市场情报, 量化驱动私域增长
            </div>
            <div className="flex items-center mb-[20px] text-[12px] leading-[20px] md:mb-[36px] md:text-[18px] md:leading-[32px]">
              <span className="flex w-[8px] h-[8px] mr-[16px] rounded-[4px] bg-white" />
              多种生意场景套件, 行业专家全案运营
            </div>
            <div className="hidden text-[18px] leading-[26px] md:flex">
              <span className="py-[12px] px-[54px] border border-solid border-[#FE8953] rounded-[8px] bg-[#FE8953]">
                <Link href="/product" passHref>
                  免费试用
                </Link>
              </span>
            </div>
          </div>
          <div className="hidden items-center md:flex">
            <Image
              width={676}
              height={539}
              quality={100}
              src="https://media.cdn.ishopastro.com/upload/images/20221212-151737.png_2022-12-12-07-35-32.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-wrap relative z-10 md:w-[1200px]">
          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">15</span>
              <div className="flex items-start">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">分钟</span>
              </div>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">建站完成</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="text-[36px] leading-[45px]">
              <span className="mr-[4px]">20</span>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">主流语言支持</div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="text-[36px] leading-[45px]">
              <span className="mr-[4px]">80</span>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">本地币种支持</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="text-[36px] leading-[45px]">
              <span className="mr-[4px]">10</span>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">主流促销工具</div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">2</span>
              <div className="flex items-start">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">亿</span>
              </div>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">全球企业信息库</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:hidden" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">100</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">海外消费者</div>
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">300</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">电商站点情报数据</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
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
            <span className="hidden absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50 md:block" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">100</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="text-[16px] leading-[20px] text-white text-opacity-80">网红信息</div>
            <span className="absolute right-0 bottom-0 w-[1px] h-[48px] bg-white opacity-50" />
          </div>

          <div className="flex flex-col relative w-1/2 mb-[32px] text-center md:w-1/5 ">
            <div className="flex justify-center text-[36px] leading-[45px]">
              <span className="mr-[4px]">100</span>
              <div className="flex items-start mr-[4px]">
                <span className="text-[14px] leading-[26px] text-[#F5F6FA] text-opacity-[.66]">万</span>
              </div>
              <span>+</span>
            </div>
            <div className="flex flex-col text-[16px] leading-[20px] text-white text-opacity-80">
              <span>Meta平台广告素材</span>
              <span>持续更新</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
