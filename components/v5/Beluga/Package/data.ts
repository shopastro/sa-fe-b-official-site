export const belugaMonthData: BelugaDataItem[][] = [
  [
    { title: '行业洞察数据' },
    { info: ['站点收藏数30个, 监控数5个'] },
    { info: ['站点收藏数100个, 监控数20个'] },
    { info: ['站点收藏数500个, 监控数100个'] }
  ],
  [
    { title: '广告BI工具' },
    {
      info: [
        'Google Feed数1000',
        'FB Catalog数1000',
        'TikTok Catalog数1000',
        '大数据广告归因',
        '精细化广告数据分析',
        '广告在线开户'
      ]
    },
    {
      info: [
        'Google Feed数3000',
        'FB Catalog数3000',
        'TikTok Catalog数3000',
        '大数据广告归因',
        '精细化广告数据分析',
        '广告在线开户'
      ]
    },
    {
      info: [
        'Google Feed数30000',
        'FB Catalog数30000',
        'TikTok Catalog数30000',
        '大数据广告归因',
        '精细化广告数据分析',
        '广告在线开户'
      ]
    }
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
    { info: ['站点收藏数30个, 监控数5个'] },
    { info: ['站点收藏数100个, 监控数20个'] },
    { info: ['站点收藏数500个, 监控数100个'] }
  ],
  [
    { title: '广告BI工具' },
    {
      info: [
        'Google Feed数1000',
        'FB Catalog数1000',
        'TikTok Catalog数1000',
        '大数据广告归因',
        '精细化广告数据分析',
        '广告在线开户'
      ]
    },
    {
      info: [
        'Google Feed数3000',
        'FB Catalog数3000',
        'TikTok Catalog数3000',
        '大数据广告归因',
        '精细化广告数据分析',
        '广告在线开户'
      ]
    },
    {
      info: [
        'Google Feed数30000',
        'FB Catalog数30000',
        'TikTok Catalog数30000',
        '大数据广告归因',
        '精细化广告数据分析',
        '广告在线开户'
      ]
    }
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
    yearPrice: 3800
  },
  {
    type: 2,
    title: '专业版',
    monthPrice: 680,
    yearPrice: 6800
  },
  {
    type: 3,
    title: '旗舰版',
    monthPrice: 1980,
    yearPrice: 19800
  }
]

export interface BelugaDataItem {
  title?: string
  info?: string[]
}
