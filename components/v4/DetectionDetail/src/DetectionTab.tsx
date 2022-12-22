import classNames from 'classnames'
import { CSSProperties, useMemo, useState } from 'react'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../../store/detectionStore'
import styles from '../index.module.scss'
import { getIcon } from '../utils'

export const DownIcon = () => {
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '6px' }}
    >
      <g clipPath="url(#clip0_67_2601)">
        <path d="M6.49958 8.85723L2.7853 5.14294L10.2139 5.14294L6.49958 8.85723Z" fill="#333333" />
      </g>
      <defs>
        <clipPath id="clip0_67_2601">
          <rect width="13" height="13" fill="white" transform="translate(0 0.500061)" />
        </clipPath>
      </defs>
    </svg>
  )
}

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

export const ErrorIcon = ({ style }: { style?: CSSProperties }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '4px', ...style }}
    >
      <path
        d="M8.00004 1.3334C4.32671 1.3334 1.33337 4.32674 1.33337 8.00007C1.33337 11.6734 4.32671 14.6667 8.00004 14.6667C11.6734 14.6667 14.6667 11.6734 14.6667 8.00007C14.6667 4.32674 11.6734 1.3334 8.00004 1.3334ZM10.24 9.53341C10.4334 9.72674 10.4334 10.0467 10.24 10.2401C10.14 10.3401 10.0134 10.3867 9.88671 10.3867C9.76004 10.3867 9.63337 10.3401 9.53337 10.2401L8.00004 8.70674L6.46671 10.2401C6.36671 10.3401 6.24004 10.3867 6.11337 10.3867C5.98671 10.3867 5.86004 10.3401 5.76004 10.2401C5.56671 10.0467 5.56671 9.72674 5.76004 9.53341L7.29337 8.00007L5.76004 6.46674C5.56671 6.2734 5.56671 5.9534 5.76004 5.76007C5.95337 5.56674 6.27337 5.56674 6.46671 5.76007L8.00004 7.2934L9.53337 5.76007C9.72671 5.56674 10.0467 5.56674 10.24 5.76007C10.4334 5.9534 10.4334 6.2734 10.24 6.46674L8.70671 8.00007L10.24 9.53341Z"
        fill="#CC313D"
      />
    </svg>
  )
}

export const WarningIcon = ({ style }: { style?: CSSProperties }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style ?? { marginRight: '4px' }}
    >
      <path
        d="M11.0002 1.83334C5.94933 1.83334 1.8335 5.94918 1.8335 11C1.8335 16.0508 5.94933 20.1667 11.0002 20.1667C16.051 20.1667 20.1668 16.0508 20.1668 11C20.1668 5.94918 16.051 1.83334 11.0002 1.83334ZM10.3127 7.33334C10.3127 6.95751 10.6243 6.64584 11.0002 6.64584C11.376 6.64584 11.6877 6.95751 11.6877 7.33334V11.9167C11.6877 12.2925 11.376 12.6042 11.0002 12.6042C10.6243 12.6042 10.3127 12.2925 10.3127 11.9167V7.33334ZM11.8435 15.015C11.7977 15.1342 11.7335 15.2258 11.651 15.3175C11.5593 15.4 11.4585 15.4642 11.3485 15.51C11.2385 15.5558 11.1193 15.5833 11.0002 15.5833C10.881 15.5833 10.7618 15.5558 10.6518 15.51C10.5418 15.4642 10.441 15.4 10.3493 15.3175C10.2668 15.2258 10.2027 15.1342 10.1568 15.015C10.111 14.905 10.0835 14.7858 10.0835 14.6667C10.0835 14.5475 10.111 14.4283 10.1568 14.3183C10.2027 14.2083 10.2668 14.1075 10.3493 14.0158C10.441 13.9333 10.5418 13.8692 10.6518 13.8233C10.8718 13.7317 11.1285 13.7317 11.3485 13.8233C11.4585 13.8692 11.5593 13.9333 11.651 14.0158C11.7335 14.1075 11.7977 14.2083 11.8435 14.3183C11.8893 14.4283 11.9168 14.5475 11.9168 14.6667C11.9168 14.7858 11.8893 14.905 11.8435 15.015Z"
        fill="#EC9A20"
      />
    </svg>
  )
}

const DetectionTab = () => {
  const { dataSource } = useContainer(detectionStore)
  const { mobilePerformanceItems, pcPerformanceItems } = dataSource

  const [type, setType] = useState('')

  const moveItem = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>,
    id?: string
  ) => {
    id &&
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    e.stopPropagation()
  }

  const tableList = useMemo(() => {
    const { checkGroupMap } = dataSource
    const tableNodeList: React.ReactNode[] = []

    for (const key in checkGroupMap) {
      const groupInfo = checkGroupMap[key]

      tableNodeList.push(
        <li key={key} className={styles.item}>
          <div
            className={classNames(styles.title, {
              [`${styles.valueSelect}`]: type == `${key}_subGroup`,
            })}
            onClick={(e) => {
              moveItem(e, `${key}_subGroup`)
              setType(`${key}_subGroup`)
            }}
          >
            <DownIcon />
            <div>{key}</div>
          </div>
          <ul className={styles.content}>
            {groupInfo.map((item) => {
              return (
                <li
                  key={item.groupName}
                  className={classNames(styles.value, {
                    [`${styles.valueSelect}`]: type == item.groupName,
                  })}
                  onClick={(e) => {
                    setType(item.groupName ?? '')
                    moveItem(e, item.groupName)
                  }}
                >
                  {item.passed ? (
                    <ScuessIcon />
                  ) : item.errorLevel === 'WARNING' ? (
                    <WarningIcon style={{ marginRight: '4px', width: '16px', height: '16px', marginTop: '1px' }} />
                  ) : (
                    <ErrorIcon />
                  )}
                  {item.groupName}
                </li>
              )
            })}
          </ul>
        </li>
      )
    }

    return tableNodeList
  }, [dataSource, type])

  return (
    <div className={styles.table}>
      <div className={styles.line} />
      <div
        className={classNames(styles.Group, {
          [`${styles.valueSelect}`]: type == 'pc_title_bar',
        })}
        onClick={(e) => {
          moveItem(e, `pc_title_bar`)
          setType('pc_title_bar')
        }}
      >
        <DownIcon />
        PC性能检测
      </div>
      <div className={styles.GroupItemBox}>
        {pcPerformanceItems?.map((it) => {
          return (
            <div
              key={it.name}
              className={classNames(styles.GroupItem, {
                [`${styles.valueSelect}`]: type == `${it.name}_pc`,
              })}
              onClick={(e) => {
                setType(it.name ?? '')
                moveItem(e, `${it.name}_pc`)
                setType(`${it.name}_pc`)
              }}
            >
              {getIcon('pc', it.numericValue, it.name)}
              {it.name}
            </div>
          )
        })}
      </div>
      <div
        className={classNames(styles.Group, {
          [`${styles.valueSelect}`]: type == 'mb_title_bar',
        })}
        onClick={(e) => {
          moveItem(e, `mb_title_bar`)
          setType('mb_title_bar')
        }}
      >
        <DownIcon />
        移动性能检测
      </div>
      <div className={styles.GroupItemBox}>
        {mobilePerformanceItems?.map((it) => {
          return (
            <div
              key={it.name}
              className={classNames(styles.GroupItem, {
                [`${styles.valueSelect}`]: type == `${it.name}_mb`,
              })}
              onClick={(e) => {
                setType(it.name ?? '')
                moveItem(e, `${it.name}_mb`)
                setType(`${it.name}_mb`)
              }}
            >
              {getIcon('mb', it.numericValue, it.name)}
              {it.name}
            </div>
          )
        })}
      </div>
      <div
        className={classNames(styles.Group, {
          [`${styles.valueSelect}`]: type == 'seo_title_bar',
        })}
        onClick={(e) => {
          setType('seo_title_bar')
          moveItem(e, `seo_title_bar`)
        }}
      >
        <DownIcon />
        SEO检测
      </div>
      <ul className={styles.list}>{tableList}</ul>
    </div>
  )
}

export default DetectionTab
