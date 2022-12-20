export const belugaMonthData: BelugaDataItem[][] = [
  [
    { title: '行业洞察数据' },
    { info: ['可监控同行站点数50个'] },
    { info: ['可监控同行站点数150个'] },
    { info: ['可监控同行站点数500个'] }
  ],
  [
    { title: '广告BI工具' },
    { info: ['大数据广告归因，精细化广告数据分析'] },
    { info: ['大数据广告归因，精细化广告数据分析'] },
    { info: ['大数据广告归因，精细化广告数据分析'] }
  ],
  [
    { title: '一站式聊天' },
    { info: ['Web Chat', 'Whats App', 'Facebook Messenger'] },
    { info: ['Web Chat', 'Whats App', 'Facebook Messenger'] },
    { info: ['Web Chat', 'Whats App', 'Facebook Messenger'] }
  ],
  [
    { title: '一站式社媒管理' },
    {
      info: ['Post管理', '粉丝互动', 'VOC检测']
    },
    { info: ['Post管理', '粉丝互动', 'VOC检测'] },
    { info: ['Post管理', '粉丝互动', 'VOC检测'] }
  ],
  [
    { title: '联系人管理及EDM' },
    { info: ['月邮件发送量1000条', '联系人管理'] },
    { info: ['月邮件发送量1000条', '联系人管理'] },
    { info: ['月邮件发送量1000条', '联系人管理'] }
  ]
]

export const belugaYearData: BelugaDataItem[][] = [
  [
    { title: '行业洞察数据' },
    { info: ['可监控同行站点数50个'] },
    { info: ['可监控同行站点数150个'] },
    { info: ['可监控同行站点数500个'] }
  ],
  [
    { title: '广告BI工具' },
    { info: ['大数据广告归因，精细化广告数据分析'] },
    { info: ['大数据广告归因，精细化广告数据分析'] },
    { info: ['大数据广告归因，精细化广告数据分析'] }
  ],
  [
    { title: '一站式聊天' },
    { info: ['Web Chat', 'Whats App', 'Facebook Messenger'] },
    { info: ['Web Chat', 'Whats App', 'Facebook Messenger'] },
    { info: ['Web Chat', 'Whats App', 'Facebook Messenger'] }
  ],
  [
    { title: '一站式社媒管理' },
    {
      info: ['Post管理', '粉丝互动', 'VOC检测']
    },
    { info: ['Post管理', '粉丝互动', 'VOC检测'] },
    { info: ['Post管理', '粉丝互动', 'VOC检测'] }
  ],
  [
    { title: '联系人管理及EDM' },
    { info: ['月邮件发送量1000条', '联系人管理'] },
    { info: ['月邮件发送量1000条', '联系人管理'] },
    { info: ['月邮件发送量1000条', '联系人管理'] }
  ]
]

export const belugaTypeInfo = [
  {
    type: 1,
    title: '基础版',
    monthPrice: 380,
    yearPrice: 380
  },
  {
    type: 2,
    title: '专业版',
    monthPrice: 680,
    yearPrice: 680
  },
  {
    type: 3,
    title: '旗舰版',
    monthPrice: 1880,
    yearPrice: 1880
  }
]

export interface BelugaDataItem {
  title?: string
  info?: string[]
}
