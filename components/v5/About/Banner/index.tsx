import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Banner = () => {
  return (
    <div className="flex flex-col justify-center w-screen">
      <div className="flex flex-col relative py-[40px] overflow-hidden md:items-center">
        {/* 背景图1 h5 */}
        <div className="flex flex-col absolute top-[28px] left-0 w-screen md:hidden">
          <div>
            <Image
              width={375}
              height={468}
              quality={100}
              layout="responsive"
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/a50cca291786b36a82cf243f1a93b26d.svg"
              alt="banner bg"
            />
          </div>
          <div className="mt-[-10px]">
            <Image
              width={375}
              height={258}
              quality={100}
              layout="responsive"
              src="https://media.cdn.ishopastro.com/svg/shopastrohome/031ef90b94f67c0e915d33e503d08047.svg"
              alt="banner bg"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-[1200px] md:mb-[200px]">
          <h1 className="relative px-[20px] mb-[20px] text-[32px] leading-[38px] text-[#0E1E46] font-[700] md:mb-[32px] md:text-[48px] md:leading-[58px]">
            星盘跨境 shopastro
          </h1>
          <div className="relative px-[20px] mb-[4px] text-[14px] leading-[22px] text-[#535D77] md:w-[550px] md:mb-[8px] md:text-[16px] m:leading-[26px]">
            shopastro是品牌出海服务领域的新锐者, 成立于2021年8月, 总部位于杭州, 在义乌、深圳、厦门三地设立分公司,
            目前已服务百家以上大客户。其致力于为中国品牌卖家提供一站式出海全链路解决方案,
            以「大数据和AI技术驱动的精细化运营」实现品牌价值输出和流量变现
          </div>
          <a
            href="https://shopastro.feishu.cn/wiki/wikcn1rjK4qU03PRdyRB1tXpgIe"
            target="_blank"
            rel="noreferrer"
            className="flex relative px-[20px] text-[16px] leading-[26px] text-[#004ED1]"
          >
            查看星盘详细介绍
          </a>
        </div>
        {/* 背景图2 h5 */}
        <div className="relative w-screen mb-[36px] md:hidden">
          <Image
            width={375}
            height={441}
            quality={100}
            layout="responsive"
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/ea29f610b77cdde97c7a18eed0ffbb1c.svg"
            alt="banner bg"
          />
        </div>
        {/* 发展历程 h5 */}
        <div className="flex relative px-[20px] md:hidden">
          <div className="w-[2px] ml-[10px] mt-[12px] mb-[24px] bg-[#BCD4FB]" />
          <div className="flex flex-col w-[236px]">
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col text-[28px] leading-[34px] text-[#0E1E46] font-[600]">
                <span>发展历程</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021/08</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">星盘跨境shopastro在杭州成立</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021/09</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">
                  shopastro获蓝湖资本, 深瑾资本等机构数百万美元天使投资
                </span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021/11</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">shopastro义乌分公司成立</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022/02</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">shopastro深圳分公司成立</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">shopastro厦门分公司成立</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022/03</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">
                  shopastro获超千万美元A轮融资, 由高瓴创投领投
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 发展历程 pc */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex items-center w-[1200px]">
            <div className="flex items-center flex-1 h-[120px] p-[20px] text-[32px] leading-[38px] text-[#0E1E46] font-[700]">
              发展历程
            </div>
            <div className="flex flex-1 relative h-[120px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021/08</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">星盘跨境shopastro在杭州成立</span>
              </div>
            </div>
            <div className="flex flex-1 relative h-[120px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021/11</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">shopastro义乌分公司成立</span>
              </div>
            </div>
            <div className="flex flex-1 relative h-[120px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022/03</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">
                  shopastro获超千万美元A轮融资, 由高瓴创投领投
                </span>
              </div>
            </div>
          </div>
          <div className="w-screen h-[2px] bg-[#BCD4FB]" />
          <div className="flex w-[600px] ml-[300px]">
            <div className="flex items-end flex-1 relative h-[120px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021/09</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">
                  shopastro获蓝湖资本, 深瑾资本等机构数百万美元天使投资
                </span>
              </div>
            </div>
            <div className="flex items-end flex-1 relative h-[120px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022/02</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">shopastro深圳分公司成立</span>
                <span className="text-[14px] leading-[16px] text-[#313945]">shopastro厦门分公司成立</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
