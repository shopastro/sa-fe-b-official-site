export type PerformanceItem = {
  name?: string
  description?: string
  numericValue?: number
  numericUnit?: string
  score?: number
}

export type CheckGroupMap = {
  groupName?: string
  groupType?: string
  category?: string
  explanation?: string
  success?: string
  weight?: number
  score?: number
  passed?: boolean
  errorLevel?: string
  rules?: {
    name?: string
    rule?: string
    isChecked?: boolean
    solution?: string
    passed?: boolean
    errorLevel?: string
    deduction?: number
  }[]
}

export type DataSource = {
  shopId?: number
  score?: number
  pcPerformanceScore?: number
  mobilePerformanceScore?: number
  imageName?: string
  title?: string
  domain?: string
  url?: string
  itemCnt?: number
  toOptimizeItemCnt?: number
  checkDate?: string
  checkGroupMap?: Record<string, CheckGroupMap[]>
  pcPerformanceItems?: PerformanceItem[]
  mobilePerformanceItems?: PerformanceItem[]
  imageNoAltUrlList?: string[]
}

export type SiteList = {
  id?: number
  shopId?: number
  domain?: string
  title?: string
  seoScore?: number
  pcPerformanceScore?: number
  mobilePerformanceScore?: number
  url?: string
  seoCheckResultDTO?: DataSource
  checkDate?: string
}

export type siteEnum = string[]
