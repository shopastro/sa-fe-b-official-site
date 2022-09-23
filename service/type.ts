export type SeoResult = {
  data?: {
    checkGroupMap: {
      [key: string]: Array<{
        category: string
        explanation: string
        groupName: string
        groupType: string
        passed: boolean
        rules: Array<{ [key: string]: string }>
        score: number
        success: string
        weight: number
      }>
    }
    domain: string
    itemCnt: number
    score: number
    title: string
    time: string
    toOptimizeItemCnt: number
    url: string
  }
  success?: boolean
}
