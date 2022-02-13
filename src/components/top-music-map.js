import React from "react";
import * as styles from "../styles/top-music-map.module.scss";

const TopMusicMap = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.empty}></div>
        <h1 className={styles.topText}>
        Forget the reviews. <br id={styles.firstBreak}/>Follow your rhythm.
        </h1>
    </div>
  );
};

export default TopMusicMap;