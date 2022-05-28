import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.scss";


const Footer = (props) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.topContainer} style={{borderTop: `1px solid ${props.textColor}`, 
        borderBottom: `1px solid ${props.textColor}`}}>
      <ul className={styles.top}>
          <li className={styles.navList}>
            <Link className={styles.navLink} to="/">Home</Link>
          </li>
          <li className={styles.navList}>
            <Link className={styles.navLink} to="/about">About</Link>
          </li>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="https://form.typeform.com/to/lfzKCU?typeform-source=placy.typeform.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Contact Us"
              style={{color:props.textColor}}>
                Contact
            </a>
          </li>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="https://www.instagram.com/placy_city/" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Instagram"
              style={{color:props.textColor}}>
                Instagram
            </a>
          </li>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="https://twitter.com/placy_city" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Twitter"
              style={{color:props.textColor}}>
                Twitter
            </a>
          </li>
          <li className={styles.navList}>
            <a  
              className={styles.navLink}
              href="https://www.facebook.com/placy.city/" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Facebook"
              style={{color:props.textColor}}>
                Facebook
            </a>
          </li>
      </ul>
      </div>
      <ul className={styles.bottom}>
        <li className={styles.fineprint}
          style={{color:props.textColor}}>
          &copy; Placy, 2021
        </li>
        <li>
          <a  
              className={styles.fineprint}
              href="/document/term_of_use.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Terms and Conditions"
              style={{color:props.textColor}}>
                Terms and Conditions
            </a>
        </li>
        <li>
          <a  
              className={styles.fineprint}
              href="/document/privacy_policy.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              alt="Privacy Policy"
              style={{color:props.textColor}}>
                Privacy Policy
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;