import type { NextPage } from 'next'
import React from 'react'

import Doc from '../components/v1/Doc'
import Footer from '../components/v1/Footer'
import Menu from '../components/v1/Menu'
import Header from '../components/v2/Header'
import styles from '../styles/Home.module.css'

// 隐私协议
const Privacy: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className="sec-container">
        <Menu />
        <Doc type="privacy" />
      </section>
      <Footer />
    </div>
  )
}

export default Privacy
