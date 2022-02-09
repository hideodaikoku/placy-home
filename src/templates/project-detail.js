import React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/project-details.module.scss'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from '@contentful/rich-text-types'

export default function ProjectDetail({data}) {
    const project = data.contentfulProjects
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>

    const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
            <>
            <h2>Embedded Asset</h2>
            <pre>
                <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
            </>
        )
        },
    },
    }

    return (
      <Layout>
        <Seo />
        <div className={styles.content}>
        <div className={styles.topLinks}>
                <p>
                    <Link to="/projects">Projects</Link> / {project.title.substring(0,28)}...
                </p>
        </div>
        <div className={styles.projectContent}>
            <div className={styles.imageContainer}>
                <GatsbyImage image={project.image.gatsbyImageData} className={styles.image}
                 objectFit={
                    (() => {
                        switch(project.title) {
                          case "Archive sound aspects of city with vinyl postcards.": return "contain";
                          default: return "cover";
                        }
                      })()
                 } layout="constrained"/>
            </div>
            <div className={styles.textContainer}>
                {project.content
                ? renderRichText(project.content, options)
                : <>
                    <h1>{project.title}</h1>
                    <h4 style={{textAlign:"start"}}>Coming soon...</h4>
                    </>}
                <Link to="/projects">
                    <div className={styles.backBox}>
                    <p>Back to the list</p>
                    <div className={styles.arrowContainer}>
                        <StaticImage src="../images/arrow.png" alt="" width={160} layout="constrained" objectFit="contain"/>
                    </div>
                    </div>
                </Link>
            </div>
            
            
        </div>
        <div className={styles.bottomLinks}>
            <p>
                <Link to="/projects">Projects</Link> / {project.title.substring(0, 28)}...
            </p>
        </div>
        </div>
        
      </Layout>
    )
}
  
export const projectQuery = graphql`
query($slug: String!) {
    contentfulProjects(slug: {eq: $slug}) {
        id
        title
        slug
        image {
            gatsbyImageData
        }
        content {
            raw
        }
        }
}
`
  