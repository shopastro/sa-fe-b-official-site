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
import Modal from '../../v1/base/Modal'
import QRCode from 'qrcode'
import { getMediaDomain } from '../../../utils/domain'

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
  const { dataSource, currentUrl, isUnlock, setModalVisiabl, modalVisiabl, setShowMoadl, fileS3Url, reqNoData } =
    useContainer(detectionStore)
  console.log('🚀 ~ file: DetectionDetail.tsx:162 ~ reqNoData', reqNoData)

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

  const createQRCode = (e: any) => {
    QRCode.toCanvas(e, getMediaDomain() + fileS3Url, { width: 280 })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCallBack)
    return () => window.removeEventListener('scroll', scrollCallBack)
  }, [])

  useEffect(() => {
    if (modalVisiabl && isUnlock) {
      htmlToPdf({ id: 'pdf', title: dataSource.title ?? 'pdf' })
    }
  }, [dataSource.title, isUnlock, modalVisiabl])

  const downloadNode = (
    <div
      className={classNames(styles.top, {
        [`${styles.topDown}`]: currentType === 'download',
      })}
    >
      <div className={styles.urlInfo}>
        <div className={styles.fiocn}>
          <div className={styles.fLetter}>{UrlTitleCase(currentUrl)}</div>
        </div>
        <div className={styles.url}>{currentUrl}</div>
      </div>
      <Button
        className={styles.download}
        onClick={() => {
          if (!isUnlock) {
            setShowMoadl(true)
          } else {
            htmlToPdf({ id: 'pdf', title: dataSource.title ?? 'pdf' })
          }
        }}
        disabled={Boolean(!dataSource.url)}
      >
        下载详细报告
      </Button>
    </div>
  )

  if (reqNoData) {
    return (
      <div>
        {downloadNode}
        <div className={styles.errorBox}>
          <img className={styles.errorImg} src="//media.cdn.ishopastro.com/svg/sa-fe-b-background/nodata.svg" />
          <div>检测失败</div>
        </div>
      </div>
    )
  }

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
      {!reqNoData && (
        <>
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
              <DetectionCardList showLock={false} />
            </div>
          </div>
        </>
      )}

      <div style={{ marginBottom: '72px' }} />

      <Modal
        visiable={modalVisiabl}
        handleClose={() => {
          setModalVisiabl(false)
        }}
      >
        <div className={styles.modal}>
          <div className={styles.tips}>信息提交成功！您的报告下载已经自动开始</div>
          <div className={styles.download}>
            若浏览器没有自动下载，可点击
            <div
              className={styles.redownload}
              onClick={() => htmlToPdf({ id: 'pdf', title: dataSource.title ?? 'pdf' })}
            >
              重新下载
            </div>
          </div>
          <div className={styles.qrcode}>
            <canvas ref={createQRCode} width="280px" height="280px" id="qrcode" />
          </div>
          <div className={styles.save}>手机扫码保存报告</div>
        </div>
      </Modal>
    </>
  )
}

export default DetectionDetail
