import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "../styles/relevant-articles.module.scss";
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

    const articles = data.allContentfulEntry.edges.filter(({node}) => {
      if((node.title !== "dummy-post") && (node.title !== props.id)) {
        return true
      }
      return false
    });
    for (let i = articles.length - 1; i > 0; i --) {
        const j = Math.floor(Math.random() * i);
        const temp =articles[i];
        articles[i] = articles[j];
        articles[j] = temp;
    }
    articles.filter(({node}) => node.id !== props.id);
    const top = articles.slice(0,6);

    return (
        <div className={styles.posts}>
            {top.map((article) => (
              <Post article={article} />
            ))}
        </div>
    )
}

export default RelevantArticles;