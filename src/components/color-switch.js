import React, {useState} from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "../styles/color-switch.module.scss";
import Black from "../images/Black.svg";
import Yellow from "../images/Yellow.svg";
import White from "../images/White.svg";

import Toggle from "./toggle";

const ColorSwitch = () => {
    const [colorSwitchActive, setActive] = useState(false);

    return (
        <div className={styles.container}>
            <StaticImage onClick={() => setActive(!colorSwitchActive)} 
            className={styles.colorSwitch} 
            src="../images/color-switch.png"/>
            {colorSwitchActive && 
            <div className={styles.overlay} onClick={() => setActive(false)}>
                <div className={styles.colorBox} onClick={e=>e.stopPropagation()}>
                    <Toggle theme="yellow"><Yellow /></Toggle>    
                    <Toggle theme="dark"><Black /></Toggle>    
                    <Toggle theme="white"><White /></Toggle>    
                </div>
            </div>}
        </div>
    )
}

export default ColorSwitch;