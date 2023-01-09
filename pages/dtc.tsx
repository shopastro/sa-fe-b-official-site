import type { NextPage } from 'next'
import Image from 'next/image'

import Header from '../components/v2/Header'
import Choose from '../components/v5/DTC/Choose'
import Package from '../components/v5/DTC/Package'
import Question from '../components/v5/DTC/Question'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import TryNow from '../components/v5/TryNow'

const DTC: NextPage = () => {
  return (
    <>
      <Header
        title="shopastro 星盘跨境，抢先体验免费7天试用星盘DTC建站！"
        description="shopastro, 星盘跨境, 品牌出海一站式数智化解决方案, 针对不同业务与不同量级的建站需求, 星盘为您精心准备了以下3种套餐, 最合适的才是最好的。助您跨境业务更轻松。所有版本均包含星盘白鲸相关服务！抢先体验, 开始免费试用! 直接免费7天试用体验星盘DTC建站--shopastro星盘跨境"
        keywords="DTC建站套餐, 基础版, 专业版, 旗舰版；免费试用, 基础版, 低成本体验建站；专业版, 绝佳的启动方式；旗舰版, 从功能到性能；白鲸-广告BI工具; 白鲸-行业洞察数据；白鲸-CRM系统; 白鲸-联盟营销；快捷, 本地化, 无限制, 高性价比；营销工具丰富, 精细"
      />
      {/* 背景 */}
      <div className="flex items-center justify-center absolute top-0 left-0 h-[1132px] overflow-hidden">
        <Image
          src="https://media.cdn.ishopastro.com/upload/images/20221215-195440.jpeg_2022-12-15-12-03-07.jpg"
          width={2878}
          height={2400}
          quality={100}
          alt="icon"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ background: 'linear-gradient(#FFF, #FFF 60%, rgba(0,0,0,0))' }}
        />
      </div>
      {/* 内容 */}
      <div className="relative pb-[70px] md:pb-0">
        <Menu />
        <Package />
        <Choose />
        <Question />
        <TryNow href="https://sys.admin.ishopastro.com/admin/user/signup?type=dtc" />
        <Footer />
      </div>
      <FixedButton href="https://sys.admin.ishopastro.com/admin/user/signup?type=dtc" />
    </>
  )
}

export default DTC
