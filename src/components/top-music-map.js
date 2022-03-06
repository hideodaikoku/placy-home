import React, {useState, useEffect} from "react";
import { animated, Spring} from "react-spring";
import InnerBox from "./inner-box";
import * as styles from "../styles/top-music-map.module.scss";

const TopMusicMap = (props) => {

  // get window size
  function getWindowDimensions() {
    const isBrowser = typeof window !== "undefined"
    if (!isBrowser) {
      return {
        width: -700,
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
        Forget the reviews. <br id={styles.firstBreak}/>Follow your rhythm.
        </h1>

        {boxes.map((b) => (
          <Spring 
          loop 
          to={{ x:-450 }} 
          from={
            { 
              rotateZ: -45, 
              x: windowDimensions.width + b*350,
              y: Math.floor(Math.random() * (200 + 200) - 200),
            }
          }
          config={{duration: Math.floor(Math.random() * (11500 -7000) + 7000) + b*1500}}
          key={b}
          >
          {sty=> <animated.div style={
            {
              ...sty,
              width: Math.floor(Math.random() * (340 - 150) + 150),
              height: Math.floor(Math.random() * (350 - 160) + 160)
            }
          }
           className={styles.box}>
              <InnerBox boxClass={styles.innerBoxRound} />
             </animated.div>}
        </Spring>
        ))}

    </div>
  );
};

export default TopMusicMap;