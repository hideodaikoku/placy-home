import * as React from "react";
import { createRef } from 'react';
import Layout from '../components/layout'
import Seo from '../components/seo'
import Top from '../components/top'
import Vision from '../components/vision'
import About from '../components/about'
import People from '../components/people'
import News from '../components/news'
import Company from '../components/company'
import { Link } from 'react-scroll'
import * as styles from '../styles/index.module.scss'

const IndexPage = () => {
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
            <Link activeClass="active" to="about" offset={-100} spy={true} smooth={true}>
              <li>
                Our Business
              </li>
            </Link>
            <Link activeClass="active" to="people" offset={-100} spy={true} smooth={true}>
              <li>
                People
              </li>
            </Link>
            <Link activeClass="active" to="news" offset={-100} spy={true} smooth={true}>
              <li>
                News
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
          <About />
          <People />
          <News />
          <Company id="company" />
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
