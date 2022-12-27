import type { NextPage } from 'next'
import { useContainer } from 'unstated-next'

import Header from '../components/v2/Header'
import FixedButton from '../components/v5/FixedButton'
import Footer from '../components/v5/Footer'
import Menu from '../components/v5/Menu'
import Banner from '../components/v5/Solutions/Banner'
import Customer from '../components/v5/Solutions/Customer'
import Scheme from '../components/v5/Solutions/Scheme'
import detectionStore from '../store/detectionStore'

// 解决方案
const Solutions: NextPage = () => {
  const { setShowMoadl, setButtonType } = useContainer(detectionStore)

  return (
    <>
      <Header />
      {/* 背景 */}
      <div className="flex absolute top-0 left-0 w-screen h-[150px] bg-[#F5F6FA] overflow-hidden" />
      {/* 内容 */}
      <div className="relative">
        <Menu />
        <Banner />
        <Scheme />
        <Customer />
        <Footer />
      </div>
      <FixedButton
        onClick={() => {
          setShowMoadl(true)
          setButtonType('stickyBottom')
        }}
      />
    </>
  )
}

export default Solutions
