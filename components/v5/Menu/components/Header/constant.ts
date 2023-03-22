export type Pathname = {
  about?: boolean
  beluga?: boolean
}

export const routeMapObj: { [key: string]: { name: string; link: string }[] } = {
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
    },
    {
      name: '文案大师',
      link: '/copymaster'
    }
  ]
}

//一级路由高亮 对应的二级路由
export const routeListMap: { [key: string]: string[] } = {
  about: ['/partners', '/about'],
  beluga: ['/industry', '/beluga', '/copymaster']
}
