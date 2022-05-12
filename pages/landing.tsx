import { useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Partner from '../components/v1/Partner'
import Footer from '../components/v1/Footer'
import LandingBg from '../components/v3/LandingBg'
import LandBanner from '../components/v3/LandBanner'
import LandingStep from '../components/v3/LandingStep'
import LandingAIEngine from '../components/v3/LandingAIEngine'
import LandingTemplate from '../components/v3/LandingTemplate'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <section className="sec-landing-container">
        <Menu />
        <LandBanner />
        <LandingStep />
        <LandingAIEngine />
        <LandingTemplate />
        <Partner />
      </section>
      <Footer />
      <LandingBg />
    </div>
  )
}

export default Home
