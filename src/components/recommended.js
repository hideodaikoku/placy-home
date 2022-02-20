import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import * as styles from "../styles/recommendation.module.scss";

const Recommendations = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {author: {ne: null}}}) {
        nodes {
          frontmatter {
            title
            author
            place
            slug
            date
            ogp
          }
        }
      }
    }
  `);
  const articles = data.allMarkdownRemark.nodes;
  for (let i = articles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = articles[i];
    articles[i] = articles[j];
    articles[j] = temp;
  }
  articles.filter((article) => article.frontmatter.slug !== props.slug);
  const top = articles.slice(0, 6);

  return (
    <div className={styles.container}>
      {top.map((article, idx) => (
        <div className={styles.article} key={idx}>
          <div className={styles.imageContainer}>
            <Link to={`/post-quarantine-urbanism/${article.frontmatter.slug}`}>
              <img src={article.frontmatter.ogp} alt={article.slug} />
              <div className={styles.overlay}></div>
            </Link>
          </div>
          <h1>{article.frontmatter.title}</h1>
          <p>{article.frontmatter.author}</p>
          <p>{article.frontmatter.place}</p>
          <p>{article.frontmatter.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;