import React, { useState } from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/projects.module.scss'
import { Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulProjects {
      edges {
        node {
          id
          image {
            gatsbyImageData
          }
          slug
          title
          type
          summary {
            summary
          }
        }
      }
    }
  }
  `)
  const [projectsData] = useState(data.allContentfulProjects.edges);
  return (
    <Layout>
      <Seo />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Projects
          </h1>
          <div className={styles.projects}>
            {
              projectsData?
              projectsData.map((projects) => (
                <div className={styles.projectContainer} key={projects.node.id}>
                    <div className={styles.imageContainer}>
                      <GatsbyImage image={projects.node.image.gatsbyImageData} />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.projectTitle}>
                        {projects.node.title}
                      </h3>
                      <p className={styles.paragraph}>
                        {projects.node.summary.summary}
                      </p>
                    </div>
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

export default Projects
