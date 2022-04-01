import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'
import { ultimate, enterprise } from './constant'
import classNames from 'classnames'
import Modal from '../base/Modal'

type IProps = {}

const PriceBanner: React.FC<IProps> = (props) => {
  const [more, setMore] = useState(false)
  const [mbUltimateMore, setMbUltimateMore] = useState(false)
  const [mbEnterpriseMore, setMbEnterpriseMore] = useState(false)
  const [isPc, setIsPc] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleResize = () => {
    if (document.body.clientWidth < 770) {
      setIsPc(false)
    } else {
      setIsPc(true)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', () => {})
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.priceBanner}>
      <div className={styles.introBox}>
        <div className={styles.title}>货品您搞定 出海我搞定</div>
        <div className={styles.subTitle}>shopastro提供极简更优的产品服务全案</div>
        <div className={styles.desc}>
          <span>星盘跨境 shopastro，致力于让品牌出海更简单、更高效，提供极简且更优的产品服务全案，</span>
          <span>帮助跨境卖家一站式出海链路各个环节做好优质匹配，最大限度解放时间和精力。</span>
          <span>在极简标准化的基础上，shopastro提供全方位的升级服务，从卖家品牌特点和目标市场角度，</span>
          <span>
            针对性打造更优的品牌出海升级方案，让品牌商品更具竞争力，覆盖更多的受众，创造更高的GMV和海外影响力。
          </span>
        </div>
        <div className={styles.btnNow}>
          <Button
            text="立即开始"
            onClick={() => {
              setIsOpen(true)
            }}
          />
          {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
        </div>
      </div>
      <div className={styles.priceBox}>
        <div
          className={`${styles.price} ${styles.priceUltimate}`}
          onClick={() => {
            !isPc && setMbUltimateMore(true)
          }}
        >
          <div className={styles.version}>旗舰版</div>
          <div className={styles.desc}>全链路最优解</div>
          <div className={styles.cost}>39800 RMB</div>

          <ul className={`${styles.list}`} style={{ display: mbUltimateMore || isPc ? 'flex' : 'none' }}>
            {ultimate.map((it, idx) => {
              if (idx - 3 < enterprise.length || more || mbUltimateMore) {
                return <li key={it}>{it}</li>
              }
            })}
          </ul>
          {!more && (
            <div className={styles.more} onClick={() => setMore(true)}>
              查看更多
            </div>
          )}
          {!mbUltimateMore && (
            <div
              className={styles.moreDesc}
              data-more={'查看详情'}
              onClick={() => {
                setMbUltimateMore(!mbUltimateMore)
              }}
            />
          )}
        </div>

        <div
          className={classNames([styles.price, styles.priceEnterprise], {
            [styles.priceEnterpriseMore]: mbEnterpriseMore,
          })}
          onClick={() => {
            !isPc && setMbEnterpriseMore(true)
          }}
        >
          <div className={styles.version}>企业版</div>
          <div className={styles.desc}>星盘能力开放赋能</div>
          <div className={styles.cost}>188000 RMB</div>

          <ul className={`${styles.list}`} style={{ display: mbEnterpriseMore || isPc ? 'flex' : 'none' }}>
            {enterprise.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>

          {!mbEnterpriseMore && (
            <div
              className={styles.moreDesc}
              data-more={`查看详情`}
              onClick={() => {
                setMbEnterpriseMore(!mbEnterpriseMore)
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default PriceBanner
