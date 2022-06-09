import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons';

import styles from './SocialMedia.module.scss';

const SocialMedia = () => (
  <div className={styles.container}>
    <ul className={styles.icons}>
      <li><Link to='/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
      <li><Link to='/'><FontAwesomeIcon icon={faFacebook} /></Link></li>
      <li><Link to='/'><FontAwesomeIcon icon={faYoutube} /></Link></li>
    </ul>
  </div>
);

export default SocialMedia;
