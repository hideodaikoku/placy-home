import React from "react"
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import * as styles from '../styles/post-details.module.scss'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Video from '../components/video'
import RelevantArticles from "../components/relevant-articles"

export default function PostDetail({data}) {
    const entry = data.contentfulEntry
    const Bold = ({ children }) => <span className="bold">{children}</span>
    const Text = ({ children }) => <p className="align-center">{children}</p>

    const options = {
    renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node) => {
        if(node.data.uri.indexOf('youtube.com') !== -1) {
          return <Video videoSrcUrl={node.data.uri} videoTitle={node.content[0].value} videoClass={styles.videoContainer} />
        }
        return <a href={node.data.uri} target="_blank" rel="noopener noreferrer">{node.content[0].value ? node.content[0].value : node.data.uri}</a>
      },
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
      "embedded-asset-block": node => {
        console.log(node.data.target)
        const { gatsbyImageData } = node.data.target
        if (!gatsbyImageData) {
          // asset is not an image
          return null
        }
        return <GatsbyImage image={gatsbyImageData} alt="" className={styles.embeddedImg} />
      },
    },
    }

    return (
      <Layout>
        <Seo />
        <div className={styles.content}>
        <div className={styles.topLinks}>
            <Link to="/">Home</Link> / {entry.title.substring(0,28)}...
        </div>
        <section className={styles.projectContent}>
            <div className={styles.imageContainer}>
                <GatsbyImage image={entry.image.gatsbyImageData} className={styles.image}
                 objectFit={
                    (() => {
                        switch(entry.title) {
                          case "Archive sound aspects of city with vinyl postcards.": return "contain";
                          default: return "cover";
                        }
                      })()
                 } 
                 layout="constrained"
                 alt=""/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.typeDate}>
                 <p className={styles.type}>{entry.internal.type.replace("Contentful","")}</p>
                 {entry.date ? <p className={styles.date}>{entry.date}</p> : null}
                </div>
                <h1>{entry.title}</h1>
                {entry.author ? <p className={styles.author}>by <b>{entry.author}</b></p>: null}

                {entry.content
                ? renderRichText(entry.content, options)
                : <>
                    <h4 style={{textAlign:"start"}}>Coming soon...</h4>
                  </>}
                <Link to="/" className={styles.button}>
                    <p className={styles.buttonText}>
                        Back
                    </p>
                    <span className={styles.arrow}>
                      <svg width="inherit" height="inherit" viewBox="0 0 160 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-0.353553 3.64645C-0.548816 3.84171 -0.548816 4.15829 -0.353553 4.35355L2.82843 7.53553C3.02369 7.7308 3.34027 7.7308 3.53553 7.53553C3.7308 7.34027 3.7308 7.02369 3.53553 6.82843L0.707107 4L3.53553 1.17157C3.7308 0.976311 3.7308 0.659728 3.53553 0.464466C3.34027 0.269204 3.02369 0.269204 2.82843 0.464466L-0.353553 3.64645ZM0 4.5H160V3.5H0V4.5Z" fill="black"/>
                      </svg>
                      <svg width="inherit" height="inherit" viewBox="0 0 160 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-0.353553 3.64645C-0.548816 3.84171 -0.548816 4.15829 -0.353553 4.35355L2.82843 7.53553C3.02369 7.7308 3.34027 7.7308 3.53553 7.53553C3.7308 7.34027 3.7308 7.02369 3.53553 6.82843L0.707107 4L3.53553 1.17157C3.7308 0.976311 3.7308 0.659728 3.53553 0.464466C3.34027 0.269204 3.02369 0.269204 2.82843 0.464466L-0.353553 3.64645ZM0 4.5H160V3.5H0V4.5Z" fill="black"/>
                      </svg>
                    </span>
                </Link>
            </div>
        </section>
        <section className={styles.relArticles}>
            <div className={styles.titleContainer}>
                <h1 className={styles.sectionTitle} >Relevant Articles</h1>
            </div>
            <RelevantArticles id={entry.id}/>
        </section>
        <div className={styles.bottomLinks}>
            <Link to="/">Home</Link> / {entry.title.substring(0, 28)}...
        </div>
        </div>
        
      </Layout>
    )
}

export const articleQuery = graphql`
query($id: String!) {
    contentfulEntry(id: {eq: $id }) {
        ... on ContentfulProjects {
            id
            content {
              raw
              references {
                contentful_id
                __typename
                gatsbyImageData
              }
            }
            image {
              gatsbyImageData
            }
            title
            internal {
              type
            }
          }
          ... on ContentfulNews {
            id
            date(formatString: "YYYY/MM/DD")
            title
            image {
              gatsbyImageData
              title
            }
            content {
              raw
              references {
                contentful_id
                __typename
                gatsbyImageData
              }
            }
            internal {
              type
            }
          }
        ... on ContentfulFeature {
            id
            slug
            title
            content {
              raw
              references {
                contentful_id
                __typename
                gatsbyImageData
              }
            }
            author
            date (formatString: "YYYY/MM/DD")
            image {
                gatsbyImageData
            }
            internal {
                type
            }
        }
    }
  }
`
  