import React from 'react'
import styles from './index.module.scss'
import Carousel from '../base/Carousel'
import Banner from './BannerBox'

type IProps = {}

const Title: React.FC<IProps> = (props) => {
  const pageList = [
    <Banner
      key="1"
      title="出海首选  星盘跨境"
      mainTitle="货品您搞定 出海我搞定"
      desc={['「一站式」跨境电商服务平台，', ' 跨境卖家的出海首选！']}
    />,
    <Banner
      key="2"
      title="优选模版"
      mainTitle={
        <>
          覆盖 <span>100+</span> 热门行业
        </>
      }
      desc={['海量精选模版，简洁、高端、大气，', ' 一键自由拖拽，即刻开启出海之旅']}
      type="template"
    />,
  ]
  return (
    <div className={styles.bannerContainer}>
      <Carousel pageList={pageList} />
    </div>
  )
}

export default Title
