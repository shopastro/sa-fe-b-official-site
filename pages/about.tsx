import type { NextPage } from 'next'
import Image from 'next/image'

import Header from '../components/v2/Header'
import Banner from '../components/v5/About/Banner'
import Concat from '../components/v5/About/Concat'
import Join from '../components/v5/About/Join'
import Position from '../components/v5/About/Position'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import TryNow from '../components/v5/TryNow'

const About: NextPage = () => {
  return (
    <>
      <Header />
      <div className="absolute top-0 left-0 w-screen">
        <div>
          <Image
            width={1440}
            height={752}
            quality={100}
            layout="responsive"
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/c476ab8de6aefccf7353451a4ffbd811.svg"
            alt="banner bg"
          />
        </div>
        <div className="mt-[-20px]">
          <Image
            width={1440}
            height={475}
            quality={100}
            layout="responsive"
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/a9cee083d86ce63cac86e23e772a8257.svg"
            alt="banner bg"
          />
        </div>
        <div className="absolute top-0 right-0 w-[671px]">
          <Image
            width={671}
            height={577}
            quality={100}
            layout="responsive"
            src="https://media.cdn.ishopastro.com/svg/shopastrohome/bd53c15fb3ac39ecdaac89c3bfbe6922.svg"
            alt="banner bg"
          />
        </div>
      </div>
      <div className="relative">
        <Menu />
        <Banner />
        <Position />
        <Join />
        <Concat />
        <TryNow />
        <Footer />
      </div>
    </>
  )
}

export default About
