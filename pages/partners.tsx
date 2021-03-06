import type { NextPage } from 'next'
import Header from '../components/v2/Header'
import Menu from '../components/v1/Menu'
import Footer from '../components/v1/Footer'
import EcologicalTop from '../components/v1/Ecological'
import EcologicalForm from '../components/v1/EcologicalForm '

const Ecological: NextPage = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />

      <section className="sec-container">
        <Menu />
        <EcologicalTop />
        <EcologicalForm />
      </section>
      <Footer />
    </div>
  )
}

export default Ecological
