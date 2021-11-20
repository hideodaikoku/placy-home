import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Top from '../components/top'
import Vision from '../components/vision'
import About from '../components/about'
import People from '../components/people'
import News from '../components/news'
import Company from '../components/company'
import Scrollspy from 'react-scrollspy'
import * as styles from '../styles/index.module.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Top />
      <div className={styles.bottomContainer}>
        <section className={styles.leftNav}>
        </section>
        <section className={styles.main}>
          <Vision />
          <About />
          <People />
          <News />
          <Company />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
