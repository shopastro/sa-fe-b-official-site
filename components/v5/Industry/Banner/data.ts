const websitePc = require('../../img/industry/item_website_pc.png')
const website = require('../../img/industry/item_website.png')
const originalityPc = require('../../img/industry/item_originality_pc.png')
const originality = require('../../img/industry/item_originality.png')
const intelligentPc = require('../../img/industry/item_intelligent_pc.png')
const intelligent = require('../../img/industry/item_intelligent.png')
const seoPc = require('../../img/industry/item_seo_pc.png')
const seo = require('../../img/industry/item_seo.png')

export const bannerData = [
  {
    type: 'website',
    title: '站点情报',
    info: [
      '覆盖全球100+国家，300万+独立站',
      '通过类目、关键词等多维检索，精准查找竞对站点',
      '全面的资料，流量、关键词、消费者画像、广告、社媒、商品等一览无余',
      '实时监控，最新动态第一时间跟进'
    ],
    image: website,
    imagePc: websitePc,
    name: 'beluga_industry',
    height: 180,
    heightPc: 294,
    widthPc: 689
  },
  {
    type: 'originality',
    title: '创意素材',
    image: originality,
    imagePc: originalityPc,
    info: [
      '百万广告主数据，AI分类识别行业广告',
      '多维检索，锁定优质广告素材，发掘爆款',
      ' 以图搜图，快速找到适合商品的广告方案',
      '关注广告主，投放趋势尽在掌握'
    ],
    height: 223,
    heightPc: 323,
    widthPc: 709
  },
  {
    type: 'intelligent',
    title: '智能选品',
    image: intelligent,
    imagePc: intelligentPc,
    info: ['六千万+商品数据， 竞对商品尽收眼底', '精准获取商品最新热度与需求趋势', '竞对商品尽收眼底，新品快速跟进'],
    height: 212,
    heightPc: 345,
    widthPc: 718
  },
  {
    type: 'seo',
    title: 'SEO优解',
    image: seo,
    imagePc: seoPc,
    info: ['了解竞对关键词，有策略的进行SEO布局', '站点SEO智能检测，随时了解优化进展', '问题和解法，一份报告全知晓'],
    height: 212,
    heightPc: 345,
    widthPc: 758
  }
]
