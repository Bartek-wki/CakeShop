import React from 'react';

import styles from './Header.module.scss';

import SocialMedia from '../SocialMedia/SocialMedia';
import Navbar from '../NavBar/NavBar';

const Header = () => (
  <div>
    <SocialMedia />
    <div className={styles.logoContainer}>
      <img alt='' src={`${process.env.PUBLIC_URL}/images/logo.jpg`} />
    </div>
    <Navbar />
  </div>
);

export default Header;
