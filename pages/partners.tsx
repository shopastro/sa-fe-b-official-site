import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/Partners/Banner'
import Form from '../components/v5/Partners/Form'
import TryNow from '../components/v5/TryNow'

// 渠道合作
const Partners: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Banner />
        <Form />
        <TryNow />
        <Footer />
      </div>
    </>
  )
}

export default Partners
