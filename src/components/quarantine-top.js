import React from "react";
import * as styles from "../styles/quarantine-top-styles.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const QuarantineTop = () => {

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <StaticImage
          src="../images/placy_pqr.jpg"
          className={styles.pqr}
          alt="quarantine image"
        />
      </div>
      <p className={styles.textContainer}>
        Cities are the central nodes of our modern economy; hubs of creativity
        and innovation. Our globalised system relies on us living collectively,
        but pandemics are inherently anti-city, as they could force the
        breakdown of collective cooperation. How will our cities evolve, to
        adapt to this new reality?
        <br />
        <br />
        Cities across the world are establishing unique initiatives and projects
        to combat the effects of this situation; and by exploring each city's
        approach, perhaps we can gain a glimpse of our post quarantine world.
      </p>
      <p className={styles.textContainer}>
        Our aim is to collate around 50 articles from contributors around the
        world, to capture their thoughts and state of mind during the covid19
        pandemic, covering urban quarantine culture, its side effects and
        philosophical ramifications, while touching on the situation in each
        country. This way we can form a holistic snapshot of the mind-state of
        residents in various cities across the world.
      </p>
      <div className={styles.buttonContainer}>
        <a
          href="https://www.allthingsurban.net/career/613"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          APPLY TO BE RESEARCH WRITER
        </a>
      </div>
      <div className={styles.diagram}>
        <div className={styles.box}>
          <strong>1st Stage: Collated articles from each country</strong> <br />{" "}
          Description of how things are now
        </div>
        <div className={styles.arrow}>&#8595;</div>
        <div className={styles.box}>
          <strong>2nd Stage: Online Conference</strong> <br /> Aspirations for
          how things should be
        </div>
        <div className={styles.arrow}>&#8595;</div>
        <div className={styles.box}>
          <strong>
            3rd Stage: Proposing an actionable plan to municipal governments
          </strong>
        </div>
      <div className={styles.mediaContainer}>
        <h1>Media Partners</h1>
        <div className={styles.mediaImgContainer}>
          <div className={styles.mediaImg}>
            <StaticImage src="../images/alltu.png" alt="all-things-japan"/>
          </div>
          <div className={styles.mediaImg}>
            <StaticImage src="../images/spr.jpg" alt="spread"/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuarantineTop;