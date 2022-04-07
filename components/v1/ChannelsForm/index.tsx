import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { list } from './constant'
import Form from '../base/Form'

type IProps = {}

const ChannelsForm: React.FC<IProps> = (props) => {
  return (
    <div className={styles.channelsForm}>
      <div className={styles.descBox}>
        <div className={styles.name}>星盘跨境 shopastro</div>
        <div className={styles.slogan}>中国品牌出海一站式全链路服务商</div>
        <div className={styles.desc}>
          <div>
            星盘跨境
            shopastro，依托一站式SaaS电商服务平台，融合独立站搭建与品牌海外运营于一体，赋能中国品牌全球化，助力品牌打造海外私域生态。
          </div>
          <div>我们期待伙伴们的加入，一起助力中国品牌出海！</div>
        </div>
      </div>
      <div className={styles.formBox}  id="ChannelsForm">
        <div className={styles.formTitle}>渠道合作伙伴申请表</div>
        <div className={styles.formDesc}>终于等到你，快来成为我们的合作伙伴，一起让中国跨境卖家享受更好的商业服务</div>
        <div className={styles.form}>
          <Form list={list} type="agents" />
        </div>
      </div>
    </div>
  )
}

export default ChannelsForm
