import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Footer from '../components/v1/Footer'
import AboutBanner from '../components/v1/AboutBanner'
import Introduce from '../components/v1/Introduce'
import ServicePositioning from '../components/v1/ServicePositioning'
import Office from '../components/v1/Office'
import JoinUs from '../components/v1/JoinUs'
import ContentUs from '../components/v1/ContentUs'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />

      <section className="sec-container" id="about">
        <Menu />
        <AboutBanner />
        <Introduce />
        <ServicePositioning />
        <Office />
        <JoinUs />
        <ContentUs />
      </section>
      <Footer />
    </div>
  )
}

export default Home
