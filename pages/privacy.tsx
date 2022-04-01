import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from '../components/v1/Footer'
import React from 'react'
import Menu from '../components/v1/Menu'
import Doc from '../components/v1/Doc'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="//sys.cdn.myshopastro.com/fe/official-site/0.0.7/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Privacy policy | shopastro_星盘跨境_一站式跨境电商saas服务平台，跨境卖家的出海首选！</title>
        <meta
          name="description"
          content="shopastro，星盘跨境,星盘旗下一站式跨境电商Saas服务平台，为跨境卖家从获客、建站、投放、下单、物流、支付提供一站式解决方案，并有专业的服务团队及服务资源，一对一量身提供专业运营服务，是跨境卖家出海路上最值得信赖的伙伴！"
        />
        <meta
          name="keywords"
          content="独立站,星盘跨境,自建站,出海,跨境,DTC,电商,Saas,跨境物流,跨境支付,Facebook投放,跨境引流,shopastro"
        />
        <meta name="google-site-verification" content="7ThrbtOx2-qkncHO3SxtyWaqIWYB7NAU8xgV3Av6bzc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={''} />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="sec-container">
        <Menu />
        <Doc type="privacy" />
      </section>
      <Footer />
    </div>
  )
}

export default Home
