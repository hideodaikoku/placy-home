import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/app.module.scss'
import text from '../data/app.json'
const App = () => {
    return (
        <div id='app' className='sectionContainer'>
            <div className='titleContainer'>
                <h1 className='sectionTitle'>
                    App
                </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.paragraphTitle}>
                            {text.title}
                        </h2>
                        <p className={styles.paragraph}>
                            {text.paragraph}
                        </p>
                    </div>
                    <a href='https://apps.apple.com/jp/app/placy/id1474567327' target='_blank' rel='noopener noreferrer'>
                    <StaticImage src='../images/app-store.png' width={130} alt='app-store'/>
                    </a>
                    
                </div>
                <div className={styles.imageContainer}>
                    <StaticImage src='../images/5.png' alt='placy-app' />
                </div>
            </div>
        </div>
    )
}

export default App