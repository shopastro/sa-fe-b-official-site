import type { NextPage } from 'next'
import { useContainer } from 'unstated-next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/B2B/Banner'
import ProductFeatures from '../components/v5/B2B/ProductFeatures'
import Solution from '../components/v5/B2B/Solution'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import detectionStore from '../store/detectionStore'

const B2B: NextPage = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <>
      <Header
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案；星盘 B2B, 数智化助力外贸企业高效出海；提供品牌认知与建设、全链路数字化询盘跟进和管理的产品和服务, 支持各类批发场景, 通过全路径洞察并挖掘访客意向与商机, 帮助外贸B2B商家在线上高效开展业务、获取高质量询盘--shopastro星盘跨境"
        keywords="B2B数智化, 智能询盘, 意向洞察, B 类 CRM, chat与询盘互通, 一件代发供货, 小额批发, 免费试用, 企业客户全生命周期跟踪, 打通1688商品池,支持星盘客户与Shopify店主的跨境交易"
      />
      <div className="relative">
        <Menu />
        <Banner />
        <ProductFeatures />
        <Solution />
        <Footer />
      </div>
      <FixedButton
        onClick={() => {
          setShowMoadl(true)
          setButtonType('stickyBottom')
        }}
      />
    </>
  )
}

export default B2B
