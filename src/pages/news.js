import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/newspage.module.scss'
import Box from '../images/unchecked.svg'
import Checkbox from '../images/checked.svg'

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
  const [checkedAll, setCheckedAll] = useState(true);
  const [filters, setFilters] = useState([false, false, false]);
  const [newsData, setNews] = useState(data.allContentfulNews.edges);
  const categories = ["Event", "Interview", "Report"]

  const handleChangeAll = () => {
    if(checkedAll){
      setCheckedAll(false)
      setFilters([false, false, false])
    } else{ 
      setCheckedAll(true)
      setFilters([true, true, true])
    }
  }

  const handleChange = (position) => {
    setCheckedAll(false)
    const updatedCheckedState = filters.map((item, index) =>
      index === position ? !item : item
    );

    setFilters(updatedCheckedState);
  }

  useEffect(()=> {
    var res = []
    if(!checkedAll) {
      filters.forEach((filter, index)=> filter? res.push(categories[index]):null)
      const found = data.allContentfulNews.edges.filter(news=> news.node.type.some(c=>res.includes(c)))
      setNews(found)
    } else{
      setNews(data.allContentfulNews.edges)
    }
    
  }, [filters])

  return (
    <Layout>
      <Seo />
      <div className={styles.container}>
          <ul className={styles.sidebar}>
            <li className={styles.listItem} onClick={()=>handleChangeAll()}>
              <span className={styles.listIcon}>{
                checkedAll ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>All</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(0)}>
              <span className={styles.listIcon}>{
                filters[0] ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>Event</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(1)}>
              <span className={styles.listIcon}>{
                filters[1] ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>Interview</span>
            </li>
            <li className={styles.listItem} onClick={()=> handleChange(2)}>
              <span className={styles.listIcon}>{
                filters[2] ?
                  <Checkbox />
                  : <Box />
              }</span>
              <span className={styles.listLabel}>Report</span>
            </li>
          </ul>

          <div className={styles.content}>
            <h1 className={styles.title}>
              News
            </h1>
            <div className={styles.articles}>
            {
              newsData?
                newsData.map((news) => (
                  <div className={styles.newsArticle} key={news.node.id}>
                    <a href={news.node.url}>
                      <div className={styles.imageContainer}>
                        <GatsbyImage image={news.node.image.gatsbyImageData} />
                      </div>
                      <p className={styles.newsTitle}>
                        {news.node.title}
                      </p>
                      <small className={styles.date}>
                        {news.node.date.split('T')[0].replaceAll('-', '/')}
                      </small>
                      <small>
                        {news.node.type}
                      </small>
                    </a>
                  </div>
                ))
              : null
            }
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default News
