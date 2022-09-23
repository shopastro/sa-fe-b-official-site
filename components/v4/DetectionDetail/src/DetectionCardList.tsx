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

const IconList = {
  标签检测: (
    <>
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
    </>
  ),
  图片检测: (
    <>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '10px' }}
      >
        <g clipPath="url(#clip0_49_469)">
          <path
            d="M5.23041 22.75L5.20875 22.7717L5.186 22.75H3.24141C2.9563 22.7497 2.68295 22.6362 2.48144 22.4345C2.27994 22.2328 2.16675 21.9594 2.16675 21.6743V4.32575C2.16873 4.04124 2.28256 3.76894 2.48364 3.56765C2.68472 3.36637 2.95691 3.25227 3.24141 3.25H22.7587C23.3524 3.25 23.8334 3.73208 23.8334 4.32575V21.6743C23.8314 21.9588 23.7176 22.2311 23.5165 22.4323C23.3154 22.6336 23.0433 22.7477 22.7587 22.75H5.23041ZM21.6667 16.25V5.41667H4.33341V20.5833L15.1667 9.75L21.6667 16.25ZM21.6667 19.3137L15.1667 12.8137L7.39708 20.5833H21.6667V19.3137ZM8.66675 11.9167C8.09211 11.9167 7.54101 11.6884 7.13468 11.2821C6.72835 10.8757 6.50008 10.3246 6.50008 9.75C6.50008 9.17536 6.72835 8.62426 7.13468 8.21794C7.54101 7.81161 8.09211 7.58333 8.66675 7.58333C9.24138 7.58333 9.79248 7.81161 10.1988 8.21794C10.6051 8.62426 10.8334 9.17536 10.8334 9.75C10.8334 10.3246 10.6051 10.8757 10.1988 11.2821C9.79248 11.6884 9.24138 11.9167 8.66675 11.9167Z"
            fill="#333333"
          />
        </g>
        <defs>
          <clipPath id="clip0_49_469">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
  正文检测: null,
  社交媒体检测: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '10px' }}
      >
        <g clipPath="url(#clip0_50_475)">
          <path
            d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11.293 12.121L15.536 7.879L16.95 9.293L11.293 14.95L7.403 11.06L8.818 9.646L11.293 12.121Z"
            fill="#333333"
          />
        </g>
        <defs>
          <clipPath id="clip0_50_475">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
  站点检测: null,
  语法检测: (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '10px' }}
      >
        <g clipPath="url(#clip0_49_472)">
          <path
            d="M14 10H16V10.757C16.6777 10.3042 17.4656 10.044 18.2796 10.0041C19.0936 9.96414 19.9032 10.146 20.6219 10.5303C21.3406 10.9147 21.9415 11.4869 22.3603 12.1861C22.7791 12.8852 23.0002 13.685 23 14.5V20H21V14.5C21 13.07 19.825 12 18.5 12C17.175 12 16 13.07 16 14.5V20H14V10ZM12 4V6H4V11H12V13H4V18H12V20H2V4H12Z"
            fill="#333333"
          />
        </g>
        <defs>
          <clipPath id="clip0_49_472">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
  链接检测: (
    <>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: '10px' }}
      >
        <g clipPath="url(#clip0_49_449)">
          <path
            d="M14.1484 8.78582L15.6813 10.3187C16.3855 11.0229 16.9442 11.8589 17.3253 12.779C17.7065 13.6991 17.9027 14.6853 17.9027 15.6812C17.9027 16.6772 17.7065 17.6633 17.3253 18.5834C16.9442 19.5035 16.3855 20.3395 15.6813 21.0437L15.2978 21.4262C13.8756 22.8484 11.9466 23.6474 9.93528 23.6474C7.92396 23.6474 5.99501 22.8484 4.57278 21.4262C3.15056 20.0039 2.35156 18.075 2.35156 16.0637C2.35156 14.0523 3.15056 12.1234 4.57278 10.7012L6.1057 12.2341C5.5991 12.7363 5.19668 13.3336 4.92154 13.9917C4.6464 14.6498 4.50396 15.3558 4.5024 16.0691C4.50083 16.7824 4.64018 17.489 4.91244 18.1484C5.18469 18.8077 5.58449 19.4067 6.08889 19.9111C6.59328 20.4155 7.19234 20.8153 7.85166 21.0876C8.51098 21.3598 9.21759 21.4992 9.93091 21.4976C10.6442 21.4961 11.3502 21.3536 12.0083 21.0785C12.6665 20.8033 13.2638 20.4009 13.7659 19.8943L14.1494 19.5108C15.1649 18.495 15.7354 17.1175 15.7354 15.6812C15.7354 14.2449 15.1649 12.8674 14.1494 11.8517L12.6165 10.3187L14.1494 8.7869L14.1484 8.78582ZM21.4262 15.2977L19.8944 13.7659C20.401 13.2637 20.8034 12.6664 21.0785 12.0083C21.3537 11.3502 21.4961 10.6442 21.4977 9.93087C21.4992 9.21754 21.3599 8.51094 21.0876 7.85162C20.8154 7.19229 20.4156 6.59324 19.9112 6.08884C19.4068 5.58445 18.8077 5.18465 18.1484 4.91239C17.4891 4.64014 16.7825 4.50079 16.0692 4.50235C15.3558 4.50391 14.6498 4.64635 13.9917 4.92149C13.3336 5.19663 12.7363 5.59905 12.2341 6.10565L11.8506 6.48915C10.8351 7.50493 10.2647 8.88243 10.2647 10.3187C10.2647 11.755 10.8351 13.1325 11.8506 14.1483L13.3835 15.6812L11.8506 17.2131L10.3188 15.6812C9.61452 14.9771 9.05587 14.141 8.67472 13.2209C8.29358 12.3008 8.0974 11.3147 8.0974 10.3187C8.0974 9.32281 8.29358 8.33665 8.67472 7.41654C9.05587 6.49644 9.61452 5.66042 10.3188 4.95624L10.7023 4.57382C12.1245 3.1516 14.0535 2.3526 16.0648 2.3526C18.0761 2.3526 20.0051 3.1516 21.4273 4.57382C22.8495 5.99604 23.6485 7.92499 23.6485 9.93632C23.6485 11.9476 22.8495 13.8766 21.4273 15.2988L21.4262 15.2977Z"
            fill="#333333"
          />
        </g>
        <defs>
          <clipPath id="clip0_49_449">
            <rect width="26" height="26" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  ),
}

const DetectionCardList: React.FC<{ showLock?: boolean }> = ({ showLock = true }) => {
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
            {IconList[key as '图片检测'] || IconList.标签检测}
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
                      item.rules?.map((ruleItem, index) => {
                        return (
                          <div
                            key={index}
                            className={classNames(styles.resultLabelItem, {
                              [styles.unlock]: isUnlock,
                            })}
                          >
                            {ruleItem ? <div className={styles.error}>{ruleItem?.name ?? ''}</div> : null}
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
  }, [dataSource, isUnlock, showLock, unlockNode])

  return <div className={styles.cardList}>{cardList}</div>
}

export default DetectionCardList
