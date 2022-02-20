import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/quarantine-article.module.scss";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const QuarantineArticles = ({articles}) => {
  const firstPost = articles[0]

  return (
    <div className={styles.container}>
      <div className={styles.articleContainer}>
        {articles
          .map(post => (
                post === firstPost ? 
                <div key={post.node.id} className={styles.mainArticle}>
                  <div className={styles.imageContainer}>
                    <Link to={"/post-quarantine-urbanism/" + post.node.frontmatter.slug}>
                      <GatsbyImage
                        image={getImage(post.node.frontmatter.img)}
                        className={styles.image}
                        alt="latest-article"
                      />
                      <div className={styles.overlay}></div>
                    </Link>
                  </div>
                  <div className={styles.mainTextContainer}>
                    <h2>Latest Article</h2>
                    <h3 className={styles.country}>
                      {post.node.frontmatter.title}
                    </h3>
                    <small>{post.node.frontmatter.date}</small>
                    <p className={styles.author}>
                      <i>{post.node.frontmatter.author}</i>
                    </p>
                    <p className={styles.title}>
                      {post.node.frontmatter.place}
                    </p>
                    <p className={styles.excerpt}>
                      {
                        post.node.frontmatter.excerpt
                      }
                    </p>
                    <Link
                      to={"/post-quarantine-urbanism/" + post.node.frontmatter.slug}
                      style={{ textDecoration: "underline" }}
                    >
                      Read More
                    </Link>
                  </div>
                </div> 
                :
                <div key={post.node.id} className={styles.article}>
                  <div className={styles.imageContainer}>
                    <Link to={"/post-quarantine-urbanism/" + post.node.frontmatter.slug}>
                      <GatsbyImage
                        image={getImage(post.node.frontmatter.img)}
                        className={styles.image} alt="article-img"/>
                      <div className={styles.overlay}></div>
                    </Link>
                  </div>
                  <h1 className={styles.country}>
                    {post.node.frontmatter.place}
                  </h1>
                  <small>{post.node.frontmatter.date}</small>
                  <p className={styles.author}>
                    <i>{post.node.frontmatter.author}</i>
                  </p>
                  <p className={styles.title}>
                    {post.node.frontmatter.title}
                  </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default QuarantineArticles;