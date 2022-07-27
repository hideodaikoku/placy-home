import React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/app.module.scss'
import SmackLogo from "../images/smack-icon.svg"
import Pause from "../images/pause.svg"
import Play from "../images/play.svg"
import { useIntl } from 'gatsby-plugin-react-intl'


const App = () => {
    const intl = useIntl()
    const [onPlay, setPlay] = useState(false)

    return (
        <div id='app' className='sectionContainer'>
            <div className='titleContainer'>
                <h1 className='sectionTitle'>
                    App
                </h1>
            </div>
            <div className={styles.content}>
                {/* <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.paragraphTitle}>
                            {intl.formatMessage({id: `home.app.title`})}
                        </h2>
                        <p className={styles.paragraph}>
                            {intl.formatMessage({id: `home.app.p`})}
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <StaticImage src='../images/1.png' alt='placy-app' />
                        <div className={styles.videoControl} onClick={() => setPlay(!onPlay)}>
                            {onPlay ? 
                            <Pause /> : <Play />}
                        </div>
                    </div>
                </div> */}
                <div className={styles.download}>
                    <a href='https://placysmack.page.link/cooperate-site' 
                    target="_blank" rel="noopener noreferrer">
                        <StaticImage src='../images/smack-game.png' alt='placy' className={styles.smackImg} />
                    </a>
                    <div className={styles.downloadInfo}>
                        <SmackLogo />
                        <div className={styles.appStores}>
                            <a href='https://apps.apple.com/jp/app/placy-smack/id1625088342'
                              target="_blank" rel="noopener noreferrer">
                            <StaticImage src='../images/app-store.png'  
                            alt='app-store' className={styles.appStore} />
                            </a>
                            <a href='https://play.google.com/store/apps/details?id=com.placy.smack'
                              target="_blank" rel="noopener noreferrer">
                            <StaticImage src='../images/google-play-icon.png'  
                            alt='play-store' className={styles.appStore} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App