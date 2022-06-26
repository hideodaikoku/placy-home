import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/vision.module.scss";
import { useIntl } from "gatsby-plugin-react-intl"

const Vision =()=>{
  const intl = useIntl()
  return (
    <div id="vision" className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          Vision
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.paragraphTitle}>
            {intl.formatMessage({id: "about.vision.title"})}
          </h2>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              {intl.formatMessage({ id: "about.vision.p1"})}
            </p>
            <p className={styles.paragraph}>
              {intl.formatMessage({ id: "about.vision.p2"})}
            </p>
          </section>
        </div>
        <div className={styles.imageContainer}>
          <StaticImage src='../images/1.png' width={500} alt='maria-medem' /> 
        </div>
      </div>
    </div>
  );
};

export default Vision;