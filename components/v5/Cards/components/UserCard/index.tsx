import Description from '../Description'
import FreeButton from '../FreeButton'
import SubTitle from '../SubTitle'
import Title from '../Title'

const Quick = () => {
  return (
    <div className="flex">
      <div></div>
      <div>
        <Title>快速建站</Title>
        <div>
          <SubTitle>快速建站: </SubTitle>
          <Description>灵活的编辑器和主流行业模板;</Description>
          <Description>一键导入Shopify、Amazon等主流平台的商品, 提升运营人效;</Description>
        </div>
        <div>
          <SubTitle>丰富的原生插件: </SubTitle>
          <Description>
            顶级的研发团队贴近客户的实操场景，自研多款内置的免费插件，覆盖选品、店铺管理、营销推广、订单履约、客户服务等全方面为您的生意提供增长助力;
          </Description>
        </div>
        <div>
          <SubTitle>安全稳定: </SubTitle>
          <Description>
            服务器多云多区域部署, 系统全链路追踪监控与告警, SLA/SLO/SLI服务体系全方位保障业务的稳定运营;
            强技术护航商家账号和数据资产的安全私有性和长期有效性, 并通过成熟通用的解决方案让您的店铺符合GDPR合规;
          </Description>
        </div>
        <div>
          <SubTitle>赋能B2B: </SubTitle>
          <Description>
            自定义询盘表单、询盘智能提醒和便捷回复、分段小额批发、询盘和客户的数据看版等多维度产品能力,
            全方位触达外贸客户需求;
          </Description>
        </div>
        <FreeButton />
      </div>
    </div>
  )
}

export default Quick
