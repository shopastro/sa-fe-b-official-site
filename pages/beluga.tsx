import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/BelugaBanner'
import BelugaPackage from '../components/v5/BelugaPackage'
import BelugaQuestion from '../components/v5/BelugaQuestion'
import BelugaSales from '../components/v5/BelugaSales'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

const Beluga: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Banner />
        <BelugaSales />
        <BelugaPackage />
        <BelugaQuestion />
        <Footer />
      </div>
    </>
  )
}

export default Beluga
