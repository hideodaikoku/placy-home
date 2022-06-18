import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import * as styles from "../styles/relevant-articles.module.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import Post from "../components/post"

const RelevantArticles = (props) => {
    const data = useStaticQuery(graphql`
    {
        allContentfulEntry(sort: {fields: node_locale}) {
          edges {
            node {
              ... on ContentfulNews {
                id
                title
                date(formatString: "YY/MM/DD")
                internal {
                  type
                }
                image {
                  gatsbyImageData
                }
                slug
              }
              ... on ContentfulProjects {
                id
                title
                internal {
                  type
                }
                summary {
                  summary
                }
                image {
                  gatsbyImageData
                }
                slug
              }
              ... on ContentfulFeature {
                id
                slug
                title
                date(formatString: "YY/MM/DD")
                image {
                  gatsbyImageData
                }
                internal {
                  type
                }
                summary {
                    summary
                }
              }
            }
          }
        }
      }
    `)

    const articles = data.allContentfulEntry.edges;
    for (let i = articles.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * i);
        const temp =articles[i];
        articles[i] = articles[j];
        articles[j] = temp;
    }
    articles.filter(({node}) => node.id != props.id);
    const top = articles.slice(0,6);

    return (
        <div className={styles.posts}>
            {top.map((article) => (
              <Post article={article} />
                // <div key={article.node.id} className={styles.post}>
                //   <Link to={`/${article.node.slug}`}>
                //     <GatsbyImage 
                //     image={article.node.image.gatsbyImageData}
                //     className={styles.imgContainer}></GatsbyImage>
                //     <div className={styles.postInfo}>
                //       <div className={styles.type}>{article.node.internal.type.replace("Contentful","")}</div>
                //       <div className={styles.date}>{article.node.date && "20"+article.node.date}</div>
                //       <h3 className={styles.postTitle}>{article.node.title}</h3>
                //       <p className={styles.postDesc}>{article.node.summary && article.node.summary.summary}</p>
                //     </div>
                //   </Link>
                // </div>
            ))}
        </div>
    )
}

export default RelevantArticles;