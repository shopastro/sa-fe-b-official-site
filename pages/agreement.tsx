import type { NextPage } from 'next'
import React from 'react'

import Doc from '../components/v1/Doc'
import Footer from '../components/v1/Footer'
import Menu from '../components/v1/Menu'
import Header from '../components/v2/Header'
import styles from '../styles/Home.module.css'

// 用户协议
const Agreement: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className="sec-container">
        <Menu />
        <Doc type="agreement" />
      </section>
      <Footer />
    </div>
  )
}

export default Agreement
