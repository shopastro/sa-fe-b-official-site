import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v3/Menu'
import Partner from '../components/v1/Partner'
import Footer from '../components/v1/Footer'
import LandingBg from '../components/v3/LandingBg'
import LandBanner from '../components/v3/LandBanner'
import LandingStep from '../components/v3/LandingStep'
import LandingAIEngine from '../components/v3/LandingAIEngine'
import LandingTemplate from '../components/v3/LandingTemplate'
import LandingGuide from '../components/v3/LandingGuide'
import Full from '../components/v3/Full'
import AISystem from '../components/v3/AISystem'
import Form from '../components/v3/Form'

const Home: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <section className="sec-landing-container">
        <Menu text="联系我们" />
        <LandBanner />
        <LandingStep />
        <LandingAIEngine />
        <LandingTemplate />
        <LandingGuide />
        <Full />
        <AISystem />
        <Form />
        <Partner />
      </section>
      <Footer />
      <LandingBg />
    </div>
  )
}

export default Home
