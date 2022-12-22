import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/Solutions/Banner'
import Customer from '../components/v5/Solutions/Customer'
import Scheme from '../components/v5/Solutions/Scheme'

// 解决方案
const Solutions: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Banner />
        <Scheme />
        <Customer />
        <Footer />
      </div>
    </>
  )
}

export default Solutions
