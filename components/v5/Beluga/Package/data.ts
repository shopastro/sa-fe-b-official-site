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
  [{ title: '联盟营销' }, { info: ['月分销订单数200'] }, { info: ['月分销订单数600'] }, { info: ['月分销订单数6000'] }],
  [
    { title: 'CRM' },
    {
      info: ['月邮件发送量1000条', '月短信发送量200条', '人群管理', 'Chat', 'MA']
    },
    { info: ['月邮件发送量3000条', '月短信发送量500条', '人群管理', 'Chat', 'MA'] },
    { info: ['月邮件发送量30000条', '月短信发送量5000条', '人群管理', 'Chat', 'MA'] }
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
  [{ title: '联盟营销' }, { info: ['月分销订单数200'] }, { info: ['月分销订单数600'] }, { info: ['月分销订单数6000'] }],
  [
    { title: 'CRM' },
    {
      info: ['月邮件发送量1000条', '月短信发送量200条', '人群管理', 'Chat', 'MA']
    },
    { info: ['月邮件发送量3000条', '月短信发送量500条', '人群管理', 'Chat', 'MA'] },
    { info: ['月邮件发送量30000条', '月短信发送量5000条', '人群管理', 'Chat', 'MA'] }
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
