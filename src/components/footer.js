import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.scss";


const Footer = () => {
  
  return (
    <div className={styles.container}>
      <ul className={styles.top}>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Contact Us">
                Instagram
            </a>
          </li>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Contact Us">
                Twitter
            </a>
          </li>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Contact Us">
                Facebook
            </a>
          </li>
      </ul>
      <ul className={styles.bottom}>
        <li className={styles.fineprint}>
          &copy; Placy, 2021
        </li>
        <li>
          <a  
              className={styles.fineprint}
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Contact Us">
                Terms and Conditions
            </a>
        </li>
        <li>
          <a  
              className={styles.fineprint}
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Contact Us">
                Privacy Policy
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;