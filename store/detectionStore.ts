import { createContainer } from 'unstated-next'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getSeoResult, getSeoSubmit, getUrlBody } from '../service'

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

const keyList: string[] = []
const cheatCode = 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowLeft,ArrowRight,ArrowRight,KeyB,KeyA,KeyB,KeyA'

function DetectionStore() {
  const [dataSource, setDataSource] = useState<DataSource>({})
  const [currentUrl, setCurrentUrl] = useState('')
  const [isUnlock, setUnlock] = useState(false)
  const [showModal, setShowMoadl] = useState(false)

  const timer = useRef<NodeJS.Timeout>()

  /**
   * 清除定时器
   */
  const clearTimer = () => timer.current && clearInterval(timer.current)

  /**
   * 轮询结果
   */
  const loopResult = useCallback(() => {
    clearTimer()
    setDataSource({})
    timer.current = setInterval(() => {
      getSeoResult(currentUrl)
        .then(({ data, success }) => {
          //报错
          if (!success) clearTimer()
          //轮询到数据
          if (data) {
            data.time = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
            setDataSource(data)
            clearTimer()
          }
        })
        .catch((e) => {
          console.error(e)
          clearTimer()
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
      console.log('111')
    }
    image.onerror = (e) => {
      console.log(e)
      console.log('2333')
      // setErrorText('当前url不能访问，请重新输入')
    }
  }, [currentUrl])

  /**
   * 检测当前url是否解锁
   */
  const getUrlOnlock = useCallback(() => {
    if (keyList.toString().includes(cheatCode) || localStorage.getItem('__ENV__') === 'dev') return true
    //是否解锁
    const urlList = atob(localStorage.getItem('sa-seo') ?? '').split(',')
    return Boolean(urlList.includes(currentUrl))
  }, [currentUrl])

  useEffect(() => {
    if (!currentUrl) return
    // getStatusCode()
    setUnlock(getUrlOnlock())
    //提交需要爬取的网站
    getSeoSubmit(currentUrl)
    loopResult()
  }, [currentUrl, getStatusCode, getUrlOnlock, loopResult])

  useEffect(() => {
    let isopen = false

    document.oncontextmenu = (event) => event.preventDefault()

    document.onkeydown = (event) => {
      if (
        event.key === 'F12' ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        ((event.ctrlKey || event.metaKey) && event.key === 's')
      ) {
        event.preventDefault()
      }

      if (isopen) return

      if (keyList.toString().includes(cheatCode)) {
        setUnlock(true)
        localStorage.setItem('__ENV__', 'dev')
        isopen = true
        console.log('已开启dev模式')
        return
      }

      keyList.push(event.code)
    }
  }, [])

  return {
    dataSource,
    currentUrl,
    setCurrentUrl,
    isUnlock,
    setUnlock,
    setShowMoadl,
    showModal,
  }
}

export default createContainer(DetectionStore)
