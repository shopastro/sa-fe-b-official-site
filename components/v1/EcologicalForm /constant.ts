export const ultimate = [
  '资质准备',
  '域名注册',
  '商品、推广素材指导',
  '广告开户 ',
  '独立站完整基础设施',
  '无限员工账号 ',
  '完整的安全保障风控体系 ',
  '行业化精品主题模版',
  '多样促销玩法',
  '与市场匹配最优的支付渠道',
  '应用市场提供丰富生态服务',
  '极致的提升转化与客单工具',
  '7*12小时基础建站服务',
  '专业运营团队服务',
  '全域营销（广告&社媒&EDM&消息）',
  '全生命周期自动化CRM运营 ',
]

export const enterprise = [
  '稳健专业的PaaS能力',
  '独有的BaaS商业产品',
  '完整的产品、技术咨询服务 ',
  '全方位的市场和竞品分析 ',
  '精细化的社媒运营攻略 ',
  '更强大的数据分析支持 ',
  '更精准的广告投放计划 ',
  '多渠道的全年营销计划',
]

type List = {
  maxLength?: number
  name: string
  placeholder: string
  require?: boolean
  label: string
  type?: 'text' | 'textarea' | 'textarea' | 'select'
}

export const list: List[] = [
  {
    maxLength: 64,
    name: 'username',
    placeholder: '请输入姓名（必填）',
    require: true,
    label: '申请人姓名',
  },

  {
    maxLength: 16,
    name: 'phoneNum',
    placeholder: '请输入手机号码（必填）',
    require: true,
    label: '联系手机',
  },
  {
    maxLength: 16,
    name: 'email',
    placeholder: '请输入手机号码（必填）',
    label: '联系邮箱',
  },
  {
    maxLength: 64,
    name: 'company',
    placeholder: '请输入公司名称（选填）',
    label: '公司名称',
  },
  {
    maxLength: 64,
    name: 'message',
    require: true,
    placeholder: '请输入生态资源（必填）',
    type: 'textarea',
    label: '',
  },
]
