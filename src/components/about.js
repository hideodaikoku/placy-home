import React from "react";
import * as styles from "../styles/about.module.scss";
import textData from '../data/about.json';
import { StaticImage } from "gatsby-plugin-image";

const About = (props) => {
  return (
    <div className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          Our Business
        </h1>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>{textData.title}</h2>
        <section className={styles.section}>
          <div className={styles.imageContainer}>
            <StaticImage src={'../images/2.png'} backgroundColor='white' width={1000} alt="Placy App"/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.sectionTitle}>
              <span>{textData.label_1}</span>
              <h3>
                {textData.subtitle_1}
              </h3>
            </div>
            <p>
              {textData.paragraph_1a}
            </p>
            <p>
              {textData.paragraph_1b}
            </p>
            <button>
              Learn More
            </button>
          </div>

        </section>
        <section className={styles.section}> 
        <div className={styles.imageContainer}>
          <StaticImage src={'../images/3.png'} backgroundColor='white' width={1000} alt="Placy App"/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.sectionTitle}>
              <span>{textData.label_2}</span>
              <h3>
                {textData.subtitle_2}
              </h3>
            </div>
            <p>
              {textData.paragraph_2a}
            </p>
            <p>
              {textData.paragraph_2b}
            </p>
            <button>
              Learn More
            </button>
          </div>
        </section>
        <section className={styles.section}>
        <div className={styles.imageContainer}>
          <StaticImage src={'../images/4.png'} backgroundColor='white' width={1000} alt="Placy App"/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.sectionTitle}>
              <span>{textData.label_3}</span>
              <h3>
                {textData.subtitle_3}
              </h3>
            </div>
            <p>
              {textData.paragraph_3a}
            </p>
            <p>
              {textData.paragraph_3b}
            </p>
            <button>
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;