import React from "react";
import * as styles from "../styles/top.module.scss";

const Top = (props) => {
  return (
    <div className={styles.container}>
        <div className={styles.empty}></div>
        <h1 className={styles.topText}>
        We are Placy,<br id={styles.firstBreak}/> a collective reinterpreting the value of place,<br id={styles.secondBreak}/> through spatial analysis and cultural curation.
        </h1>
    </div>
  );
};

export default Top;