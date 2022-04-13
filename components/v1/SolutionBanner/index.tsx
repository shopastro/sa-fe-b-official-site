import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

type IProps = {
  onActive: (a: 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase') => void
}

const BannerBox: React.FC<IProps> = (props) => {
  const { onActive } = props
  const [progress, setProgress] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    startLine: false,
    endLine: false,
  })
  const keys = ['startLine', 'step1', 'step2', 'step3', 'step4', 'endLine', 'step5', 'step6', 'step7']

  const [count, setCount] = useState(0)

  useEffect(() => {
    const key = keys[count] || ''
    const timer = !['startLine', 'step1', 'endLine'].includes(key) ? 700 : 10
    setTimeout(() => {
      setProgress({
        ...progress,
        [key]: true,
      })
      if (count <= keys.length) {
        setCount((n) => n + 1)
      } else {
        setProgress({
          step1: false,
          step2: false,
          step3: false,
          step4: false,
          step5: false,
          step6: false,
          step7: false,
          startLine: true,
          endLine: true,
        })
      }
    }, timer)
  }, [count])

  return (
    <>
      <div className={styles.topBox}>
        <div className={styles.company}>
          星盘跨境 <span>shopastro</span>
        </div>
        <div className={styles.title}>全链路运营方案 </div>
        <div className={styles.desc}> 一站式出海更简单、更高效</div>

        <div className={styles.center}>
          <div className={styles.save}>合规安全</div>
          <div className={styles.data}>数据分析</div>
          <div className={styles.country}>多国家市场</div>
        </div>
      </div>
      <div className={styles.bannerBox} id="SolutionBanner">
        <div className={styles.banner}>
          <div
            className={classNames(styles.startLine, {
              [styles.active]: progress.startLine,
            })}
          />
          <div
            className={classNames(styles.endLine, {
              [styles.active]: progress.endLine,
            })}
          />
          <div className={styles.astro} />
          <div
            className={classNames(styles.step1, {
              [styles.active]: progress.step1,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('brand')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>品牌策划</div>
              <div className={styles.stepDesc}>行业调研、受众研究、品牌定位 卖点提炼、市场策略</div>
            </div>
          </div>
          <div
            className={classNames(styles.step2, {
              [styles.active]: progress.step2,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('site')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>个性化建站</div>
              <div className={styles.stepDesc}>全托管专业建站、网站视觉优化、 网站内容优化</div>
            </div>
          </div>
          <div
            className={classNames(styles.step3, {
              [styles.active]: progress.step3,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('seo')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>SEO深度运营</div>
              <div className={styles.stepDesc}>核心关键词筛选、站点关键词布局、 反链建设、数据报告</div>
            </div>
          </div>
          <div
            className={classNames(styles.step4, {
              [styles.active]: progress.step4,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('launches')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>多渠道营销投放</div>
              <div className={styles.stepDesc}>广告预算方案、广告结构搭建、 人群标签管理、广告优化、 数据分析复盘</div>
            </div>
          </div>
          <div
            className={classNames(styles.step5, {
              [styles.active]: progress.step5,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('operation')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>社媒和KOL运营</div>
              <div className={styles.stepDesc}>
                内容设计和排期方案、热门话题 挖掘、粉丝增长运营策略、红人 匹配及运营
              </div>
            </div>
          </div>
          <div
            className={classNames(styles.step6, {
              [styles.active]: progress.step6,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('email')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>邮件营销</div>
              <div className={styles.stepDesc}>弃单邮件策略、丰富的邮件模版、 分层用户营销策略</div>
            </div>
          </div>
          <div
            className={classNames(styles.step7, {
              [styles.active]: progress.step7,
              [styles.executeOne]: keys.length < count,
            })}
            onClick={() => {
              onActive('repurchase')
            }}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>用户/会员复购运营</div>
              <div className={styles.stepDesc}>邮件营销、弃单追踪、私域运营、 会员分层运营</div>
            </div>
          </div>

          <div className={styles.rocket}></div>

          <div className={styles.bottomRocket}></div>

          <div className={styles.center}>
            <div className={styles.save}>合规安全</div>
            <div className={styles.data}>数据分析</div>
            <div className={styles.country}>多国家市场</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BannerBox
