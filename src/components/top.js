import React, { useState, useEffect} from "react";
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
        We are Placy,<br id={styles.firstBreak}/> a collective reinterpreting the value of place,<br id={styles.secondBreak}/> through spatial analysis and cultural curation.
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