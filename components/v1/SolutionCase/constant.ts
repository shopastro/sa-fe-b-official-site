export type Data = {
  type: 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase'
  title: string
  textList: TextList[]
}

type TextList = {
  title: string
  list: string[]
}

const brand: Data = {
  type: 'brand',
  title: '品牌策划',
  textList: [
    {
      title: '品牌策划',
      list: [
        '调研行业全球市场及行业趋势',
        '明确目标受众及品牌定位',
        '梳理产品线结构，选择优势产品并匹配不同的营销渠道打法',
        '结合目标受众购买力/竞品定价，对营销/物流等各项成本核算，制定定价策略',
      ],
    },
  ],
}

const site: Data = {
  type: 'site',
  title: '个性化建站',
  textList: [
    {
      title: '个性化建站',
      list: [
        '专业极致的全流程建站服务',
        '网站demo设计，导航/首页/footer等各项模块优化',
        '网站整体风格和内容设计优化',
        '商品分类设置和信息优化',
        '根据目标国家营销日历，制定广告营销计划及站内营销活动',
      ],
    },
  ],
}

const seo: Data = {
  type: 'seo',
  title: 'SEO 深度运营',

  textList: [
    {
      title: 'SEO 深度运营',
      list: [
        '页面SEO结构/内容优化',
        '拓展机会关键词/优化核心关键词排名',
        '分阶段实施不同层级反向链接',
        '提供排名及自然流量监测报告',
      ],
    },
  ],
}

const launches: Data = {
  type: 'launches',
  title: '多渠道营销投放',

  textList: [
    {
      title: '多渠道营销投放',
      list: [
        'Google/Facebook/TikTok/Bing/Twitter/Snapchat等广告渠道开户',
        '基于行业竞品推广监测及渠道特性，制定关键词/人群/素材等维度的广告投放策略',
        '制定Google/Facebook/Instagram/TikTok等推广渠道的广告结构',
        '一站式管理人群标签，沉淀人群数据资产',
        '再营销人群分层和圈选，跨渠道再营销广告搭建',
        '对广告数据持续分析，对素材/人群定位/转化节点进行优化',
      ],
    },
  ],
}

const operation: Data = {
  type: 'operation',
  title: '社媒和KOL运营',

  textList: [
    {
      title: '社媒和KOL运营',
      list: [
        '制定账号Profile/Story/图片/视频内容框架，提供日常内容设计与排期',
        '制定粉丝增长目标，挖掘潜力涨粉话题，提高社媒账号自然曝光率',
        '分析网红及其粉丝画像，结合转化指标匹配优质红人',
        '制定红人运营策略/衡量指标/权益/任务要求/红人效果数据追踪',
        ' 私域社群运营/社群生态培育',
      ],
    },
  ],
}

const email: Data = {
  type: 'email',
  title: '邮件营销',

  textList: [
    {
      title: '邮件营销',
      list: [
        '丰富的EDM模版',
        '全年邮件营销活动节奏设置',
        '弃单召回邮件设计',
        '根据用户不同定位及需求进行精准化邮件营销',
      ],
    },
  ],
}

const repurchase: Data = {
  type: 'repurchase',
  title: '用户/会员复购运营',

  textList: [
    {
      title: '用户/会员复购运营',
      list: [
        '设置邮件营销节奏和内容，并根据数据反馈进行优化调整',
        '设计弃单召回节奏和内容，并根据数据反馈进行优化调整',
        'WhatsApp/Messenger/Apple Business Chat等多渠道一站式运营策略',
        '构建会员体系，匹配会员权益并制定营销策略',
      ],
    },
  ],
}

export const list: Data[] = [brand, site, seo, launches, operation, email, repurchase]
