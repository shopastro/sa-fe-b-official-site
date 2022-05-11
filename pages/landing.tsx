import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Partner from '../components/v1/Partner'
import Footer from '../components/v1/Footer'
import LandingBg from '../components/v3/LandingBg'
import TopBanner from '../components/v3/TopBanner'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <section className="sec-container">
        <Menu />
        <TopBanner />
        <Partner />
      </section>
      <Footer />
      <LandingBg />
    </div>
  )
}

export default Home
