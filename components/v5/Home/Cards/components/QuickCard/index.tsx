import Image from 'next/image'

import FreeButton from '../../../../FreeButton'
import Description from '../Description'
import SubTitle from '../SubTitle'
import Title from '../Title'

const Quick = () => {
  return (
    <div className="flex flex-col mb-[28px] md:flex-row md:w-[1440px] md:mb-[120px]">
      <div className="flex flex-1 mb-[20px] md:mb-0">
        <Image
          width={1570}
          height={1200}
          quality={100}
          src="https://media.cdn.ishopastro.com/upload/images/20221206-103824.png_2022-12-06-02-45-25.png"
          alt="快速建站"
        />
      </div>
      <div className="flex flex-col flex-1 px-[20px] md:px-0">
        <div className="md:pr-[120px]">
          <Title>快速建站</Title>
          <div className="mb-[20px]">
            <SubTitle>快速建站: </SubTitle>
            <Description>灵活的编辑器和主流行业模板;</Description>
            <Description>一键导入Shopify、Amazon等主流平台的商品, 提升运营人效;</Description>
          </div>
          <div className="mb-[20px]">
            <SubTitle>丰富的原生插件: </SubTitle>
            <Description>
              顶级的研发团队贴近客户的实操场景，自研多款内置的免费插件，覆盖选品、店铺管理、营销推广、订单履约、客户服务等全方面为您的生意提供增长助力;
            </Description>
          </div>
          <div className="mb-[20px]">
            <SubTitle>安全稳定: </SubTitle>
            <Description>
              服务器多云多区域部署, 系统全链路追踪监控与告警, SLA/SLO/SLI服务体系全方位保障业务的稳定运营;
              强技术护航商家账号和数据资产的安全私有性和长期有效性, 并通过成熟通用的解决方案让您的店铺符合GDPR合规;
            </Description>
          </div>
          <div className="mb-[20px] md:mb-[40px]">
            <SubTitle>赋能B2B: </SubTitle>
            <Description>
              自定义询盘表单、询盘智能提醒和便捷回复、分段小额批发、询盘和客户的数据看版等多维度产品能力,
              全方位触达外贸客户需求;
            </Description>
          </div>
          <FreeButton href="/product" />
        </div>
      </div>
    </div>
  )
}

export default Quick
