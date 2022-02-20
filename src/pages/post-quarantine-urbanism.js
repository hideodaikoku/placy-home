import React from "react";
import Layout from "../components/layout";
import QuarantineTop from "../components/quarantine-top";
import QuarantineArticles from "../components/quarantine-articles";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const Quarantine = ({data}) => {
  return (
    <Layout color="white">
      <Seo />
      <QuarantineTop />
      <QuarantineArticles articles={data.allMarkdownRemark.edges} />
    </Layout>
  );
};

export const articlesQuery = graphql`
  {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {author: {ne: null}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            author
            place
            title
            date
            excerpt
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default Quarantine;