import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/Beluga/Banner'
import Package from '../components/v5/Beluga/Package'
import Question from '../components/v5/Beluga/Question'
import Sales from '../components/v5/Beluga/Sales'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

const Beluga: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Banner />
        <Sales />
        <Package />
        <Question />
        <Footer />
      </div>
    </>
  )
}

export default Beluga
