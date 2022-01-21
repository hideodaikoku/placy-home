import React from "react";
import * as styles from "../styles/company.module.scss";
import textData from '../data/company.json';

const Company = () => {
  return (
    <div id="company" className="sectionContainer">
    <div className="titleContainer">
      <h1 className="sectionTitle">
        Company
      </h1>
    </div>
    <div className={styles.container}>
      {
        textData.map((item, idx)=>(
          <div key={idx} className={styles.row}>
            <strong className={styles.label}>{item.label}</strong>
            <p className={styles.value}>{item.value}</p>
          </div>
        ))
      }
    </div>
  </div>
  );
};

export default Company;