import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../styles/news.module.scss";

const News = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulNews(sort: {order: DESC, fields: date}, limit: 6) {
      edges {
        node {
          title
          url
          date
          image {
            gatsbyImageData
          }
          id
        }
      }
    }
  }
`)

  return (
    <div id="news" className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          News
        </h1>
      </div>
      <div className={styles.container}>
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
      <Link to='/news' className={styles.button}>
        <p className={styles.buttonText}>
          View all
        </p>
        <span className={styles.arrow}>
          <svg width="50" height="8" viewBox="0 0 39 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.1466 4.35355C39.3418 4.15829 39.3418 3.84171 39.1466 3.64645L35.9646 0.464466C35.7693 0.269204 35.4528 0.269204 35.2575 0.464466C35.0622 0.659728 35.0622 0.976311 35.2575 1.17157L38.0859 4L35.2575 6.82843C35.0622 7.02369 35.0622 7.34027 35.2575 7.53553C35.4528 7.7308 35.7693 7.7308 35.9646 7.53553L39.1466 4.35355ZM0.113281 4.5H38.793V3.5H0.113281V4.5Z" fill="black" />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default News;



