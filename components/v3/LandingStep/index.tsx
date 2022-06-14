import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'

const stepList = [
  { type: 'step1', title: '品牌策划', desc: ['目标受众、品牌定位', '行业趋势分析'] },
  { type: 'step2', title: '个性化建站', desc: ['网页风格及内容设计、', '商品分类、信息优化'] },
  { type: 'step3', title: 'SEO深度运营', desc: ['页面SEO结构优化', '核心关键词优化'] },
  { type: 'step4', title: '多渠道营销投放', desc: ['多渠道开户', '广告投放数据分析'] },
  { type: 'step5', title: '社媒和KOL运营', desc: ['寻找优质匹配网红', '社群生态打造'] },
  { type: 'step6', title: '邮件营销', desc: ['EDM模版库', '邮件营销内容生成'] },
  { type: 'step7', title: '用户/会员深度运营', desc: ['构建会员体系', '设置转介绍机制'] },
]

const stepIconList = [
  { arrow: 'arrow1', step: 'step1' },
  { arrow: 'arrow2', step: 'step2' },
  { arrow: 'arrow3', step: 'step3' },
  { arrow: 'arrow4', step: 'step4' },
  { arrow: 'arrow5', step: 'center' },
  { arrow: 'arrow6', step: 'step5' },
  { arrow: 'arrow7', step: 'step6' },
  { arrow: 'arrow8', step: 'step7' },
  { arrow: 'arrow9', step: 'end' },
  { arrow: 'arrow10', step: 'end' },
]

const LandingStep: React.FC = () => {
  const [progress, setProgress] = useState<Record<string, boolean>>({
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

    const timer = !['start', 'step1'].includes(key) ? 600 : 10
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
          <div
            className={classNames(styles.againPurchase, {
              [styles.active]: progress.center,
              [styles.executeOne]: keys.length < count,
            })}
          >
            复购
          </div>
          {stepIconList.map((item) => {
            return (
              <div
                key={item.arrow}
                className={classNames(styles[item.arrow], styles.arrow, {
                  [styles.active]: progress[item.step],
                  [styles.executeOne]: keys.length < count,
                })}
              />
            )
          })}

          {stepList.map((item) => {
            return (
              <div
                key={item.title}
                className={classNames(styles[item.type], {
                  [styles.active]: progress[item.type],
                  [styles.executeOne]: keys.length < count,
                })}
              >
                <div className={styles.bg} />
                <div className={styles.stepBox}>
                  <div className={styles.stepTitle}>{item.title}</div>
                  {item.desc.map((text) => {
                    return (
                      <div className={styles.stepDesc} key={text}>
                        {text}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LandingStep
