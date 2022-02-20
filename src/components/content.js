import React, { useState, useEffect } from 'react'
import * as styles from '../styles/content.module.scss'
import LeadIcon from '../images/lead-icon.svg'
import MapPin from '../images/map-pin.svg'
import PlusSign from '../images/plus-sign.svg'

const Content = () => {

    // Stage Bundles received
    const [stageBundlesReceived, setStageBundlesReceived] = useState(false)

    // Stage Bundles Fetching
    const [bundles, setBundles] = useState([])
    useEffect(() => {
        fetch(`https://staging.api.app.placy.city/api/v3/bundles/pick_ups`)
            .then(response => response.json())
            .then(resultData => {
                setBundles([...resultData.data.reverse()])
                setStageBundlesReceived(true)
            })
    },[])

    // All bundles received state
    const [allBundlesReceived, setAllBundlesReceived] = useState(false)

    // API Bundles Fetching
    useEffect (() => {
        if (stageBundlesReceived) {
            fetch(`https://api.app.placy.city/api/v3/bundles/pick_ups`)
                .then(response => response.json())
                .then(resultData => {
                    setStageBundlesReceived(false)
                    setBundles([...bundles, ...resultData.data.reverse()])
                    setAllBundlesReceived(true)
                })
        }
    
    }, [stageBundlesReceived, bundles])

    // Show first viewable bundles
    useEffect(() => {
        if (allBundlesReceived) {
            setViewMoreBundles([...bundles.slice(0,3)])
            setAllBundlesReceived(false)
            console.log(bundles)

        }

    }, [allBundlesReceived, bundles])


    // Viewable Placelists
    const [viewablePlacelists, setViewMorePlacelists] = useState([])
    //Viewable Bundles
    const [viewableBundles, setViewMoreBundles] = useState([])

    //View More function
    const ViewMore = (stateView, setStateView, state) => {
        if (stateView.length + 3 <= state.length) {
            setStateView([...state.slice(0,stateView.length+3)])
        } else {
            setStateView([...state])
        }
    }

    //Placelists Received
    const [placelistReceived, setPlacelistReceived] = useState(false)

    // Placelists Fetching
    const [placelists, setPlacelists] = useState([])
    useEffect (() => {
        fetch(`https://api.app.placy.city/api/v2/placelists/feed`)
        .then(response => response.json())
        .then(resultData => {
            const newPlacelists = resultData.data.reverse().slice(0,9).map((placelist) => { 
                const composer = resultData.included.find(({ id }) => id === placelist.relationships.composer.data.id)
                return (
                    {
                        title: placelist.attributes.title,
                        composer: composer,
                        place_count: placelist.attributes.place_count,
                        id: placelist.id
                    }
                )
            })
            setPlacelists([...newPlacelists])
            setPlacelistReceived(true)
        })
    },[])

    // Show first viewable placelists

    useEffect (() => {
        if (placelistReceived) {
            setViewMorePlacelists([...placelists.slice(0,3)])
            setPlacelistReceived(false)
        }
    }, [placelistReceived, placelists])

    return (
        <div id='content' className='sectionContainer'>
            <div className='titleContainer'>
                <h1 className='sectionTitle'>
                    Content
                </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.listContainer}>
                    <div className={styles.listTitle}>
                        Place lists
                    </div>
                    <div className={styles.listContent}>
                        <h2>音楽で場所を辿るプレイスリスト</h2>
                        <div className={styles.cards}>
                            {
                            viewablePlacelists.map((placelist) => (
                                <div key={placelist.id} className={styles.card}>
                                    <a href={`https://web.placy.city/placelist?id=${placelist.id}`}>
                                    <div className={styles.cardImage}>
                                        <img src={placelist.composer.attributes.profile_image_url} alt='place-list'></img>
                                    </div>
                                    <div className={styles.cardText}>
                                        <div className={styles.parentTitle}>
                                        <h4 className={styles.cardTitle}>{placelist.title}</h4>
                                        </div>
                                        <div className={styles.parentDesc}>
                                        <p className={styles.cardAuthor}>{placelist.composer.attributes.name}</p>
                                        </div>
                                        <MapPin />
                                        <p className={styles.cardPlace}>{placelist.place_count}つのプレイス</p>
                                    </div>
                                    </a>
                                </div>
                            ))
                            }
                        </div>
                        { viewablePlacelists.length !== placelists.length 
                        && <button className={styles.viewMore} onClick={() => ViewMore(
                                viewablePlacelists, setViewMorePlacelists, placelists
                                )}>
                                <h3>View More</h3>
                                <div className={styles.plus}><PlusSign /></div>
                            </button>
                        }
                        
                    </div>
                </div>
                <div className={styles.listContainer}>
                    <div className={styles.listTitle}>
                        Bundle lists
                    </div>
                    <div className={styles.listContent}>
                        <h2>音楽で場所を辿るプレイスリスト</h2>
                        <div className={styles.cards}>
                            {
                            viewableBundles.map((bundle) => (
                                <div key={bundle.id} className={ styles.bundleCard}>
                                    <a href='/music-map'>
                                    <div className={styles.bundleImg}>
                                        <img src={bundle.attributes.bundle_main_image_url} alt='bundle-img'></img>
                                    </div>
                                    <div className={styles.bundleText}>
                                        <h4 className={styles.bundleTitle}>{bundle.attributes.title}</h4>
                                        <p className={styles.bundleDesc}>{bundle.attributes.description}</p>
                                        <LeadIcon />
                                        <p className={styles.bundlePlace}>{bundle.attributes.placelists_size}個のプレイスリスト
                                        </p>
                                    </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        {viewableBundles.length !== bundles.length 
                        && <button className={styles.viewMore} onClick={()=> ViewMore(
                            viewableBundles, setViewMoreBundles, bundles
                        )}>
                            <h3>View More</h3>
                            <div className={styles.plus}><PlusSign /></div>
                        </button>}
                        
                    </div>
                </div>
                {/* <div className={styles.listContainer}>
                    <div className={styles.listTitle}>
                        Deep Insight
                    </div>
                    <div className={styles.listContent}>
                        <h2>音楽で場所を辿るプレイスリスト</h2>
                        <div className={styles.cards}>
                            <div className={styles.deepCard}>
                                <div className={styles.deepImage}></div>
                                <div className={styles.deepText}>
                                    <h4 className={styles.deepTitle}>XXXXXXXXXXXXXXXXXX<br></br>
                                    XXXXXXXXXXXXXXXXXX<br></br>
                                    XXXXXXXXXXXXXXXXXX</h4>
                                    <p className={styles.deepDate}>2021/4/28</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.viewMore}>
                            <h3>View More</h3>
                            <div className={styles.plus}><PlusSign /></div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Content