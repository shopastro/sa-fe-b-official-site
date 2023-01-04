import { GetServerSideProps } from 'next'
import { GetServerSidePropsContext } from 'next/types'

const Robots = () => null

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const res = ctx.res
  if (res) {
    try {
      res.setHeader('Content-Type', 'text/plain')
      res.write(`User-agent: *
Allow: *
Sitemap: https://www.ishopastro.com/sitemap.xml`)
    } catch (err) {
      res.statusCode = 404
      res.write("Sorry can't find that!")
    } finally {
      res.end()
    }
    return { props: {} }
  } else {
    return { props: {} }
  }
}

export default Robots
