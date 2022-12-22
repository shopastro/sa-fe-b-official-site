import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

// 渠道合作
const Partners: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Footer />
      </div>
    </>
  )
}

export default Partners
