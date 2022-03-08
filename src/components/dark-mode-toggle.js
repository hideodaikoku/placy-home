import React, { useState, useEffect } from 'react';
import DarkSwitch from "../images/switch.svg"
import * as styles from "../styles/dark-mode-toggle.module.scss"

const DarkModeToggle = (props) => {
    
    function checkTheme() {
        if (typeof window === 'undefined') {
            // Switch not rendered before site gets to user
            return null;
        }

        return window.__theme === 'dark';
    }

    const [checked, setChecked] = useState(checkTheme());

    function switchMode() {
        setChecked(!checked)
    }

    useEffect(() => {

        window.__setPreferredTheme(checked ? 'dark' : 'light')
    }, [checked])


  return <DarkSwitch onClick={()=>switchMode()} className={props.textColor && styles.toggle} />;
};

export default DarkModeToggle;