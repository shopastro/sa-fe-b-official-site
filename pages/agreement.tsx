import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import styles from '../styles/Home.module.css'
import React from 'react'
import Footer from '../components/v1/Footer'
import Menu from '../components/v1/Menu'
import Doc from '../components/v1/Doc'

const Home: NextPage = () => {
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

export default Home
