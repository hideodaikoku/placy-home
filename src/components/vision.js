import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/vision.module.scss";
import text from '../data/vision.json';

const Vision =()=>{
  return (
    <div className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          Vision
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <StaticImage src='../images/1.png' width={1000} alt='maria-medem' /> 
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.paragraphTitle}>{text.title}</h2>
          <section className={styles.section}>
          <p className={styles.paragraph}>{text.paragraph_1}</p>
          <p className={styles.paragraph}>{text.paragraph_2}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Vision;