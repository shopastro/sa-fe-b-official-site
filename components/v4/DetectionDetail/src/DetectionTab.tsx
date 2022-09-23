import classNames from 'classnames'
import { CSSProperties, useMemo, useState } from 'react'
import { useContainer } from 'unstated-next'
import detectionStore from '../../../../store/detectionStore'
import styles from '../index.module.scss'

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

export const ScuessIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '4px' }}
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

export default function () {
  const { dataSource } = useContainer(detectionStore)
  const [type, setType] = useState('')

  const handleClick = (type: string) => {
    const { offsetTop = 0 } = document.getElementById(type) || {}
    let offset = -150

    setType(type)

    window.scrollTo({
      top: offsetTop - offset,
      left: 0,
      behavior: 'smooth',
    })
  }

  const tableList = useMemo(() => {
    const { checkGroupMap } = dataSource
    const tableNodeList: React.ReactNode[] = []

    for (const key in checkGroupMap) {
      const groupInfo = checkGroupMap[key]

      tableNodeList.push(
        <li key={key} className={styles.item}>
          <div className={styles.title}>
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
                  onClick={() => handleClick(item.groupName ?? '')}
                >
                  {item.passed ? <ScuessIcon /> : <ErrorIcon />}
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
      <ul className={styles.list}>{tableList}</ul>
    </div>
  )
}
