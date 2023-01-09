import type { NextPage } from 'next'
import { useContainer } from 'unstated-next'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/Solutions/Banner'
// import Customer from '../components/v5/Solutions/Customer'
import Scheme from '../components/v5/Solutions/Scheme'
import detectionStore from '../store/detectionStore'

// 解决方案
const Solutions: NextPage = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <>
      <Header
        title="shopastro 星盘跨境，全方位立体涵盖运营、自主品牌打造、多渠道布局、商品定制、B2B外贸、无货源开店、供应链测品及卖货以及一件代发供货多种解决方案！"
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案; 面向商家的不同运营诉求, 星盘提供多种产品和行业解决方案; shopastro星盘跨境"
        keywords="解决方案; 自主品牌打造, 海量的竞争情报数据, 内置免费有效插件; 多渠道布局, 一键同步迁移, 捆绑销售, 满减满赠, 会员积分; 商品定制POD, 
        客户个性化需求, 商品的特殊化定制; B2B 外贸, 私域获客, 询盘转化, 履约交付, 健康经营; 无货源开店, 官方DS插件, 一键上架, 自动履约; 供应链测品及卖货, 便捷开通, 归因助手, 盯盘工具; 一件代发供货, 自主上架商品, 打通1688商品池, Shopify店主的跨境交易支付; 免费试用;"
      />
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[150px] bg-[#F5F6FA] overflow-hidden" />
      {/* 内容 */}
      <div className="relative pb-[70px] md:pb-0">
        <Menu />
        <Banner />
        <Scheme />
        {/* <Customer /> */}
        <Footer />
      </div>
      <FixedButton
        text="立即咨询"
        onClick={() => {
          setShowMoadl(true)
          setButtonType('stickyBottom')
        }}
      />
    </>
  )
}

export default Solutions
