import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Banner from '../components/v5/Industry/Banner'
import Introduce from '../components/v5/Industry/Introduce'
import UseProduct from '../components/v5/Industry/UseProduct'
import Menu from '../components/v5/Menu'
import useIsMobile from '../hooks/useIsMobile'

const Industry: NextPage = () => {
  const isMobile = useIsMobile()
  const [fixedButton, setFixedButton] = useState(false)
  const handleScroll = (e: any) => {
    if (!e.srcElement.documentElement) {
      return
    }

    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement?.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body?.scrollTop : 0)

    if (scrollTop >= 300) {
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
        title="星盘白鲸行业情报大师 - 海外营销选品、竞品分析与谷歌SEO一站式解决方案"
        description="白鲸行业情报大师是您的海外营销利器，提供全面的选品工具、海外竞品分析、谷歌SEO分析，助力您快速发掘市场机会。凭借丰富的海外营销大数据，为您提供精准的市场洞察与策略建议。同时，我们提供海量海外营销素材，让您的广告创意更具吸引力，助您轻松征服全球市场！立即加入白鲸行业情报大师，提升您的海外营销实力。"
        keywords="海外创意素材库, 跨境电商广告识别, 行业海外广告分析, 优质海外广告素材, 跨境电商爆款挖掘, 以图搜图海外广告, 跨境品牌投放趋势, 海外品牌智能选品, 跨境电商商品分析, 海外市场热度趋势, 跨境竞品追踪, 跨境新品跟进策略, 海外品牌SEO布局, 跨境电商关键词分析, 站点海外SEO检测, 跨境电商SEO报告, 海外SEO解决方案"
      />
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[48px] bg-[#F5F6FA] overflow-hidden md:h-[120px]" />
      {/* 内容 */}
      <div className="pb-[70px] md:pb-0">
        <Menu />
        <Introduce isMobile={isMobile} />
        <Banner isMobile={isMobile} />
        <UseProduct isMobile={isMobile} />
        <Footer />
      </div>
      {fixedButton && <FixedButton text="免费试用" href="/user/register" />}
    </>
  )
}

export default Industry
