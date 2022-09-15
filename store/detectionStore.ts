import { createContainer } from 'unstated-next'
import { useCallback, useEffect, useState } from 'react'
import { getSeoResult, getSeoSubmit, getUrlBody } from '../service'
import axios, { AxiosResponse } from 'axios'

//@ts-ignore
function formatDate(date: Date, fmt: string): string {
  const opt: { [key: string]: string } = {
    'y+': date.getFullYear().toString(), // 年
    'M+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'h+': date.getHours().toString(), // 时
    'm+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString(), // 秒
  }
  for (const k in opt) {
    const ret = new RegExp('(' + k + ')').exec(fmt)
    if (ret) {
      if (/(y+)/.test(k)) {
        fmt = fmt.replace(ret[1], opt[k].substring(4 - ret[1].length))
      } else {
        fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
      }
    }
  }
  return fmt
}

type DataSource = {
  checkGroupMap?: {
    [key: string]: Array<{
      category?: string
      explanation?: string
      groupName?: string
      groupType?: string
      passed?: boolean
      rules?: Array<{ [key: string]: string }>
      score?: number
      success?: string
      weight?: number
    }>
  }
  domain?: string
  itemCnt?: number
  score?: number
  title?: string
  time?: string
  toOptimizeItemCnt?: number
  url?: string
  imageName?: string
}

function DetectionStore() {
  const [dataSource, setDataSource] = useState<DataSource>({})
  const [currentUrl, setCurrentUrl] = useState('')
  const [isUnlock, setUnlock] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [shouModal, setShowMoadl] = useState(false)

  /**
   * 轮询结果
   */
  const loopResult = useCallback(() => {
    setDataSource({})
    let timer: NodeJS.Timer = setInterval(async () => {
      getSeoResult(currentUrl)
        .then(({ data, success }) => {
          //报错
          if (!success) clearInterval(timer)
          //轮询到数据
          if (data) {
            setDataSource(data)
            clearInterval(timer)
          }
        })
        .catch((e) => {
          console.error(e)
          clearInterval(timer)
        })
    }, 1000)
  }, [currentUrl])

  /**
   * 检测url是否正常能访问
   */
  const getStatusCode = useCallback(() => {
    const image = new Image()
    image.src = currentUrl
    image.onload = () => {
      setDataSource({})
      setErrorText('')
      console.log('111')
    }
    image.onerror = () => {
      console.log('2333')
      // setErrorText('当前url不能访问，请重新输入')
    }
  }, [currentUrl])

  /**
   * 检测当前url是否解锁
   */
  const getUrlOnlock = useCallback(() => {
    //是否解锁
    const urlList = atob(localStorage.getItem('sa-seo') ?? '').split(',')
    return Boolean(urlList.includes(currentUrl))
  }, [currentUrl])

  useEffect(() => {
    if (!currentUrl) return
    getStatusCode()
    setUnlock(getUrlOnlock())
    //提交需要爬取的网站
    getSeoSubmit(currentUrl)
    loopResult()
  }, [currentUrl, getStatusCode, getUrlOnlock, loopResult])
  console.log(dataSource)

  return {
    dataSource,
    currentUrl,
    setCurrentUrl,
    isUnlock,
    errorText,
    setErrorText,
    setUnlock,
    setShowMoadl,
    shouModal,
  }
}

export default createContainer(DetectionStore)
