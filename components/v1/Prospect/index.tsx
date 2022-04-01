import React from 'react'
import Title from '../base/Title'
import styles from './index.module.scss'

type IProps = {}

const Prospect: React.FC<IProps> = (props) => {
  return (
    <div className={styles.prospect}>
      <Title text="星盘 shopastro" mbSize={15} color="blue" />
      <div className={styles.title}>懂中国卖家，更懂海外买家</div>
      <div className={styles.desc}>让中国品牌卖家享受更好的商业服务</div>
      <ul className={styles.item}>
        <li className={styles.site}>
          <div className={styles.slogan}>高效搭建DTC品牌独立站</div>
        </li>
        <li className={styles.saas}>
          <div className={styles.slogan}>强大的SaaS后台数据系统</div>
        </li>
        <li className={styles.analyse}>
          <div className={styles.slogan}>专业的行业运营分析指导</div>
        </li>
        <li className={styles.service}>
          <div className={styles.slogan}>7*24小时 1v1客户服务</div>
        </li>
      </ul>
    </div>
  )
}

export default Prospect
