import React from 'react';
import * as styles from "../styles/toggle.module.scss"

const Toggle = (props) => {

    function switchMode(theme) {
        if (typeof window === 'undefined') {
            return null;
        }

        window.__setPreferredTheme(theme);
    }

  return <div onClick={()=>switchMode(props.theme)} className={styles.toggle}>
      {props.children}
  </div>;
};

export default Toggle;