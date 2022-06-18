import React from "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss'
import * as styles from "../styles/layout.module.scss";

const Layout = (props) => {

  return (
    <div className={styles.container} style={{backgroundColor: props.color}}>
      <Header color={props.color} textColor={props.textColor}/>
      <div className={styles.content}>{props.children}</div>
      <Footer textColor={props.textColor}/>
    </div>
  );
};

export default Layout;