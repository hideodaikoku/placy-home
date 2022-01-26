import React, {useState} from "react";
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/newspage.module.scss'

const News = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulNews(sort: {order: DESC, fields: date}) {
      edges {
        node {
          title
          url
          date
          image {
            gatsbyImageData
          }
          id
          type
        }
      }
    }
  }
`)
const [checked, setChecked] = useState(false);
 const handleChange =()=> {

 }
  return (
    <Layout>
      <Seo />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.padding}>
          </div>
          <h1 className={styles.title}>
            News
          </h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.sidebar}>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              All
            </label>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              News
            </label>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              Event
            </label>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              Interview
            </label>
            <label>
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />
              Report
            </label>
          </div>
          <div className={styles.content}>
            {
              data.allContentfulNews.edges.map((news) => (
                <div className={styles.newsArticle} key={news.node.id}>
                  <a href={news.node.url}>
                    <div className={styles.imageContainer}>
                      <GatsbyImage image={news.node.image.gatsbyImageData} />
                    </div>
                    <p className={styles.title}>
                      {news.node.title}
                    </p>
                    <small className={styles.date}>
                      {news.node.date.split('T')[0].replaceAll('-', '/')}
                    </small>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default News
