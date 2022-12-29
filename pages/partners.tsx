import type { NextPage } from 'next'
import Image from 'next/image'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
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
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[556px] md:h-[700px] overflow-hidden">
        <Image
          width={2872}
          height={1236}
          quality={100}
          src="https://media.cdn.ishopastro.com/upload/images/20221229-101726.png_2022-12-29-02-22-39.png"
          alt=""
        />
      </div>
      <div className="relative pb-[70px] md:pb-0">
        <Menu theme="light" />
        <Banner />
        <Form />
        <TryNow />
        <Footer />
      </div>
      <FixedButton
        onClick={() => {
          const usernameInput = document.getElementById('username')
          if (usernameInput) {
            usernameInput.focus()
            usernameInput.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest'
            })
          }
        }}
      />
    </>
  )
}

export default Partners
