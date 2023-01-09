export const FeaturesData: FeaturesData[] = [
  {
    icon: 'https://media.cdn.ishopastro.com/svg/shopastrohome/49c501746436a6008410e9f37fe86029.svg',
    title: '智能询盘',
    description: [
      '自定义表单、多产品询盘，按需配置',
      '全方位触达、自动化精准询盘归因',
      '询盘分配与过滤，多业务员跟进更高效'
    ]
  },
  {
    icon: 'https://media.cdn.ishopastro.com/svg/shopastrohome/4ef14401cb402e2032e9836388f88a15.svg',
    title: '意向洞察',
    description: ['访客轨迹自动追踪、信息智能补全', '洞察访客采购意向，全自动化营销']
  },
  {
    icon: 'https://media.cdn.ishopastro.com/svg/shopastrohome/779a26477200c06a75cf851f5472558a.svg',
    title: 'B 类 CRM',
    description: ['支持企业信息、企业采购价', '企业客户全生命周期跟踪']
  },
  {
    icon: 'https://media.cdn.ishopastro.com/svg/shopastrohome/c0f77ebbc52bd87bb219b9751e9f1d14.svg',
    title: '沟通',
    description: ['在线chat实时沟通, 及时跟进意向', 'chat与询盘互通, 高效处理询盘']
  },
  {
    icon: 'https://media.cdn.ishopastro.com/svg/shopastrohome/1778d385c02b463c4add5750efc2ace0.svg',
    title: '一件代发供货',
    description: [
      '为星盘客户链接海量shopify店主, 支持shopify店主一件代发',
      '打通1688商品池, 实现一键翻译/一键上架/一键下单',
      '支持星盘客户与Shopify店主的跨境交易支付, 费率具备行业优势'
    ]
  },
  {
    icon: 'https://media.cdn.ishopastro.com/svg/shopastrohome/d4ca5aa822313543b58d9e8532aba6d1.svg',
    title: '小额批发',
    description: ['支持配置最小起订量、阶梯价', '支持跨商品、跨SKU混批', '支持POD 定制批发']
  }
]

export interface FeaturesData {
  icon: string
  title: string
  description: string[]
}
