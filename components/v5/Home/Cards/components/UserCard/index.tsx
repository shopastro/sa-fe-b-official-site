import Image from 'next/image'

import FreeButton from '../../../../FreeButton'
import Description from '../Description'
import SubTitle from '../SubTitle'
import Title from '../Title'

const UserCard = () => {
  return (
    <div className="flex flex-col items-center mb-[28px] md:flex-row md:w-[1440px] md:mb-[40px]">
      <div className="flex flex-col flex-1 order-2 px-[20px] md:px-0">
        <div className="md:pl-[120px]">
          <Title>白鲸用户运营</Title>
          <div className="mb-[20px]">
            <SubTitle>会员管理</SubTitle>
            <Description>
              无上限会员记录数、大数据系统自动打标、支持自定义会员圈选并进行私域触达、详细的站内用户轨迹数据,
              并与广告平台进行打通, 实现精准的用户行为分析
            </Description>
          </div>
          <div className="mb-[20px]">
            <SubTitle>EDM邮件营销</SubTitle>
            <Description>
              高送达率的邮件发送系统支持、自动化弃单召回、支持邮件模版和装修, 与会员管理及促销工具打通, 实现定向用户运营
            </Description>
          </div>
          <div className="mb-[20px] md:mb-[40px]">
            <SubTitle>短信营销</SubTitle>
            <Description>
              支持采用短信进行弃单召回、短信营销模版, 并与会员管理及促销工具打通, 实现定向用户运营
            </Description>
          </div>
          <div className="flex">
            <FreeButton href="/product" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 order-1 md:order-3 mb-[20px] md:mb-0">
        <Image
          width={1570}
          height={1200}
          quality={100}
          src="https://media.cdn.ishopastro.com/upload/images/4.png_2022-12-22-08-13-26.png"
          alt="快速建站"
        />
      </div>
    </div>
  )
}

export default UserCard
