import Button from '../../v1/base/Button'
import Input from '../../v1/base/Form/Input'
import styles from './index.module.scss'
import Image from 'next/image'
import { useState } from 'react'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../store/detectionStore'

const https = (url: string) => {
  if (url.search('https://') === 0 || url.search('http://') === 0) return url
  return `https://${url}`
}

const isUrl = (url: string) => {
  try {
    if (!url || !Boolean(/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]+/.test(url))) throw new Error()
    return Boolean(new URL(https(url)))
  } catch (error) {
    return false
  }
}

const Detection: React.FC = () => {
  const loader = ({ src }: { src: string }) => `https://media.cdn.ishopastro.com/${src}`
  const [inputValue, setInputValue] = useState('')
  const { setCurrentUrl, currentUrl, dataSource, errorText, setErrorText } = useContainer(detectionStore)

  return (
    <div className={styles.detection}>
      <Input
        name="url"
        placeholder="输入域名或者URL"
        value={inputValue}
        onChange={(_name, value) => {
          const error = !Boolean(isUrl(value) && value)
          setErrorText(error ? '请输入正确的URL' : '')
          setInputValue(value)
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
            onClick={() => setInputValue('')}
          />
        )}
        {errorText && <div className={styles.tips}>{errorText}</div>}
        {currentUrl && !dataSource?.url && !errorText && (
          <div className={styles.loadingBox}>
            <div className={styles.loading}></div>
          </div>
        )}
      </Input>
      <Button
        text="开始检测"
        type="ghost"
        className={styles.start}
        disabled={!Boolean(inputValue) || Boolean(errorText)}
        onClick={() => {
          setInputValue(https(inputValue))
          setCurrentUrl(https(inputValue))
        }}
      />
    </div>
  )
}

export default Detection
