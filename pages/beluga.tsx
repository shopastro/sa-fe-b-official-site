import type { NextPage } from 'next'
import { useContainer } from 'unstated-next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/Beluga/Banner'
import Package from '../components/v5/Beluga/Package'
import Question from '../components/v5/Beluga/Question'
import Sales from '../components/v5/Beluga/Sales'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import detectionStore from '../store/detectionStore'

const Beluga: NextPage = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <>
      <Header
        title="shopastro 星盘跨境，白鲸服务品牌独立站的一站式营销产品体系！"
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案; asbeluga, 一站式的面向品牌站独立站的营销SaaS, shopastro星盘跨境"
        keywords="行业情报, 300+万条站点多维度信息；白鲸广告管理, 广告精准数据上报&归因；个性化会员管理, 高效邮件和短信触达, 免费试用, 白鲸套餐"
      />
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[150px] bg-[#F5F6FA] overflow-hidden" />
      {/* 内容 */}
      <div className="pb-[70px] md:pb-0">
        <Menu />
        <Banner />
        <Sales />
        <Package />
        <Question />
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

export default Beluga
