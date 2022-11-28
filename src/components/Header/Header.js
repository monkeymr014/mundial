import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss"

const Header = () => (
   <nav className={styles.wrapper} >
      <NavLink className={styles.navLink} to="/" >Mecze</NavLink>
      <NavLink className={styles.navLink} to="/standings" >Tabele</NavLink>
      
   </nav>
)

export default Header