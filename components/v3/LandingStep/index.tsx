import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

const LandingStep: React.FC = () => {
  const [progress, setProgress] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
    step6: false,
    step7: false,
    start: false,
    center: false,
    end: false,
  })

  const keys = ['start', 'step1', 'step2', 'step3', 'step4', 'center', 'step5', 'step6', 'step7', 'end']

  const [count, setCount] = useState(0)

  useEffect(() => {
    const key = keys[count] || ''

    const timer = !['start', 'step1', 'center', 'end'].includes(key) ? 1200 : 10
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
          start: false,
          end: false,
          center: false,
        })
      }
    }, timer)
  }, [count])
  return (
    <div className={styles.landingStep}>
      <div className={styles.topBox}>
        <div className={styles.title}>全链路运营</div>
        <div className={styles.desc}>实现高效转化 燃爆出海业绩</div>
        <div className={styles.text}>
          <span>贯通首购+复购 ｜ 加速GMV提升 ｜</span> <span>助力独立站私域沉淀</span>
        </div>
      </div>
      <div className={styles.bannerBox} id="SolutionBanner">
        <div className={styles.banner}>
          <div className={styles.center}>
            <div className={styles.save}>合规安全</div>
            <div className={styles.data}>数据分析</div>
            <div className={styles.country}>多国家市场</div>
          </div>
          <div className={styles.firstPurchase}>首购</div>
          <div className={styles.againPurchase}>复购</div>
          <div
            className={classNames(styles.step1, {
              [styles.active]: progress.step1,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>品牌策划</div>
              <div className={styles.stepDesc}>目标受众、品牌定位</div>
              <div className={styles.stepDesc}>行业趋势分析</div>
            </div>
          </div>
          <div
            className={classNames(styles.arrow1, styles.arrow, {
              [styles.active]: progress.step1,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow2, styles.arrow, {
              [styles.active]: progress.step2,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow3, styles.arrow, {
              [styles.active]: progress.step3,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow4, styles.arrow, {
              [styles.active]: progress.step4,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow5, styles.arrow, {
              [styles.active]: progress.center,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow6, styles.arrow, {
              [styles.active]: progress.step5,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow7, styles.arrow, {
              [styles.active]: progress.step6,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow8, styles.arrow, {
              [styles.active]: progress.step7,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow9, styles.arrow, {
              [styles.active]: progress.end,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.arrow10, styles.arrow, {
              [styles.active]: progress.end,
              [styles.executeOne]: keys.length < count,
            })}
          />
          <div
            className={classNames(styles.step2, {
              [styles.active]: progress.step2,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>个性化建站</div>
              <div className={styles.stepDesc}>网页风格及内容设计、 </div>
              <div className={styles.stepDesc}>商品分类、信息优化</div>
            </div>
          </div>
          <div
            className={classNames(styles.step3, {
              [styles.active]: progress.step3,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>SEO深度运营</div>
              <div className={styles.stepDesc}>页面SEO结构优化</div>
              <div className={styles.stepDesc}>核心关键词优化</div>
            </div>
          </div>
          <div
            className={classNames(styles.step4, {
              [styles.active]: progress.step4,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>多渠道营销投放</div>
              <div className={styles.stepDesc}>多渠道开户</div>
              <div className={styles.stepDesc}>广告投放数据分析</div>
            </div>
          </div>
          <div
            className={classNames(styles.step5, {
              [styles.active]: progress.step5,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>社媒和KOL运营</div>
              <div className={styles.stepDesc}>寻找优质匹配网红</div>
              <div className={styles.stepDesc}>社群生态打造</div>
            </div>
          </div>
          <div
            className={classNames(styles.step6, {
              [styles.active]: progress.step6,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>邮件营销</div>
              <div className={styles.stepDesc}>EDM模版库</div>
              <div className={styles.stepDesc}>邮件营销内容生成</div>
            </div>
          </div>
          <div
            className={classNames(styles.step7, {
              [styles.active]: progress.step7,
              [styles.executeOne]: keys.length < count,
            })}
          >
            <div className={styles.bg} />
            <div className={styles.stepBox}>
              <div className={styles.stepTitle}>用户/会员深度运营</div>
              <div className={styles.stepDesc}>构建会员体系</div>
              <div className={styles.stepDesc}>设置转介绍机制</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingStep
