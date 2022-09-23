import Button from '../../v1/base/Button'
import Input from '../../v1/base/Form/Input'
import styles from './index.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../store/detectionStore'
import Message from '../../biz/Message/message.min.js'

const https = (url: string) => {
  if (url.search('https://') === 0 || url.search('http://') === 0) return url
  if (url.lastIndexOf('/') === url.length) return `https://${url}`
  return `https://${url}/`
}

const isUrl = (url: string) => {
  try {
    if (!url || !Boolean(/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9/\S]+$/g.test(url))) throw new Error()
    return Boolean(new URL(https(url)))
  } catch (error) {
    return false
  }
}

const checkMap: Record<string, number> = {}

const Detection: React.FC = () => {
  const loader = ({ src }: { src: string }) => `https://media.cdn.ishopastro.com/${src}`
  const [inputValue, setInputValue] = useState('')
  const { setCurrentUrl, currentUrl, errorText, loopResult, loading } = useContainer(detectionStore)

  const checkOutTime = (startTime: number, endTime: number) => {
    const dTime = startTime + 60000 - endTime
    if (Math.floor(dTime / 1000) <= 1) return
    Message().warning(``, {
      timeout: 2000,
      html: true,
      content: `<div style="color:#333333;display:flex;">一分钟内仅能进行一次检测，请稍后再试 <div style="color:#999;margin-left:12px;">${Math.floor(
        dTime / 1000
      )}s</div></div> `,
    })
  }

  const onSubmit = () => {
    const error = !Boolean(isUrl(inputValue) && inputValue)
    if (error) {
      return Message().warning(``, {
        timeout: 2000,
        html: true,
        content: `<div style="color:#333333;display:flex;">请输入正确的域名或者URL`,
      })
    }

    const url = https(inputValue)
    if (checkMap[`${url}`] && currentUrl) {
      if (new Date().getTime() - checkMap[`${url}`] > 60000) {
        setCurrentUrl(url)
        loopResult()
        checkMap[`${url}`] = new Date().getTime()
      } else {
        checkOutTime(checkMap[`${url}`], new Date().getTime())
      }
    } else {
      setInputValue(url)
      setCurrentUrl(url)
      checkMap[`${url}`] = new Date().getTime()
    }

    window.dataLayer.push({
      gtm: {
        elementId: 'seo_check_search',
      },
      event: 'search',
      eventModel: {
        user_data: {
          user_domain: url,
        },
      },
    })
  }

  return (
    <div className={styles.detection}>
      <Input
        name="url"
        placeholder="输入域名或者URL"
        value={inputValue}
        onChange={(_name, value) => {
          setInputValue(value)
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit()
          }
        }}
        className={styles.input}
      >
        {inputValue && (
          <Image
            className={styles.clear}
            alt="clear"
            src="svg/sa-fe-c/ce741f350b27f0a6fcf196412b8cdcd6f.svg"
            loader={loader}
            width={14}
            height={14}
            onClick={() => {
              setInputValue('')
            }}
          />
        )}
        {errorText && <div className={styles.tips}>{errorText}</div>}
        {currentUrl && loading && (
          <div className={styles.loadingBox}>
            <div className={styles.loading}></div>
          </div>
        )}
      </Input>
      <Button
        text="开始检测"
        type="ghost"
        className={styles.start}
        disabled={!Boolean(inputValue)}
        onClick={() => {
          onSubmit()
        }}
      />
    </div>
  )
}

export default Detection
