import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import TopMusicMap from '../components/top-music-map'
import Content from '../components/content'
import App from '../components/app'
import ForShops from '../components/for-shops'
import { Link } from 'react-scroll'
import * as styles from '../styles/music-map.module.scss'

const MusicMap = () => {
  return (
    <Layout>
      <Seo />
      <TopMusicMap />
      <div className={styles.bottomContainer}>
        <section className={styles.leftNav}>
          <ul>
            <Link activeClass="active" to="content" offset={-100}
             spy={true} smooth={true}>
              <li>Content</li>
            </Link>
            <Link activeClass="active" to="app" offset={-100}
             spy={true} smooth={true}>
              <li>App</li>
            </Link>
            <Link activeClass="active" to="for-shops" offset={-100}
             spy={true} smooth={true}>
              <li>For shops</li>
            </Link>
          </ul>
        </section>
        <section className={styles.main}>
          <Content />
          <App />
          <ForShops />
        </section>
      </div>
    </Layout>
  )
}

export default MusicMap
