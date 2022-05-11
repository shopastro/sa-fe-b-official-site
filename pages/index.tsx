import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Cards from '../components/v1/Cards'
import Banner from '../components/v1/Banner'
import Menu from '../components/v1/Menu'
import AboutShopastro from '../components/v1/AboutShopastro'
import Prospect from '../components/v1/Prospect'
import Partner from '../components/v1/Partner'
import Footer from '../components/v1/Footer'
import HomeBg from '../components/v1/HomeBg'
// import Pendant from '../components/common/Pendant'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <section className="sec-container">
        <Menu />
        <Banner />
        <AboutShopastro />
        <Cards />

        <Prospect />
        <Partner />
      </section>
      <Footer />
      {/*  */}
      <HomeBg />
      {/* <Pendant /> */}
    </div>
  )
}

export default Home
