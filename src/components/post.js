import React from "react"
import * as styles from "../styles/post.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Post = ({ article }) => {
    return (
        <div key={article.node.id} className={styles.post}>
            <Link to={`/${article.node.slug}`}>
            <GatsbyImage 
            image={article.node.image.gatsbyImageData}
            className={styles.imgContainer}></GatsbyImage>
            <div className={styles.postInfo}>
                <div className={styles.type}>{article.node.internal.type.replace("Contentful","")}</div>
                <div className={styles.date}>{article.node.date && "20"+article.node.date}</div>
                <h3 className={styles.postTitle}>{article.node.title}</h3>
                <p className={styles.postDesc}>{article.node.summary && article.node.summary.summary}</p>
            </div>
            </Link>
        </div>
    )
}

export default Post