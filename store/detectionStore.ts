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

/**
 * 模拟实现jsonp
 * @param {Object} url
 */
function jsonp(url: string, onload: (e: any) => void, onerror: (e: any) => void) {
  const callbackName = 'jsonp_callback_' + new Date().getTime()

  const script = document.createElement('script')
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName
  script.onload = (e) => onload && onload(e)
  script.onerror = (e) => onerror && onerror(e)
  document.body.appendChild(script)
}

let TIMEROUT = 0

const keyList: string[] = []
const cheatCode = 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA,KeyB,KeyA'

function DetectionStore() {
  const [dataSource, setDataSource] = useState<DataSource>({})
  const [currentUrl, setCurrentUrl] = useState('')
  const [isUnlock, setUnlock] = useState(false)
  const [showModal, setShowMoadl] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [loading, setLoading] = useState(false)

  const timer = useRef<NodeJS.Timeout>()

  /**
   * 清除定时器
   */
  const clearTimer = () => {
    TIMEROUT = 0
    timer.current && clearInterval(timer.current)
    setLoading(false)
    setDataSource({})
  }

  /**
   * 轮询结果
   */
  const loopResult = useCallback(() => {
    timer.current = setInterval(() => {
      TIMEROUT += 2000
      if (TIMEROUT >= 60000) {
        clearTimer()
        setErrorText('查询url超时，请稍后再试')
        setCurrentUrl('')
      }
      getSeoResult(currentUrl)
        .then(({ data, success }) => {
          //报错
          if (!success) clearTimer()
          //轮询到数据
          if (data) {
            data.time = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
            clearTimer()
            setDataSource(data)
          }
        })
        .catch((e) => {
          console.error(e)
          clearTimer()
        })
    }, 2000)
  }, [currentUrl])

  /**
   * 检测url是否正常能访问
   */
  const getStatusCode = useCallback(async () => {
    // const status = await new Promise((resolve) => {
    //   jsonp(
    //     currentUrl,
    //     (e) => {
    //       resolve(true)
    //     },
    //     (e) => {
    //       resolve(false)
    //     }
    //   )
    // })
    // if (!status) {
    //   clearTimer()
    //   setErrorText('请输入正确的域名或者URL')
    //   setCurrentUrl('')
    // }
  }, [currentUrl])

  /**
   * 检测当前url是否解锁
   */
  const getUrlOnlock = useCallback(() => {
    if (keyList.toString().includes(cheatCode) || localStorage.getItem('__ENV__') === 'dev') return true
    //是否解锁
    const urlList = atob(localStorage.getItem('sa-seo') ?? '').split(',')
    return Boolean(urlList.includes(currentUrl ?? ''))
  }, [currentUrl])

  useEffect(() => {
    clearTimer()
    // getStatusCode()
    setUnlock(getUrlOnlock())
    //提交需要爬取的网站
    getSeoSubmit(currentUrl)
    setLoading(true)
    loopResult()
  }, [currentUrl])

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
    loading,
    dataSource,
    currentUrl,
    setCurrentUrl,
    isUnlock,
    setUnlock,
    setShowMoadl,
    showModal,
    errorText,
    setErrorText,
    loopResult,
  }
}

export default createContainer(DetectionStore)
