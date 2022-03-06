import React, {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss'
import * as styles from "../styles/layout.module.scss";

const Layout = (props) => {
  const [darkMode, setDark] = useState(false)

  const darkStyle = {
    backgroundColor: darkMode ? "#000000" : "#f3c91f"
  }

  return (
    <div className={styles.container} style={darkStyle}>
      <Header color={props.color} onDark={()=> setDark(!darkMode)}/>
      <div className={styles.content}>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;