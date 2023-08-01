import TopicsBox from '../components/common/TopicsBox'
import Footer from '../components/v1/Footer'
import Menu from '../components/v1/Menu'
import Header from '../components/v2/Header'
import { getTopics } from '../service/index'

const CategoryGoodsList = ({ topics = [] }) => {
  return (
    <div style={{ position: 'relative' }}>
      <Header />

      <section className="sec-container">
        <Menu />
        <TopicsBox topics={topics} />
      </section>
      <Footer />
    </div>
  )
}

CategoryGoodsList.getInitialProps = async () => {
  const topics = await getTopics()
  return {
    topics: topics
  }
}

export default CategoryGoodsList
