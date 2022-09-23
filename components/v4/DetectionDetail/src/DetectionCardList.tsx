import { CSSProperties } from 'react'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../../store/detectionStore'
import styles from '../index.module.scss'
import { useMemo } from 'react'
import classNames from 'classnames'
import Button from '../../../v3/base/Button'
import { ErrorIcon } from './DetectionTab'

export const ScuessIcon = ({ style }: { style?: CSSProperties }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style ?? { marginRight: '4px' }}
    >
      <path
        d="M8.00004 1.33337C4.32671 1.33337 1.33337 4.32671 1.33337 8.00004C1.33337 11.6734 4.32671 14.6667 8.00004 14.6667C11.6734 14.6667 14.6667 11.6734 14.6667 8.00004C14.6667 4.32671 11.6734 1.33337 8.00004 1.33337ZM11.1867 6.46671L7.40671 10.2467C7.31337 10.34 7.18671 10.3934 7.05337 10.3934C6.92004 10.3934 6.79337 10.34 6.70004 10.2467L4.81337 8.36004C4.62004 8.16671 4.62004 7.84671 4.81337 7.65337C5.00671 7.46004 5.32671 7.46004 5.52004 7.65337L7.05337 9.18671L10.48 5.76004C10.6734 5.56671 10.9934 5.56671 11.1867 5.76004C11.38 5.95337 11.38 6.26671 11.1867 6.46671Z"
        fill="#29A72F"
      />
    </svg>
  )
}
export default function ({ showLock = true }: { showLock?: boolean }) {
  const { dataSource, isUnlock, setShowMoadl } = useContainer(detectionStore)

  const unlockNode = (
    <div className={styles.unlockNode}>
      <div style={{ marginRight: '12px' }}>查看详细报告，请</div>
      <Button text="解锁" type="ghost" className={styles.unlockBtn} onClick={() => setShowMoadl(true)} />
    </div>
  )

  const cardList = useMemo(() => {
    const { checkGroupMap } = dataSource
    const cardNodeList: React.ReactNode[] = []

    let index = 0
    for (const key in checkGroupMap) {
      const groupInfo = checkGroupMap[key]

      cardNodeList.push(
        <div key={key} className={styles.cardItem}>
          <div className={styles.class}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: '10px' }}
            >
              <g clipPath="url(#clip0_67_2702)">
                <path
                  d="M11.8084 2.27509L22.5323 3.808L24.0641 14.533L14.1061 24.491C13.903 24.6941 13.6275 24.8082 13.3402 24.8082C13.0529 24.8082 12.7774 24.6941 12.5743 24.491L1.84929 13.766C1.6462 13.5628 1.5321 13.2873 1.5321 13.0001C1.5321 12.7128 1.6462 12.4373 1.84929 12.2342L11.8084 2.27509ZM12.5743 4.57392L4.14704 13.0001L13.3402 22.1922L21.7664 13.766L20.618 5.72225L12.5743 4.57392ZM14.871 11.4683C14.4645 11.0617 14.2363 10.5103 14.2364 9.93549C14.2364 9.65086 14.2925 9.36901 14.4015 9.10606C14.5105 8.84311 14.6702 8.60419 14.8715 8.40296C15.0728 8.20173 15.3118 8.04211 15.5748 7.93323C15.8378 7.82435 16.1196 7.76834 16.4043 7.76839C16.9791 7.76849 17.5304 7.99695 17.9368 8.4035C18.3432 8.81006 18.5715 9.36141 18.5714 9.93626C18.5713 10.5111 18.3428 11.0624 17.9362 11.4688C17.5297 11.8752 16.9783 12.1035 16.4035 12.1034C15.8286 12.1033 15.2774 11.8748 14.871 11.4683Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_67_2702">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {key}
          </div>
          {/* children */}
          {groupInfo.map((item) => {
            return (
              <div key={item.groupType} className={styles.card}>
                <div className={styles.cardClass} id={item.groupName}>
                  {item.passed ? (
                    <ScuessIcon style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                  ) : (
                    <ErrorIcon style={{ marginRight: '8px', width: '24px', height: '24px' }} />
                  )}

                  {item.groupName}
                </div>
                <div className={styles.cardLabel}>
                  <div>检测信息明细</div>
                  <div className={styles.text}>{item.explanation}</div>
                </div>
                <div className={styles.cardLabel}>
                  <div>检测结果</div>
                  <div className={styles.resultLabel}>
                    {/*  */}
                    {!item.passed &&
                      item.rules?.map((ruleItem) => {
                        return (
                          <div
                            key={ruleItem.name}
                            className={classNames(styles.resultLabelItem, {
                              [styles.unlock]: isUnlock,
                            })}
                          >
                            <div className={styles.error}>{ruleItem.name}</div>
                            {item.groupType === 'grammar' ? (
                              <div
                                className={styles.resultText}
                                dangerouslySetInnerHTML={{ __html: ruleItem.solution }}
                              />
                            ) : (
                              <div className={styles.resultText}>{ruleItem.solution}</div>
                            )}
                            {!showLock ? <> </> : !isUnlock && index === 0 && unlockNode}
                          </div>
                        )
                      })}
                    {item.passed && (
                      <div
                        className={classNames(styles.resultLabelItem, {
                          [styles.unlock]: isUnlock,
                        })}
                      >
                        <div className={styles.sucess}>正常状态</div>
                        <div className={styles.resultText}>{item.success} </div>
                        {!showLock ? <></> : !isUnlock && index === 0 && unlockNode}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
      index++
    }

    return cardNodeList
  }, [dataSource, isUnlock])

  return <div className={styles.cardList}>{cardList}</div>
}
