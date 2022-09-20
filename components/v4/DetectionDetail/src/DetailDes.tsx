/* eslint-disable @next/next/no-img-element */
import styles from '../index.module.scss'
import { useEffect, useRef } from 'react'
import { drawMain } from '../../../../utils/htmlToPdf'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../../store/detectionStore'

const DetailDes: React.FC = () => {
  const { dataSource } = useContainer(detectionStore)

  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current && dataSource && dataSource.score) {
      const [forecolor, bgColor] = (function () {
        if (dataSource?.score > 75) return ['#2e9c35', '#f3faf4']
        if (dataSource?.score > 50) return ['#ffa66f', '#fffaf7']
        if (dataSource?.score > 25) return ['#fd6a6b', '#fff7f7']
        return ['#d40e17', '#fdf1f1']
      })()
      drawMain(canvasRef.current, dataSource.score - 1, forecolor, bgColor)
    }
  }, [dataSource])

  return (
    <div className={styles.des}>
      <div className={styles.minute}>
        <div className={styles.score}>
          <canvas id="score-canvas" ref={canvasRef} width={136} height={136} />
          <div className={styles.scoreBody}>
            <div className={styles.num}>{dataSource.score}</div>
            <div className={styles.tip}>综合得分</div>
          </div>
        </div>
        <div className={styles.title}>{dataSource.title}</div>
        <div className={styles.urlTip}>站点:&nbsp;{dataSource.url}</div>
        <div className={styles.time}>测评时间:&nbsp;{dataSource.time}</div>
        <div className={styles.result}>
          共 <div style={{ color: '#333333' }}>&nbsp;{dataSource.itemCnt}&nbsp;</div> 个检测项，有
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
