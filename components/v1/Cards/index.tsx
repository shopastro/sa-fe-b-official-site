import React from 'react'
import CardLR from '../base/CardLR'

type IProps = {}

const Cards: React.FC<IProps> = (props) => {
  return (
    <>
      <CardLR
        text="方便快捷"
        mainTitle={['无门槛建站']}
        desc={['无需再为多到花眼的模版选择而烦恼', '点点就好！']}
        type="site"
        layout="right"
      />
      <CardLR
        text="转化率提升200%"
        mainTitle={['多样化精准投放']}
        desc={['贴合本地买家的多渠道广告+社交投放，', '精准转化、效率翻倍！']}
        type="launch"
      />

      <CardLR
        text="贴心、细致、周到"
        mainTitle={['省钱省心的', '物流支付方案']}
        desc={['多支付渠道服务，安全快捷！', '差异化的物流解决方案，保障买家所需!']}
        type="case"
        layout="right"
      />

      <CardLR
        text="全方位智能优化"
        mainTitle={['事半功倍的管理工具', '贴心专业的专人服务']}
        desc={['多店铺、CRM、全渠道投放、智能决策等，好工具要好用；', '专业的服务和运营团队，将陪伴守护您的跨境之路！']}
        type="service"
      />

      <CardLR
        text="全链路运营"
        mainTitle={['一站式出海', '更简单、更高效']}
        desc={['只需一次选择   无需再选其他']}
        type="abroad"
        layout="right"
      />
    </>
  )
}

export default Cards
