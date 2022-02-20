import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss'
import * as styles from "../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <div className={styles.container} style={{backgroundColor:props.color}}>
      <Header />
      <div className={styles.content}>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;