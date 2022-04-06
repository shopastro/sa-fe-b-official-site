import React from 'react'
import styles from './index.module.scss'

type IProps = {}

const PriceBanner: React.FC<IProps> = (props) => {
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
      </div>
    </div>
  )
}

export default PriceBanner
