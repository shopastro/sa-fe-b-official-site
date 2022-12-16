import type { NextPage } from 'next'
import Image from 'next/image'

import Header from '../components/v2/Header'
import DTCChoose from '../components/v5/DTCChoose'
import DTCPackage from '../components/v5/DTCPackage'
import DTCQuestion from '../components/v5/DTCQuestion'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'

const DTC: NextPage = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center absolute top-0 left-0 h-[1132px] overflow-hidden">
        <Image
          src="https://media.cdn.ishopastro.com/upload/images/20221215-195440.jpeg_2022-12-15-12-03-07.jpg"
          width={2878}
          height={2400}
          quality={100}
          alt="icon"
        />
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{ background: 'linear-gradient(#FFF, #FFF 60%, rgba(0,0,0,0))' }}
        />
      </div>
      <div className="relative">
        <Menu />
        <DTCPackage />
        <DTCChoose />
        <DTCQuestion />
        <Footer />
      </div>
    </>
  )
}

export default DTC
