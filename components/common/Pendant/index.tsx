import React, { useState, useEffect } from 'react'
import Modal from '../../v1/base/Modal'
import Document from 'next'
import styles from './index.module.scss'
import classNames from 'classnames'
// import classNames from 'classnames'

type IProps = {
  size?: 14 | 24 | 26 | 34
  onClick?: () => any
}

const Pendant: React.FC<IProps> = () => {
  const [isPc, setIsPc] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleResize = () => {
    if (document.body.clientWidth < 770) {
      setIsPc(false)
    } else {
      setIsPc(true)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.addEventListener('resize', () => {})
    }
  }, [])

  const initUDesk = (a: any, h: any, c: any, b: any, f: any, g?: any) => {
    a['UdeskApiObject'] = f
    a[f] =
      a[f] ||
      function () {
        ;(a[f].d = a[f].d || []).push(arguments)
      }
    g = h.createElement(c)
    g.async = 1
    g.charset = 'utf-8'
    g.src = b
    c = h.getElementsByTagName(c)[0]
    c.parentNode.insertBefore(g, c)
  }

  // useEffect(() => {
  //   initUDesk(window, document, 'script', 'https://assets-cli.s4.udesk.cn/im_client/js/udeskApi.js', 'ud')
  //   ud({
  //     code: '1b7f137j',
  //     link: 'https://1381583.s4.udesk.cn/im_client/?web_plugin_id=34130',
  //     targetSelector: '#pendantItem',
  //   })
  // }, [])

  return (
    <div className={styles.pendantContainer}>
      {/* <Script id="uDesk">
        {`(function(a,h,c,b,f,g){a["UdeskApiObject"]=f;a[f]=a[f]||function(){(a[f].d=a[f].d||[]).push(arguments)};g=h.createElement(c);g.async=1;g.charset="utf-8";g.src=b;c=h.getElementsByTagName(c)[0];c.parentNode.insertBefore(g,c)})(window,document,"script","https://assets-cli.s4.udesk.cn/im_client/js/udeskApi.js","ud");
            ud({
                "code": "1b7f137j",
                "link": "https://1381583.s4.udesk.cn/im_client/?web_plugin_id=34130",
                "targetSelector": "#pendantItem",
              
            });
        `}
      </Script> */}
      <ul>
        <li>
          <div
            className={classNames(styles.pendantItem)}
            id={'pendantItem'}
            onClick={() => {
              ud('showPanel')
            }}
          >
            {isPc ? (
              <>
                <div className={styles.imgItem} />
                <div className={styles.textItem}> 在线咨询</div>
              </>
            ) : (
              <>
                <span className={styles.imgItem} />
                <span className={styles.textItem}>在线咨询</span>
              </>
            )}
          </div>
        </li>
        <li>
          <div className={styles.pendantItem}>
            <div className={styles.imgItem} />
            <div className={styles.textItem}>电话咨询</div>
          </div>
          <div className={styles.arrow_box}>
            <div className={styles.boxText}>出海咨询热线: 400-669-2228</div>
          </div>
        </li>
        <li>
          <div className={styles.pendantItem}>
            <div className={styles.imgItem} />
            <div className={styles.textItem}> 微信咨询</div>
          </div>
          <div className={styles.arrow_box}>
            <div className={styles.imgBcg}></div>
          </div>
        </li>
        <li>
          <div
            className={classNames(styles.pendantItem)}
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <div className={styles.imgItem} />
            <div className={styles.textItem}>立即试用</div>
          </div>
        </li>
      </ul>

      {isOpen && <Modal visiable={isOpen} handleClose={handleClose} />}
    </div>
  )
}

export default Pendant
