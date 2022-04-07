import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Footer from '../components/v1/Footer'
import ChannelsBanner from '../components/v1/ChannelsBanner'
import ChannelsForm from '../components/v1/ChannelsForm'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />

      <section className="sec-container">
        <Menu />
        <ChannelsBanner />
        <ChannelsForm />
      </section>
      <Footer />
    </div>
  )
}

export default Home
