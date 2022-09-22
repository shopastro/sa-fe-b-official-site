import { createContainer } from 'unstated-next'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getSeoResult, getSeoSubmit, getUploadTicket, uploadFile } from '../service'
import Message from '../components/biz/Message/message.min.js'
import htmlToPdf from '../utils/htmlToPdf'

function base64toFile(dataurl: string, filename: string) {
  var arr = dataurl.split(','),
    //@ts-ignore
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

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

let TIMEROUT = 0

const keyList: string[] = []
const cheatCode = 'ArrowUp,ArrowUp,ArrowDown,ArrowDown,ArrowLeft,ArrowRight,ArrowLeft,ArrowRight,KeyB,KeyA,KeyB,KeyA'

const uploadList = []

function DetectionStore() {
  const [dataSource, setDataSource] = useState<DataSource>({})
  const [currentUrl, setCurrentUrl] = useState('')
  const [isUnlock, setUnlock] = useState(false)
  const [showModal, setShowMoadl] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [loading, setLoading] = useState(false)
  const [modalVisiabl, setModalVisiabl] = useState(false)
  const [fileS3Url, setFileS3Url] = useState('')

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
    setLoading(true)
    timer.current = setInterval(() => {
      TIMEROUT += 2000
      if (TIMEROUT >= 60000) {
        clearTimer()
        Message().error(``, {
          timeout: 2000,
          html: true,
          content: `<div style="color:#333333;display:flex;">查询url超时，请稍后再试`,
        })
      }
      getSeoResult(currentUrl)
        .then(({ data, success }) => {
          //报错
          if (!success) clearTimer()
          //轮询到数据
          if (data) {
            data.time = formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss')
            clearTimer()
            setUnlock(getUrlOnlock(data))
            setDataSource(data)
            upLoadFile(data)
            uploadList.push(1)
          }
        })
        .catch((e) => {
          console.error(e)
          clearTimer()
        })
    }, 2000)
  }, [currentUrl])

  /**
   * 文件上传
   */
  const upLoadFile = async (data: DataSource) => {
    if (uploadList.length > 0) return
    const { success, data: ticketData } = await getUploadTicket({ fileName: data.title ?? '', fileSuffix: '.pdf' })
    if (success && ticketData) {
      htmlToPdf({ id: 'pdf', title: dataSource.title ?? 'pdf', save: false }).then((pdfData) => {
        const pdfdataStream = base64toFile(pdfData as string, data.title + '.pdf')
        uploadFile({ uploadTicket: ticketData.uploadTicket, file: pdfdataStream })
          .then((res) => {
            setFileS3Url(ticketData.fileName)
            uploadList.length = 0
          })
          .catch((e) => console.log(e))
      })
    }
  }

  /**
   * 检测当前url是否解锁
   */
  const getUrlOnlock = useCallback((data) => {
    if (keyList.toString().includes(cheatCode) || localStorage.getItem('__ENV__') === 'dev') return true
    //是否解锁
    const urlList = atob(localStorage.getItem('sa-seo') ?? '').split(',')
    return Boolean(urlList.includes(data.url ?? ''))
  }, [])

  useEffect(() => {
    if (!currentUrl) return
    clearTimer()
    //提交需要爬取的网站
    getSeoSubmit(currentUrl)
    //循环获取结果
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
    modalVisiabl,
    setModalVisiabl,
    fileS3Url,
  }
}

export default createContainer(DetectionStore)
