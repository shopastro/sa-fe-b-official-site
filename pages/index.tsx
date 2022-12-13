import type { NextPage } from 'next'

import Header from '../components/v2/Header'
import Banner from '../components/v5/Banner'
import Cards from '../components/v5/Cards'
import Menu from '../components/v5/Menu'
import Plugins from '../components/v5/Plugins'
import Solution from '../components/v5/Solution'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div>
        <Menu />
        <Banner />
        <Plugins />
        <Cards />
        <Solution />
      </div>
    </>
  )
}

export default Home
