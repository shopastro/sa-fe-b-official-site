import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/B2B/Banner'
import ProductFeatures from '../components/v5/B2B/ProductFeatures'
import Solution from '../components/v5/B2B/Solution'
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
