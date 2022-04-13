import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Footer from '../components/v1/Footer'
import HomeBg from '../components/v1/HomeBg'
import SolutionBanner from '../components/v1/SolutionBanner'
import Service from '../components/v1/Service'
import Full from '../components/v1/Full'
import SolutionCase from '../components/v1/SolutionCase'
import Partner from '../components/v1/Partner'
import { useState } from 'react'

const Home: NextPage = () => {
  const [active, setActive] = useState<
    '' | 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase'
  >('')

  const onActive = (ac: 'brand' | 'site' | 'seo' | 'launches' | 'operation' | 'email' | 'repurchase') => {
    setActive(ac)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Header />

      <section className="sec-container">
        <Menu />
        <SolutionBanner onActive={onActive} />
        {/* <Service /> */}
        <SolutionCase active={active} onActive={onActive} />

        <Full />

        <Partner />
      </section>

      <Footer />
    </div>
  )
}

export default Home
