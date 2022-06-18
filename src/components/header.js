import React, { useState } from "react";
import { Link } from "gatsby";
import styled, { createGlobalStyle } from 'styled-components'
import * as styles from "../styles/header.module.scss";
import font from '../fonts/GT-Zirkon-Bold.woff2';

import PlacyLogo from "../images/placy-logo.svg"
import InstaIcon from "../images/instagram.svg"
import FaceIcon from "../images/facebook.svg"
import TwitIcon from "../images/twitter.svg"
import Black from "../images/Black.svg"
import White from "../images/White.svg"
import Yellow from "../images/Yellow.svg"

import Toggle from "./toggle"
import ColorSwitch from "./color-switch";
import LanguageSwitch from "./language-switch";



const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'GT Zirkon';
    src: url(${font}) format('truetype');
  }
  a {
    font-family: 'GT Zirkon';
  }
  body{
    height: 100vh;
    overflow: ${({nav})=>nav?"hidden":"visible"};
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div{
    height: 2px;
    background-color: black;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: transform 300ms ease-in;
    :first-child{
      width: ${({nav})=>nav?"1.65rem":"0.8rem"};
      transform: ${({nav})=>nav?"rotate(45deg)":"rotate(0)"}
    }

    :nth-child(2){
      width: 1.5rem;
      opacity: ${({nav})=>nav?"0":"1"};
    }

    :nth-child(3){
      width: ${({nav})=>nav?"1.65rem":"1.2rem"};
      transform: ${({nav})=>nav?"rotate(-45deg)":"rotate(0)"}
    }
  }
`

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: flex-start;
  text-align: left;
  height: ${({ nav }) => nav ? "100vh" : "0"};
  width: 100%;
  background-color: #f3c91f;
  z-index: 4;
  position: absolute;
  top: 0;
  right:0;
  visibility: ${({ nav }) => nav ? "visible" : "hidden"};
  transform: ${({ nav }) => nav ? "translateY(10%)" : "translateY(100%)"};
  transition: transform 500ms;
  padding: 1rem;
  ul{
    list-style-type: none;
    li{
      color: black;
      a{
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        line-height: 3rem;
        background-image: linear-gradient(#000, #000);
        background-position: 0 100%; /*OR bottom left*/
        background-size: 0% 2px;
        background-repeat: no-repeat;
        transition:
        background-size 0.3s,
        background-position 0s 0.3s; /*change after the size immediately*/
        :hover{
          background-position: 100% 100%; /*OR bottom right*/
          background-size: 100% 2px;
        }
      }
    }
  }

  div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    margin-left: 1.45rem;
  }
`

const Header = (props) => {
  const [nav, showNav] = useState(false);

  function handleChange() {
    showNav(!nav)
  }

  return (
    <div className={styles.container} style={{backgroundColor:props.color}}>
      <GlobalStyle nav={nav}/>
      <ColorSwitch />
      <div className={styles.innerCont}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <PlacyLogo />
        </Link>
        <div className={styles.slogan}> Forget the reviews. Follow your rhythm.</div>
      </div>
      <div 
        className={styles.menuIcon}>
        <MenuIcon
          nav={nav}
          onClick={handleChange}
        >
          <div />
          <div />
          <div />
        </MenuIcon>
      </div>
      <div className={styles.mobileMenu}>
        <Menu nav={nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <a href="https://placy.typeform.com/to/lfzKCU" target="_blank" rel="noopener noreferrer" alt="Contact Us">Contact</a>
            </li>
          </ul>
          <div className={styles.socialMedia}>
            <a
              className={styles.navLink}
              href="https://www.instagram.com/placy_city/" 
              target="_blank" 
              rel="noopener noreferrer">
              <InstaIcon />
            </a>
            <a 
              className={styles.navLink}
              href="https://twitter.com/placy_city" 
              target="_blank" 
              rel="noopener noreferrer">
              <TwitIcon />
            </a>
            <a 
              className={styles.navLink}
              href="https://www.facebook.com/placy.city/" 
              target="_blank" 
              rel="noopener noreferrer">
              <FaceIcon />
            </a>
          </div>
          <LanguageSwitch></LanguageSwitch>
        </Menu>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Toggle theme="yellow"><Yellow /></Toggle>
          </li>
          <li className={styles.navItem}>
            <Toggle theme="dark"><Black /></Toggle>
          </li>
          <li className={styles.navItem}>
            <Toggle theme ="white"><White /></Toggle>
          </li>
          <li className={styles.navItem}>
            <LanguageSwitch></LanguageSwitch>
          </li>
        </ul>
      </nav>
      </div>

    </div>
  );
};

export default Header;