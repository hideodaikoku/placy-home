import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/news.module.scss";

const News = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulNews(limit: 9) {
      edges {
        node {
          title
          url
          date
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`)

  return (
    <div className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          News
        </h1>
      </div>
    </div>
  );
};

export default News;



