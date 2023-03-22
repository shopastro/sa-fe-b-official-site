import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/copymaster/Banner'
import Introduce from '../components/v5/copymaster/Introduce'
import UseProduct from '../components/v5/copymaster/UseProduct'
import useIsMobile from '../hooks/useIsMobile'

const CopyMaster: NextPage = () => {
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
        title="白鲸行业情报，品牌独立站的全方位竞对分析工具，帮助商家有效提升营销效果 - 星盘跨境"
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案; asbeluga, 一站式的面向品牌站独立站的营销SaaS, shopastro星盘跨境"
        keywords="行业情报, 300+万条站点多维度信息；白鲸广告管理, 广告精准数据上报&归因；个性化会员管理, 高效邮件和短信触达, 免费试用, 白鲸套餐"
      />
      {/* 背景 */}
      <div
        className={`flex absolute top-0 left-0 w-screen h-[48px] bg-[${
          isMobile ? '#fff' : '#FBFDFF'
        }] overflow-hidden md:h-[120px]`}
      />
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

export default CopyMaster
