/* eslint-disable @next/next/no-img-element */
import styles from '../index.module.scss'
import { useEffect, useRef } from 'react'
import { drawMain } from '../../../../utils/htmlToPdf'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../../store/detectionStore'

const DetailDes: React.FC = () => {
  const { dataSource } = useContainer(detectionStore)
  const { pcPerformanceScore, mobilePerformanceScore, score } = dataSource

  const thresholdBlocks = () => {
    return [
      { name: 'PC性能得分', score: pcPerformanceScore || 0 },
      { name: '移动性能得分', score: mobilePerformanceScore || 0 },
      { name: 'SEO得分', score: score || 0 },
    ].map((it) => {
      return (
        <div key={it.name} className={styles.scoreItem}>
          <div
            className={styles.scoreNumber}
            style={{
              left: `${it.score}%`,
              color: it.score <= 33 ? '#DB0D0D' : it.score > 75 ? '#29A72F' : '#FFB075',
            }}
          >
            {it.score}
            <svg width="11" height="44" viewBox="0 0 11 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.65625 44L4.65625 4.37115e-08L5.65625 0L5.65625 44L4.65625 44Z" fill="#333" />
              <circle cx="5.65625" cy="5" r="5" fill="#333" />
              <circle cx="5.65625" cy="5" r="2" fill="white" />
            </svg>
          </div>

          <div className={styles.scoreTitle}>{it.name}</div>
          <div className={styles.thresholdBlockBox}>
            <div className={styles.thresholdBed} />
            <div className={styles.thresholdMiddle} />
          </div>
        </div>
      )
    })
  }
  return (
    <div className={styles.des}>
      <div className={styles.minute}>
        <div className={styles.score}>{thresholdBlocks()}</div>
        <div className={styles.title}>{dataSource.title}</div>
        <div className={styles.urlTip}>站点:&nbsp;{dataSource.url}</div>
        <div className={styles.time}>测评时间:&nbsp;{dataSource.time}</div>
        <div className={styles.result}>
          共 <div style={{ color: '#333333' }}>&nbsp;{dataSource.itemCnt}&nbsp;</div> 个SEO检测项，有
          <div style={{ color: '#E38B07' }}>&nbsp;{dataSource.toOptimizeItemCnt}&nbsp;</div> 项待优化
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.preCover}>
        <img src={`https://media.beluga.cdn.ishopastro.com/seo-ads/${dataSource?.imageName}`} alt="preCover" />
      </div>
    </div>
  )
}

export default DetailDes
