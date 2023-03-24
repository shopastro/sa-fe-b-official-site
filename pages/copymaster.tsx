import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Header from '../components/v2/Header'
import Banner from '../components/v5/Copymaster/Banner'
import Introduce from '../components/v5/Copymaster/Introduce'
import UseProduct from '../components/v5/Copymaster/UseProduct'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
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
        title="跨境电商AI写手 | 海外社媒推广文案AI工具 | ai智能文案自动生成 | 星盘跨境AI文案大师"
        description="星盘跨境AI文案大师，汇集智能文案写手、英文文案AI等强大功能，助力跨境电商解决亚马逊标题、亚马逊listing优化、谷歌社媒推广、海外独立站商品详情等多方面问题。选择星盘文案大师，让文案制胜全球市场！"
        keywords="跨境电商文案ai, ai智能文案自动生成, 海外社媒推广文案ai, 谷歌广告文案ai, 独立站优化文案ai, 星盘跨境AI文案生成, 跨境电商智能文案工具, 星盘AI英文文案优化, 跨境电商AI营销助手, 星盘文案大师亚马逊优化, 海外社媒推广AI工具, 星盘AI谷歌广告文案, 跨境独立站AI文案解决方案"
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
