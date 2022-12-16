import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

const B2B: NextPage = () => {
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

export default B2B
