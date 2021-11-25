import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss'
import * as styles from "../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.footerContainer}>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;