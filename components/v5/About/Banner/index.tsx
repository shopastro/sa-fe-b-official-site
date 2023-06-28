import Image from 'next/image'

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

        <div className="flex flex-col md:w-[1200px] md:mb-[100px]">
          <h1 className="relative px-[20px] mb-[20px] text-[32px] leading-[38px] text-[#0E1E46] font-[700] md:mb-[32px] md:text-[48px] md:leading-[58px]">
            星盘跨境 shopastro
          </h1>
          <div className="relative px-[20px] mb-[4px] text-[14px] leading-[22px] text-[#535D77] md:w-[550px] md:mb-[8px] md:text-[16px] m:leading-[26px]">
            <p className={'mb-[16px]'}>
              星盘跨境是AI-based SaaS/PaaS
              服务商及品牌出海全链路运营服务商，成立于2021年8月，使命是让中国品牌卖家享受更好的商业服务。核心团队来自于阿里巴巴、蚂蚁金服、百度。已获高瓴、顺为领投的超千万美元A轮融资。
            </p>
            <p>
              星盘跨境一直致力于将AI技术深度应用于品牌出海全链路中，服务客户涵盖B2B和DTC独立站业务。已将AIGC/ChatGPT技术应用于品牌策划、建站、SEO、广告投放、社媒运营和用户运营等领域。作为AI数智化品牌出海的新锐者，星盘跨境不断创新，使得传统的建站和运营方式得到了重新定义。
            </p>
          </div>
          <a
            href="https://shopastro.feishu.cn/wiki/wikcn1rjK4qU03PRdyRB1tXpgIe"
            target="_blank"
            rel="noreferrer"
            className="flex relative px-[20px] text-[16px] leading-[26px] text-[#004ED1] mt-[30px]"
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
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021 / 08</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">公司成立</span>
                <span className={'text-lg'}>成立于2021年8月 总部位于杭州</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021 / 09</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">天使轮融资</span>
                <span className={'text-lg'}>获得天使轮融资3600万人民币</span>
                <img
                  className={'my-2 w-[60px] bg-white rounded-lg inline-block'}
                  src="https://media.cdn.ishopastro.com/upload/images/63d9f2d3572c11dfa9ec6b644d6875d0f703918f646e copy.jpg_2023-06-27-11-53-28.jpg"
                  alt="logo"
                />
                <img
                  className={'mb-3.5 w-[60px] rounded-lg inline-block'}
                  src="https://media.cdn.ishopastro.com/upload/images/27873635.png_2023-06-27-11-29-23.png"
                  alt="logo"
                />
                <img
                  className={'w-[60px] inline-block'}
                  src="https://media.cdn.ishopastro.com/svg/official site/1485002a4e32958328c2d29d95f8e565.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021 / 11</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">星盘建站</span>
                <span className={'text-lg'}>建站产品上线 收获第一批种子客户</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2021 / 11</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">义乌分公司</span>
                <span className={'text-lg'}>成立义乌分公司</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022 / 02</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">深圳分公司</span>
                <span className={'text-lg'}>成立深圳分公司</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022 / 03</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">A轮融资</span>
                <span className={'text-lg'}>获得A轮融资1000万美金</span>
                <img
                  className={'my-2 w-[60px] bg-white rounded-lg inline-block'}
                  src="https://media.cdn.ishopastro.com/upload/images/63d9f2d3572c11dfa9ec6b644d6875d0f703918f646e copy.jpg_2023-06-27-11-53-28.jpg"
                  alt="logo"
                />
                <img
                  className={'w-[18px] bg-white rounded-lg'}
                  src="https://media.cdn.ishopastro.com/upload/images/Shunwei_Capital.png_2023-06-28-05-53-28.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022 / 06</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">白鲸数智</span>
                <span className={'text-lg'}>白鲸数智营销产品上线</span>
              </div>
            </div>
            <div className="flex items-center mb-[42px]">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022 / 11</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">Google 合作</span>
                <span className={'text-lg'}>成为Google合作伙伴</span>
                <img
                  className={'mt-2 w-[80px]'}
                  src="https://media.cdn.ishopastro.com/upload/images/unnamed.jpg_2023-06-27-12-02-17.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex items-center">
              <span className="flex-shrink-0 w-[22px] h-[22px] ml-[-12px] mr-[12px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[600]">2022 / 12</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">阿里合作</span>
                <span className={'text-lg'}>与阿里签署合作协议</span>
                <img
                  className={'mt-2'}
                  src="https://media.cdn.ishopastro.com/svg/official site/24d6a8f049bf15a47f1762b821ef6955.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
        {/* 发展历程 pc */}
        <div className="hidden md:flex flex-col items-center">
          <div className="flex items-center flex-1 h-[120px] p-[20px] text-[32px] leading-[38px] text-[#0E1E46] font-[700] w-[1200px] justify-start">
            发展历程
          </div>
          <div className="flex items-end w-[1200px]">
            <div className="flex flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex flex-1 relative h-[120px] px-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#FF793A] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021 / 11</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">星盘建站</span>
                <span className={'text-lg'}>
                  建站产品上线
                  <br />
                  收获第一批种子客户
                </span>
              </div>
            </div>
            <div className="flex flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex flex-1 relative h-[120px] px-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#FF793A] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022 / 06</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">白鲸数智</span>
                <span className={'text-lg'}>
                  白鲸数智营销
                  <br />
                  产品上线
                </span>
              </div>
            </div>
            <div className="flex flex-1 relative h-[190px] p-[20px] border-l-[2px] border-[#BCD4FB] pt-0">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#FF793A] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022 / 11</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">Google 合作</span>
                <span className={'text-lg'}>成为Google合作伙伴</span>
                <img
                  className={'mt-2'}
                  src="https://media.cdn.ishopastro.com/upload/images/unnamed.jpg_2023-06-27-12-02-17.jpg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex flex-1 relative h-[120px] p-[20px] border-l-[2px] border-[#BCD4FB] pt-0">
              <span className="absolute bottom-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#FF793A] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022 / 12</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">阿里合作</span>
                <span className={'text-lg'}>与阿里签署合作协议</span>
                <img
                  className={'mt-2'}
                  src="https://media.cdn.ishopastro.com/svg/official site/24d6a8f049bf15a47f1762b821ef6955.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="w-screen h-[2px] bg-[#BCD4FB]" />
          <div className="flex w-[1200px]">
            <div className="flex items-start flex-1 relative h-[100px] px-[20px] pt-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021 / 08</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">公司成立</span>
                <span className={'text-lg'}>成立于2021年8月 总部位于杭州</span>
              </div>
            </div>
            <div className="flex items-start flex-1 relative h-[155px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021 / 09</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">天使轮融资</span>
                <span className={'text-lg'}>获得天使轮融资 3600万人民币</span>
                <img
                  className={'my-2 py-[3px] bg-white rounded-lg'}
                  src="https://media.cdn.ishopastro.com/upload/images/63d9f2d3572c11dfa9ec6b644d6875d0f703918f646e copy.jpg_2023-06-27-11-53-28.jpg"
                  alt="logo"
                />
                <img
                  className={'mb-2 w-[120px] rounded-lg'}
                  src="https://media.cdn.ishopastro.com/upload/images/27873635.png_2023-06-27-11-29-23.png"
                  alt="logo"
                />
                <img
                  className={'w-[120px]'}
                  src="https://media.cdn.ishopastro.com/svg/official site/1485002a4e32958328c2d29d95f8e565.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex items-start flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex items-start flex-1 relative h-[90px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2021 / 11</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">义乌分公司</span>
                <span className={'text-lg'}>成立义乌分公司</span>
              </div>
            </div>
            <div className="flex items-start flex-1 relative h-[90px] p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022 / 02</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">深圳分公司</span>
                <span className={'text-lg'}>成立深圳分公司</span>
              </div>
            </div>
            <div className="flex items-start flex-1 h-[200px] relative p-[20px] border-l-[2px] border-[#BCD4FB]">
              <span className="absolute top-[-12px] left-[-12px] w-[22px] h-[22px] border-[6px] border-[#F6F7F8] bg-[#004ED1] rounded-[22px]" />
              <div className="flex flex-col">
                <span className="mb-[8px] text-[18px] leading-[22px] text-[#0E1E46] font-[700]">2022 / 03</span>
                <span className="text-[14px] leading-[16px] text-[#313945] font-semibold mb-1">A轮融资</span>
                <span className={'text-lg'}>
                  获得A轮融资
                  <br />
                  1000万美金
                </span>
                <img
                  className={'my-2 py-[3px] bg-white rounded-lg'}
                  src="https://media.cdn.ishopastro.com/upload/images/63d9f2d3572c11dfa9ec6b644d6875d0f703918f646e copy.jpg_2023-06-27-11-53-28.jpg"
                  alt="logo"
                />
                <img
                  className={'w-[36px] bg-white rounded-lg'}
                  src="https://media.cdn.ishopastro.com/upload/images/Shunwei_Capital.png_2023-06-28-05-53-28.png"
                  alt="logo"
                />
              </div>
            </div>
            <div className="flex items-end flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex items-end flex-1 relative h-[120px] p-[20px]"></div>
            <div className="flex items-end flex-1 relative h-[120px] p-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
