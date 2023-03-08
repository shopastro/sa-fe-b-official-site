export type Pathname = {
  about?: boolean
  beluga?: boolean
}

export const routeList: { [key: string]: { name: string; link: string }[] } = {
  about: [
    {
      name: '关于我们',
      link: '/about'
    },
    {
      name: '渠道合作&生态联盟',
      link: '/partners'
    }
  ],
  beluga: [
    {
      name: '行业情报',
      link: '/industry'
    }
  ]
}
