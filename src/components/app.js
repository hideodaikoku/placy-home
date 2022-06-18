import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/app.module.scss'
import PlacyLogo from "../images/placy-logo.svg"
import { useIntl } from 'gatsby-plugin-react-intl'

const App = () => {
    const intl = useIntl()
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
                            {intl.formatMessage({id: `home.app.title`})}
                        </h2>
                        <p className={styles.paragraph}>
                            {intl.formatMessage({id: `home.app.p`})}
                        </p>
                    </div>
                    <StaticImage src='../images/5.png' alt='placy-app' className={styles.imageContainer}/>
                </div>
                <div className={styles.download}>
                    <a href='https://apps.apple.com/jp/app/placy/id1474567327' 
                    target="_blank" rel="noopener noreferrer">
                        <StaticImage src='../images/app-img.png' alt='placy' className={styles.placyImg} />
                        <div className={styles.downloadInfo}>
                            <p className={styles.smack}>仮ですSMACK後で差し替え</p>
                            <PlacyLogo />
                            <p className={styles.slogan}>Forget the reviews. Follow your rhythm.</p>
                            <StaticImage src='../images/app-store.png' width={130} 
                            alt='app-store' className={styles.appStore} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App