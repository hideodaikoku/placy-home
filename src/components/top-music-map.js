import React, {useState, useEffect} from "react";
import {useSpring, animated, Spring, SpringRef} from "react-spring"

import * as styles from "../styles/top-music-map.module.scss";

const TopMusicMap = (props) => {

  // get window size
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  // state initial window size
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // Handle window resize
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //boxes array
  const boxes = windowDimensions.width < 700 ?  Array.from(Array(3).keys()) : Array.from(Array(10).keys())

  return (
    <div className={styles.container}>
        <div className={styles.empty}></div>
        <h1 className={styles.topText}>
        Forget the reviews. <br id={styles.firstBreak}/>Follow your rhythm.
        </h1>

        {boxes.map((b) => (
          <Spring 
          loop 
          to={{ x:-240 }} 
          from={
            { 
              rotateZ: -45, 
              x: Math.floor(Math.random() * (windowDimensions.width +240 - windowDimensions.width*0.9) + windowDimensions.width*0.9),
              y: Math.floor(Math.random() * (240 + 80) - 80),
            }
          }
          config={{duration: Math.floor(Math.random() * (11500 -7000) + 7000)}}
          key={b}
          >
          {sty=> <animated.div style={{...sty}}
           className={styles.box}></animated.div>}
        </Spring>
        ))}

    </div>
  );
};

export default TopMusicMap;