import Image from 'next/image'

import Description from '../Description'
import FreeButton from '../FreeButton'
import SubTitle from '../SubTitle'
import Title from '../Title'

const Quick = () => {
  return (
    <div className="flex flex-col mb-[28px] md:flex-row md:w-[1440px] md:mb-[120px]">
      <div className="flex flex-col flex-1 order-2 px-[20px] md:px-0">
        <div className="md:pl-[120px]">
          <Title>白鲸广告管理</Title>
          <div className="mb-[20px]">
            <SubTitle>白鲸广告管理: </SubTitle>
            <Description>广告与站内数据双向互通并整合，提供全方位的广告大数据分析</Description>
          </div>
          <div className="mb-[20px]">
            <SubTitle>精准归因</SubTitle>
            <Description>基于整合数据, 通过API实现精准广告归因, 提升广告ROI;</Description>
            <Description>
              Facebook盯盘助手, 实现30分钟准实时站外站内链路节点数据, 实现全行业最快速的广告优化
            </Description>
          </div>
          <div className="mb-[20px] md:mb-[40px]">
            <SubTitle>GMC及Catalog</SubTitle>
            <Description>
              基于Micro Data等技术实现全行业领先的GMC及Facebook Catalog同步成功率;
              通过系统化能力实现超大规模的SKU数量管理和广告平台同步
            </Description>
          </div>
          <FreeButton href="/product" />
        </div>
      </div>
      <div className="flex flex-1 order-1 md:order-3 mb-[20px] md:mb-0">
        <Image
          width={1570}
          height={1200}
          quality={100}
          src="https://media.cdn.ishopastro.com/upload/images/20221206-103821.png_2022-12-06-02-45-25.png"
          alt="白鲸广告管理"
        />
      </div>
    </div>
  )
}

export default Quick
