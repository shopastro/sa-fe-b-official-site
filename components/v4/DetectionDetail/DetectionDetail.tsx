import htmlToPdf from '../../../utils/htmlToPdf'
import Button from '../../v1/base/Button'
import Loading from './src/DetectionLoading'
import styles from './index.module.scss'
import DetailDes from './src/DetailDes'
import DetectionTab from './src/DetectionTab'
import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import DetectionCardList from './src/DetectionCardList'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../store/detectionStore'

const a = (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="17" r="17" fill="#333333" />
    <path d="M12.4 9.72V24H14.58V17.6H21.68V15.74H14.58V11.58H22.1V9.72H12.4Z" fill="white" />
  </svg>
)

const UrlTitleCase = (url: string) => {
  if (!url) return url

  if (url?.search('www.') > -1) {
    return url?.slice(12, 13)?.toUpperCase()
  }

  return url?.slice(8, 9)?.toUpperCase()
}

const DetectionDetail: React.FC = () => {
  const [currentType, setCurrentType] = useState<'header' | 'download'>('header')
  const currentTypeRef = useRef({})
  const { dataSource, currentUrl, isUnlock } = useContainer(detectionStore)

  const scrollCallBack = (e: Event) => {
    const scrollTop = document.documentElement.scrollTop
    const currentType = currentTypeRef.current

    if (scrollTop > 170 && currentType !== 'download') {
      setCurrentType('download')
      currentTypeRef.current = 'download'
    }
    if (scrollTop < 170 && currentType !== 'header') {
      setCurrentType('header')
      currentTypeRef.current = 'header'
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCallBack)
    return () => window.removeEventListener('scroll', scrollCallBack)
  }, [])

  const downloadNode = (
    <div
      className={classNames(styles.top, {
        [`${styles.topDown}`]: currentType === 'download',
      })}
    >
      <div className={styles.urlInfo}>
        <div className={styles.fiocn}>
          <div className={styles.fLetter}>{UrlTitleCase(dataSource?.url || currentUrl)}</div>
        </div>
        <div className={styles.url}>{dataSource?.url || currentUrl}</div>
      </div>
      <Button
        className={styles.download}
        onClick={() => htmlToPdf({ id: 'pdf', title: 'pdf' })}
        // disabled={Boolean(currentUrl && dataSource.url && !isUnlock)}
        disabled={Boolean(!isUnlock)}
      >
        下载详细报告
      </Button>
    </div>
  )

  if (!currentUrl) {
    return <></>
  }

  if (currentUrl && !dataSource.url) {
    return (
      <>
        {downloadNode}
        <Loading />
      </>
    )
  }

  return (
    <>
      {downloadNode}
      <div style={{ marginTop: '24px' }} />

      <div style={{ position: 'relative', width: '100%' }}>
        <DetailDes />

        <div className={styles.list}>
          <div style={{ minWidth: '185px' }}>
            <DetectionTab />
          </div>
          <DetectionCardList />
        </div>
      </div>

      <div id="pdf" style={{ position: 'fixed', width: '1455px', left: '-10000px', padding: ' 30px 60px 0' }}>
        <DetailDes />
        <div className={styles.list}>
          <DetectionCardList />
        </div>
      </div>

      <div style={{ marginBottom: '72px' }} />
    </>
  )
}

export default DetectionDetail
