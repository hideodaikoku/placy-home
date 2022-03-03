import React, { useState } from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from '../styles/projects.module.scss'

const Projects = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulProjects(sort: {order: ASC, fields: createdAt}) {
      edges {
        node {
          id
          image {
            gatsbyImageData
          }
          slug
          link
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
                      <a href={projects.node.type? `/${projects.node.slug}` : projects.node.link}>
                      <GatsbyImage image={projects.node.image.gatsbyImageData} className={styles.image}
                        aspectRatio={5/4} layout="constrained" objectFit={
                          (() => {
                            switch(projects.node.title) {
                              case "Archive sound aspects of city with vinyl postcards.": return "contain";
                              default: return "cover";
                            }
                          })()
                        } />
                      </a>
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.projectTitle}>
                        <a href={projects.node.type? `/${projects.node.slug}` : projects.node.link} style={{textDecoration: "none"}}>
                        {projects.node.title}
                        </a>
                      </h3>
                      <p className={styles.paragraph}>
                        <a href={projects.node.type? `/${projects.node.slug}` : projects.node.link}>
                        {projects.node.summary.summary}
                        </a>
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
