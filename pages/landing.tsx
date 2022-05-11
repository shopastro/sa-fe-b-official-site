import { useState } from 'react'
import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Partner from '../components/v1/Partner'
import Footer from '../components/v1/Footer'
import LandingBg from '../components/v3/LandingBg'
import LandBanner from '../components/v3/LandBanner'
import LandingStep from '../components/v3/LandingStep'

const Home: NextPage = () => {
  const [active, setActive] = useState<
    '' | 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase'
  >('')

  const onActive = (ac: '' | 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase') => {
    setActive(ac)
  }
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <section className="sec-container">
        <Menu />
        <LandBanner />
        <LandingStep onActive={onActive} />
        <Partner />
      </section>
      <Footer />
      <LandingBg />
    </div>
  )
}

export default Home
