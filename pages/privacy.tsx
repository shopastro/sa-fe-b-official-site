import type { NextPage } from 'next'
import React from 'react'

import Doc from '../components/v1/Doc'
import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

// 隐私协议
const Privacy: NextPage = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <Menu />
        <div className="relative md:max-w-[1440px] md:px-[120px] md:mx-auto">
          <Doc type="privacy" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Privacy
