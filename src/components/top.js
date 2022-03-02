import React, {useState, useEffect} from "react";
import { animated, Spring} from "react-spring"
import * as styles from "../styles/top.module.scss";

const Top = () => {
  // get window size
  function getWindowDimensions() {
    const isBrowser = typeof window !== "undefined"
    if (!isBrowser) {
      return {
        width: 2200,
        height: 900
      };
    }

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

    if (typeof window === "undefined") {
      return handleResize();
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
        We are Placy,<br id={styles.firstBreak}/> a collective reinterpreting the value of place,<br id={styles.secondBreak}/> through spatial analysis and cultural curation.
        </h1>
        {boxes.map((b) => (
          <Spring 
          loop 
          to={{x:-240}} 
          from={
            {x: Math.floor(Math.random() * (windowDimensions.width+240 - windowDimensions.width*0.9) + windowDimensions.width*0.9)}
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

export default Top;