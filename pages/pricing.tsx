import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Footer from '../components/v1/Footer'
import PriceBanner from '../components/v2/PriceBanner'
import PriceColumn from '../components/v2/PriceColumn'
import ServiceItem from '../components/v2/ServiceItem'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />

      <section className="sec-container">
        <Menu />
        <PriceBanner />
        <PriceColumn />
        <ServiceItem />
      </section>
      <Footer />
    </div>
  )
}

export default Home
