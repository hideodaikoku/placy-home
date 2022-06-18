import React from 'react'
import { Link } from "gatsby"
import * as styles from '../styles/for-shops.module.scss'
import text from '../data/for-shops.json'

const ForShops = () => {
    return (
        <div id='for-shops' className='sectionContainer'>
            <div className='titleContainer'>
                <h1 className='sectionTitle'>
                    For shops
                </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h2 className={styles.paragraphTitle}>
                        {text.title}
                    </h2>
                    <p className={styles.paragraph}>
                        {text.paragraph}
                    </p>
                </div>
                <Link to="/music-map">
                  {text.button}
                </Link>
                
            </div>
        </div>
    )
}

export default ForShops