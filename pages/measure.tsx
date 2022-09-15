import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Footer from '../components/v1/Footer'
import { CSSProperties } from 'react'
import Detection from '../components/v4/Detection/Detection'
import DetectionDetail from '../components/v4/DetectionDetail/DetectionDetail'
import DetectionStore from '../store/detectionStore'

const Home: NextPage = () => {
  const pageStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  }

  return (
    <div style={pageStyle}>
      <Header />
      <section className="sec-container" id="about">
        <Menu />
        <DetectionStore.Provider>
          <Detection />
          <DetectionDetail />
        </DetectionStore.Provider>
      </section>
      <Footer />
    </div>
  )
}

export default Home
