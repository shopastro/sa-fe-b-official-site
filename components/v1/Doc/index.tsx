import React from 'react'
import styles from './index.module.scss'
import { privacy, agreement } from './constant'

type IProps = {
  type: 'agreement' | 'privacy'
}

const Doc: React.FC<IProps> = (props) => {
  const { type = 'agreement' } = props

  return (
    <div
      className={styles.docBox}
      dangerouslySetInnerHTML={{
        __html: type === 'agreement' ? agreement : privacy,
      }}
      id={type === 'agreement' ? 'agreement' : 'privacy'}
    ></div>
  )
}

export default Doc
