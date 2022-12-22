import type { NextPage } from 'next'
import { CSSProperties } from 'react'

import Footer from '../components/v1/Footer'
import Menu from '../components/v1/Menu'
import Header from '../components/v2/Header'
import Detection from '../components/v4/Detection/Detection'
import DetectionDetail from '../components/v4/DetectionDetail/DetectionDetail'

// seo 检测
const Measure: NextPage = () => {
  const pageStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh'
  }

  return (
    <div style={pageStyle}>
      <Header />
      <section className="sec-container" id="about">
        <Menu />
        <Detection />
        <DetectionDetail />
      </section>
      <Footer />
    </div>
  )
}

export default Measure
