import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import { list } from './constant'
import Form from '../base/Form'

type IProps = {}

const EcologicalForm: React.FC<IProps> = (props) => {
  return (
    <div className={styles.ecologicalForm}>
      <div className={styles.formBox}>
        <div className={styles.formTitle}>加入生态联盟 共铸跨境生态圈</div>

        <div className={styles.form}>
          <Form list={list} row='row2' type="partners" />
        </div>
      </div>
    </div>
  )
}

export default EcologicalForm
