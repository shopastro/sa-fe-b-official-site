import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/B2BBanner'
import ProductFeatures from '../components/v5/B2BProductFeatures'
import Solution from '../components/v5/B2BSolution'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

const B2B: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Banner />
        <ProductFeatures />
        <Solution />
        <Footer />
      </div>
    </>
  )
}

export default B2B
