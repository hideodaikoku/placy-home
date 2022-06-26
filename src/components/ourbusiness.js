import React from "react";
import * as styles from "../styles/ourbusiness.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { useIntl } from "gatsby-plugin-react-intl"


const OurBusiness = () => {
  const intl = useIntl()
  return (
    <div id="ourBusiness" className="sectionContainer">
      <div className="titleContainer">
        <h1 className="sectionTitle">
          Our Business
        </h1>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {intl.formatMessage({id: "about.ourBusiness.title"})}
          </h2>
        <section className={styles.section}>
          <div className={styles.imageContainer}>
            <StaticImage src={'../images/2.png'} width={500} alt="Placy App"/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.sectionTitle}>
              <span>{intl.formatMessage({id: "about.ourBusiness.label1"})}</span>
              <h3>
                {intl.formatMessage({id: "about.ourBusiness.subt1"})}
              </h3>
            </div>
            <p>
            {intl.formatMessage({id: "about.ourBusiness.p1a"})}
            </p>
            <p>
            {intl.formatMessage({id: "about.ourBusiness.p1b"})}
            </p>
          </div>

        </section>
        <section className={styles.section}> 
        <div className={styles.imageContainer}>
          <StaticImage src={'../images/3.png'} width={500} alt="Placy App"/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.sectionTitle}>
              <span>{intl.formatMessage({id: "about.ourBusiness.label2"})}</span>
              <h3>
              {intl.formatMessage({id: "about.ourBusiness.subt2"})}
              </h3>
            </div>
            <p>
            {intl.formatMessage({id: "about.ourBusiness.p2a"})}
            </p>
            <p>
            {intl.formatMessage({id: "about.ourBusiness.p2b"})}
            </p>
          </div>
        </section>
        <section className={styles.section}>
        <div className={styles.imageContainer}>
          <StaticImage src={'../images/4.png'} width={500} alt="Placy App"/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.sectionTitle}>
              <span>{intl.formatMessage({id: "about.ourBusiness.label3"})}</span>
              <h3>
              {intl.formatMessage({id: "about.ourBusiness.subt3"})}
              </h3>
            </div>
            <p>
            {intl.formatMessage({id: "about.ourBusiness.p3a"})}
            </p>
            <p>
            {intl.formatMessage({id: "about.ourBusiness.p3b"})}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurBusiness;