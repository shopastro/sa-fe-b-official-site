import React from 'react'
import styles from './index.module.scss'
import { withRouter } from 'next/router'
import FooterItem from './FooterItem'
import { aboutUsList, joinList, contentList } from './constant'

const Vision: React.FC<any> = (props) => {
  // TODO 2022
  return (
    <div className={styles.homeFooter} id="homeFooter">
      <div className={styles.top}>
        <div className={styles.left} />
        <div className={styles.right}>
          <FooterItem title="关于我们" list={aboutUsList} />
          {/* <FooterItem title="解决方案" list={caseList} /> */}
          <FooterItem title="加入我们" list={joinList} />
          <FooterItem title="联系我们" list={contentList} />
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyRight}>©2022 shopastro All Rights Reserved.</span>

        <a href="http://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          浙ICP备2021036268号-1
        </a>
        <span className={styles.police} />
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002016170"
          target="_blank"
          rel="noreferrer"
        >
          浙公网安备 33011002016170号
        </a>
      </div>
    </div>
  )
}

export default withRouter(Vision)
