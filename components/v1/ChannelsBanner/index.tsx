import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import Button from '../base/Button'
import { ultimate, enterprise } from './constant'

type IProps = {}

const ChannelsBanner: React.FC<IProps> = (props) => {
  return (
    <>
      <div className={styles.channelsBannerPlaceholder} />
      <div className={styles.channelsBanner}></div>
    </>
  )
}

export default ChannelsBanner
