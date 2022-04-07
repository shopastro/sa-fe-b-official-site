import React from 'react'
import styles from './index.module.scss'
import MdEditor from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'
import { getCmsDomain } from '../../../utils/domain'

type IProps = {
  topics: any
}

const TopicsBox: React.FC<IProps> = (props) => {
  const { topics = [] } = props

  const getSection = (topic: any) => {
    return Object.keys(topic).map((key) => {
      let mdTxt = topic[key]
      if (key === 'content' || key === 'richText') {
        // 给图片添加域名
        const afterReplaceTxt = mdTxt.replace(/]\(\/uploads\//g, '](' + getCmsDomain() + '/uploads/')

        return <MdEditor key={key} previewOnly={true} modelValue={afterReplaceTxt} />
      }

      return ''
    })
  }

  const loopTopics = () => {
    const topic = topics[topics.length - 1] || {}
    return getSection(topic)
  }

  const getTopContent = () => {
    const topic = topics[topics.length - 1] || {}

    return (
      <>
        <h1>{topic.title}</h1>
        <div className={styles.info}>
          <div className={styles.cell}>
            <div className={styles.title}>作者：</div>
            <div>{topic.author}</div>
          </div>
          <div className={styles.cell}>
            <div className={styles.title}>时间：</div>
            <div>{topic.timer}</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className={styles.TopicsBox}>
      <div className={styles.TopicsContent}>
        {getTopContent()}
        {loopTopics()}
      </div>
    </div>
  )
}

export default TopicsBox
