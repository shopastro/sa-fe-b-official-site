import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'

type IProps = {}

const Full: React.FC<IProps> = (props) => {
  return (
    <div className={styles.full}>
      <div className={styles.title}>一站式出海更简单、更高效</div>
      <div className={styles.desc}>只需一次选择  无需再选其他</div>
    </div>
  )
}

export default Full
