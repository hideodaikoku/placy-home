import * as React from "react";
import Layout from '../components/layout'
import Seo from '../components/seo'
import Top from '../components/top'
import Vision from '../components/vision'
import People from '../components/people'
import Company from '../components/company'
import { Link } from 'react-scroll'
import * as styles from '../styles/aboutpage.module.scss'

const AboutPage = () => {
  return (
    <Layout>
      <Seo />
      <Top />
      <div className={styles.bottomContainer}>
        <section className={styles.leftNav}>
          <ul>
            <Link activeClass="active" to="vision" offset={-100} spy={true} smooth={true}>
              <li>
                Vision
              </li>
            </Link>
            <Link activeClass="active" to="ourBusiness" offset={-100} spy={true} smooth={true}>
              <li>
                Our Business
              </li>
            </Link>
            <Link activeClass="active" to="people" offset={-100} spy={true} smooth={true}>
              <li>
                People
              </li>
            </Link>
            <Link activeClass="active" to="company" offset={-100} spy={true} smooth={true}>
              <li>
                Company
              </li>
            </Link>
          </ul>
        </section>
        <section className={styles.main}>
          <Vision />
          <People />
          <Company />
        </section>
      </div>
    </Layout>
  )
}

export default AboutPage
