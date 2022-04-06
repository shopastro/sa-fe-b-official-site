import React, { useState } from 'react'
import styles from './index.module.scss'
import { site } from './constant'
import classnames from 'classnames'

type IProps = {
  type:
    | 'certification'
    | 'site'
    | 'product'
    | 'trading'
    | 'brand'
    | 'country'
    | 'analysis'
    | 'save'
    | 'service'
    | 'launch'
    | 'useOperate'
    | 'socialOperate'
    | 'marketing'
    | 'seo'
    | 'additional'
  text?: string
  category?: 'baas'
}

const Item: React.FC<IProps> = (props) => {
  const { type, text = '', category } = props
  const [closed, setClosed] = useState(false)
  const data = site[type]

  const createdOM = (
    data: { title: string; desc: string; base: boolean; ultimate: boolean; enterprise: boolean }[],
    type: 'feature' | 'operate'
  ) => {
    return (
      data.length > 0 && (
        <ul>
          <li className={styles[type]}>
            <span>{type === 'feature' ? '产品功能' : '运营服务'}</span>
          </li>
          {data.map((it) => {
            return (
              <li key={it.title}>
                <div>{it.title}</div>
                <div>{it.desc}</div>
                <div
                  className={classnames({
                    [styles.can]: it.base,
                    [styles.not]: !it.base,
                  })}
                />
                <div
                  className={classnames({
                    [styles.can]: it.ultimate,
                    [styles.not]: !it.ultimate,
                  })}
                />
                <div
                  className={classnames({
                    [styles.can]: it.enterprise,
                    [styles.not]: !it.enterprise,
                  })}
                />
              </li>
            )
          })}
        </ul>
      )
    )
  }

  return (
    <div className={styles.Item}>
      <div
        className={classnames(styles[type], {
          [styles.baas]: category === 'baas'
        })}
        onClick={() => {
          setClosed(!closed)
        }}
        data-text={text}
      >
        {data.text}

        <div
          className={classnames(styles.switch, {
            [styles.switchClose]: closed,
          })}
        />
      </div>

      {!closed && (
        <>
          {createdOM(data.ability.feature, 'feature')}
          {createdOM(data.ability.operate, 'operate')}
        </>
      )}
    </div>
  )
}

export default Item
