import React, { useState } from 'react'
import styles from './index.module.scss'
import Item from './Item'
import Bar from './Bar'
type IProps = {}

const ServiceItem: React.FC<IProps> = (props) => {
  return (
    <div className={styles.ServiceItem} id="ServiceItem">
      <div className={styles.title}>服务项目</div>
      <div className={styles.desc}>shopastro提供极简更优的产品服务全案</div>

      <Bar type="saas" />
      <Item type="certification" text="建站 | 资质准备" />
      <Item type="site" text="建站 | 个性化建站" />
      <Item type="product" text="建站 | 商品管理" />
      <Item type="trading" text="建站 | 交易达成" />
      <Item type="country" text="建站 | 多国家市场" />
      <Item type="analysis" text="建站 | 数据分析" />
      <Item type="save" text="建站 | 基础、合规、安全" />
      <Item type="service" text="建站 | 生态服务" />

      <Bar type="baas" />
      <Item type="brand" text="白鲸 | 品牌策划" category="baas" />
      <Item type="launch" text="白鲸 | 投放" category="baas" />
      <Item type="useOperate" text="白鲸 | 用户运营" category="baas" />
      <Item type="socialOperate" text="白鲸 | 社媒运营" category="baas" />
      <Item type="marketing" text="白鲸 | 红人营销" category="baas" />
      <Item type="seo" text="白鲸 | SEO" category="baas" />

      {/* <Bar type="baas" />
      <Item type="additional" text='附加服务' /> */}
    </div>
  )
}

export default ServiceItem
