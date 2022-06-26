import React from "react";
import * as styles from "../styles/top.module.scss";
import Box from "./box"
import InnerBox from "./inner-box"

import useWindowDimensions from "../hooks/window-dimensions";

const Top = () => {
  // Get window size
  const w = useWindowDimensions().width;

  //boxes array
  const boxes = w < 700 ?  Array.from(Array(3).keys()) : Array.from(Array(15).keys())

  return (
    <div className={styles.container}>
        <div className={styles.empty}></div>
        <h1 className={styles.topText}>
        Forget the reviews. <br id={styles.firstBreak}/>Follow your rhythm
        </h1>
        {boxes.map(b => (
          <Box 
          boxClass={styles.box}
          i={b}
          w={w}>
            <InnerBox boxClass={styles.innerBox}/>
          </Box>
        ))}
    </div>
  );
};

export default Top;