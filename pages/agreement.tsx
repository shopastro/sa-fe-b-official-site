import type { NextPage } from 'next'
import React from 'react'

import Doc from '../components/v1/Doc'
import Header from '../components/v2/Header'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

// 用户协议
const Agreement: NextPage = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <Menu />
        <div className="relative md:max-w-[1440px] md:px-[120px] md:mx-auto">
          <Doc type="agreement" />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Agreement
