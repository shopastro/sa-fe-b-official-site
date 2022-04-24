import React from 'react'
import Title from '../../v1/base/Title'
import styles from './index.module.scss'

type IProps = {}

const Introduce: React.FC<IProps> = (props) => {
  return (
    <div className={styles.historyBox}>
      <Title size={48} text="发展历程" mbSize={24} />
      <div className={styles.history} id="history" />
    </div>
  )
}

export default Introduce
