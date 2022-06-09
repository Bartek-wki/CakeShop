import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

const Navbar = () => (
  <ul className={styles.navbar}>
    <li><NavLink to={'/'} className={({isActive}) => (isActive ? styles.selected : null)}>Bakery</NavLink></li>
    <li><NavLink to={'/cakes'} className={({isActive}) => (isActive ? styles.selected : null)}>Cakes</NavLink></li>
    <li><NavLink to={'/pastries'} className={({isActive}) => (isActive ? styles.selected : null)}>Pastries</NavLink></li>
    <li><NavLink to={'/About'} className={({isActive}) => (isActive ? styles.selected : null)}>About</NavLink></li>
  </ul>
);

export default Navbar;
