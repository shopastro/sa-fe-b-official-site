import type { NextPage } from 'next'
import Image from 'next/image'

import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Banner from '../components/v5/Home/Banner'
import Cards from '../components/v5/Home/Cards'
import Partners from '../components/v5/Home/Partners'
import Plugins from '../components/v5/Home/Plugins'
import Solution from '../components/v5/Home/Solution'
import Menu from '../components/v5/Menu'

const Home: NextPage = () => {
  return (
    <>
      <Header
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案, 为跨境卖家从获客、建站、投放、下单、物流、支付提供一站式解决方案, 并有专业的服务团队及服务资源, 一对一量身提供专业运营服务, 是跨境卖家出海路上最值得信赖的伙伴！--shopastro星盘跨境"
        keywords="星盘跨境,独立站,十五分钟快速建站, 丰富的免费插件, 自建站,出海,跨境,DTC,电商,Saas,跨境物流,跨境支付, 白鲸广告管理, 白鲸用户运营, Google 投放, Facebook投放,精准归因, 跨境引流,ShopAstro,免费SEO检测、自主品牌打造、多渠道布局、商品定制POD、B2B外贸、无货源开店、一件代发供货、供应链测品及卖货"
      />
      {/* 背景 */}
      <div className="flex items-center justify-center absolute top-0 left-0 w-screen h-[1100px] md:h-[950px] bg-[#003892] overflow-hidden">
        <div className="relative w-screen h-full md:w-[1200px] md:m-auto">
          <div className="absolute w-[220px] top-[75px] left-[-15px] md:top-[270px] md:left-[624px] md:w-[353px]">
            <Image
              width={353}
              height={554}
              quality={100}
              src="https://media.cdn.ishopastro.com/upload/images/20221202-103722.png_2022-12-02-06-30-12.png"
              alt="bg1"
            />
          </div>
          <div className="absolute w-[220px] top-[12px] right-[-85px] md:top-[145px] md:right-[-48px] md:w-[353px]">
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
      {/* 内容 */}
      <div className="relative">
        <Menu theme="light" />
        <Banner />
        <Plugins />
        <Cards />
        <Solution />
        <Partners />
        <Footer />
      </div>
    </>
  )
}

export default Home
