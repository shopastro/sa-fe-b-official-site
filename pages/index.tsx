import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Banner from '../components/v5/Home/Banner'
import Cards from '../components/v5/Home/Cards'
import Partners from '../components/v5/Home/Partners'
import Plugins from '../components/v5/Home/Plugins'
import Solution from '../components/v5/Home/Solution'
import Menu from '../components/v5/Menu'

const Home: NextPage = () => {
  const [fixedButton, setFixedButton] = useState(false)
  const handleScroll = (e: any) => {
    if (!e.srcElement.documentElement) {
      return
    }
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement?.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body?.scrollTop : 0)
    if (scrollTop >= 560) {
      setFixedButton(true)
    } else {
      setFixedButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll, true)
    }
  }, [])
  return (
    <>
      <Header
        title="星盘跨境 - AI数智化品牌出海全域解决方案"
        description="星盘跨境是技术实力卓越的品牌出海全链路解决方案提供商。为跨境卖家从获客、建站、投放、下单、物流、支付提供一站式解决方案，专业的服务团队一对一量身提供极致运营服务，是跨境卖家出海路上最值得信赖的伙伴"
        keywords="星盘跨境,独立站,十五分钟快速建站, 丰富的免费插件, 自建站,出海,跨境,DTC,电商,SaaS,跨境物流,跨境支付, 白鲸广告管理, 白鲸用户运营, Google 投放, Facebook投放,精准归因, 跨境引流,ShopAstro,免费SEO检测、自主品牌打造、多渠道布局、商品定制POD、B2B外贸、无货源开店、一件代发供货、供应链测品及卖货"
      />
      {/* 背景 */}
      <div className="flex items-center justify-center absolute top-0 left-0 w-screen h-[1300px] md:h-[950px] bg-[#003892] overflow-hidden">
        <div className="relative w-screen h-full md:w-[1200px] md:m-auto">
          <div className="hidden md:block absolute w-[220px] top-[75px] left-[-15px] md:top-[270px] md:left-[624px] md:w-[353px]">
            <Image
              width={353}
              height={554}
              src="https://media.cdn.ishopastro.com/upload/images/20221202-103722.png_2022-12-02-06-30-12.png"
              alt="bg1"
            />
          </div>
          <div className="hidden md:block absolute w-[220px] top-[12px] right-[-85px] md:top-[145px] md:left-[1135px] md:w-[353px]">
            <Image
              width={353}
              height={649}
              src="https://media.cdn.ishopastro.com/upload/images/20221202-103716.png_2022-12-02-06-30-12.png"
              alt="bg2"
            />
          </div>
        </div>
      </div>
      {/* 内容 */}
      <div className="relative pb-[70px] md:pb-0">
        <Menu theme="light" />
        <Banner />
        <Plugins />
        <Cards />
        <Solution />
        {/* <Partners /> */}
        <Footer />
      </div>
      {fixedButton && <FixedButton href={'/user/register'} />}
    </>
  )
}

export default Home
