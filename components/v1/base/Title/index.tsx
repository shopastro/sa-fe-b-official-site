import React, { useMemo } from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'

type IProps = {
  size?: 14 | 24 | 26 | 30 | 34 | 36
  mbSize?: 14 | 15 | 18 
  onClick?: () => any
  text: string
  color?: 'blue' | 'white'
}

const Title: React.FC<IProps> = (props) => {
  const { size = 24, onClick, text, color = '', mbSize = 18 } = props
  const fontColor = useMemo(() => {
    if (color === 'blue') {
      return '#004ED1'
    }
    if (color === 'white') {
      return '#fff'
    }
    return '#333'
  }, [color])

  return (
    <span
      className={classNames(styles.titleBox, styles[`titleBox${size}`], styles[`titleBoxMb${mbSize}`])}
      style={{ color: fontColor }}
    >
      {text}
    </span>
  )
}

export default Title
